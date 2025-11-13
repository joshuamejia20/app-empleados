<?php
	# Framework: extData
	# Copyright(c) 2013 CSJ.OJ, EL SALVADOR
	# Desarrollador: ING. GERMAN ALFONSO GARCIA GARCIA
	# email: german_garcia@csj.gob.sv

	ob_start();
	@session_start();

	date_default_timezone_set('America/El_Salvador'); 
	setlocale(LC_TIME, 'spanish');
	header("Content-Type: text/html;charset=utf-8");
	header( "Cache-Control: no-cache, must-revalidate" );
	header( "Expires: Mon, 20 Dec 2000 01:00:00 GMT" );
	//error_reporting(E_ALL);
	error_reporting(E_ERROR);
	define('_RUN_MODE_', 'normal'); # normal, test
	define('_DB_SERVER_', '10.2.0.181');
	define('_DB_PORT_', '3306');
	define('_DB_NAME_', 'dbsictel_test');
	define('_DB_USER_', 'dev');
	define('_DB_PASSWD_', 'D3$arr0110');
	define('__BASE_URI__', '/telefonia/');
	//define('__BASE_URI_SYS__', '/var/www/html/telefonia/');
	define('__BASE_URI_SYS__', 'C:/xampp/htdocs/telefonia/');
	//define('__BASE_URI_SYS__', '/Library/WebServer/Documents/control_telefonia/');
?>
