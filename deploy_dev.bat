@echo off

git checkout dev
git add .
git commit -m "deploy"
git push origin dev

del /q "web\*"
FOR /D %%p IN ("web\*.*") DO rmdir "%%p" /s /q

npm run build

exit
