@echo off
start "" "httpresponse.exe"
ping 127.0.0.1 -n 3 > nul
echo $WshShell = New-Object -comObject WScript.Shell >> temp.ps1
echo $WshShell.AppActivate("My Program") >> temp.ps1
echo $WshShell.SendKeys("%1=%2{ENTER}") >> temp.ps1
PowerShell.exe -ExecutionPolicy Bypass -File temp.ps1
del temp.ps1