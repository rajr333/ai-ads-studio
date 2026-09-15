const { spawn } = require("child_process");
const isWinNode24 = process.platform === "win32" && parseInt(process.versions.node.split(".")[0], 10) >= 24;

let command, args, options;
if (isWinNode24) {
  command = process.execPath;
  args = ["-r", "./patch-node24.cjs", "./node_modules/next/dist/bin/next", "build"];
  options = { stdio: "inherit" };
} else {
  command = "npx";
  args = ["next", "build"];
  options = { stdio: "inherit", shell: process.platform === "win32" };
}

console.log(`> Build runner: ${command} ${args.join(" ")}`);
const child = spawn(command, args, options);
child.on("exit", (code) => {
  process.exit(code || 0);
});
