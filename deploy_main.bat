@echo off

xcopy "dist\*" "web\" /f /i /y /s

cd web

git checkout main
git add .
git commit -m "deploy"
git push origin main

exit