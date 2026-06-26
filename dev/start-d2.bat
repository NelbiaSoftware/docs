@echo off
set in=C:\Users\Aleks\FrontendProjects\web\docs\static\img\arch\overall.d2
set out=C:\Users\Aleks\FrontendProjects\web\docs\static\img\arch\overall.svg

"c:\Program Files\d2\d2.exe" --watch=true --center=true --scale=1 --layout=elk -t=3 "%in%" "%out%"