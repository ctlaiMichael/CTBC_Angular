rem author: LeoLiang
rem date: 2018/07/27
rem function: Auto ng build then auto copy file then auto prepare

rem 刪除Cordova\www的資料夾
rem --------------------
rd ..\Cordova\www /S /Q
rem --------------------
rem 刪除Cordova\www資料夾結束
rem --------------------

if "%1" =="prod" goto PROD

@ECHO
rem --------------------
rem 開始建置專案
rem --------------------

:NONE
 call ng build --aot --output--path ../Cordova/www
goto DONE

:PROD
call ng build --prod --aot --output--path ../Cordova/www

rem --------------------
rem 建置專案結束
rem --------------------
rem 進行Cordova prepare
rem --------------------
:DONE
cd ..
cd Cordova
call cordova prepare
rem --------------------