rem author: LeoLiang
rem date: 2018/07/27
rem function: Auto ng build then auto copy file then auto prepare

rem �R��Cordova\www����Ƨ�
rem --------------------
rd ..\Cordova\www /S /Q
rem --------------------
rem �R��Cordova\www��Ƨ�����
rem --------------------

if "%1" =="prod" goto PROD

@ECHO
rem --------------------
rem �}�l�ظm�M��
rem --------------------

:NONE
 call ng build --aot --output--path ../Cordova/www
goto DONE

:PROD
call ng build --prod --aot --output--path ../Cordova/www

rem --------------------
rem �ظm�M�׵���
rem --------------------
rem �i��Cordova prepare
rem --------------------
:DONE
cd ..
cd Cordova
call cordova prepare
rem --------------------