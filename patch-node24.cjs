// Fix for Node.js 24 on Windows returning EISDIR instead of EINVAL on non-symlinks
const fs = require('fs');

const origSync = fs.readlinkSync;
fs.readlinkSync = function(...args) {
  try {
    return origSync.apply(this, args);
  } catch (err) {
    if (err && (err.code === 'EISDIR' || err.code === 'UNKNOWN')) {
      err.code = 'EINVAL';
    }
    throw err;
  }
};

const origCallback = fs.readlink;
fs.readlink = function(...args) {
  const cb = args[args.length - 1];
  if (typeof cb === 'function') {
    args[args.length - 1] = function(err, linkString) {
      if (err && (err.code === 'EISDIR' || err.code === 'UNKNOWN')) {
        err.code = 'EINVAL';
      }
      cb(err, linkString);
    };
  }
  return origCallback.apply(this, args);
};

if (fs.promises && fs.promises.readlink) {
  const origPromises = fs.promises.readlink;
  fs.promises.readlink = async function(...args) {
    try {
      return await origPromises.apply(this, args);
    } catch (err) {
      if (err && (err.code === 'EISDIR' || err.code === 'UNKNOWN')) {
        err.code = 'EINVAL';
      }
      throw err;
    }
  };
}
