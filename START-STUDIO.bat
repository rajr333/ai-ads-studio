@echo off
title AI ADS CREATIVE STUDIO - SERVER
color 0A
cd /d "f:\mystery\d2\ai-ads-studio"

echo ===================================================
echo     AI ADS CREATIVE STUDIO - PRODUCTION SERVER
echo ===================================================
echo.
echo Starting server on:
echo   Local:   http://localhost:3005
echo   Network: http://10.183.248.67:3005
echo   Admin:   http://localhost:3005/admin (Key: creative2026!)
echo.
echo Opening website in your default browser...
start "" http://localhost:3005
echo.
echo Press Ctrl+C in this window to stop the server anytime.
echo.

node -r ./patch-node24.cjs ./node_modules/next/dist/bin/next start -p 3005 -H 0.0.0.0
pause
