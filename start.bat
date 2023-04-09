@echo off
start /B cmd /c "node index.js"
cd client
start /B cmd /c "yarn dev"
start "" "http://localhost:5173/"