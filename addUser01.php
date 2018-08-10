<?php
	
	header("content-type","text/html;charset=utf-8");
	
	//一、接收前端传来的数据
	$firstName = $_POST["firstName"];
	$lastName = $_POST["lastName"];
	// $contry = $_POST["contry"];
	$birthday = $_POST["birthday"];	
	$email = $_POST["email"];
	$password = $_POST["password"];	
	//二、保存数据
	//1、建立连接并选择数据库
	// $link = mysqli_connect("localhost", "root", "12345678", "userTable");

	// /* check connection */
	// if (mysqli_connect_errno()) {
	//     printf("Connect failed: %s\n", mysqli_connect_error());
	//     exit();
	// }

	
	// // if (mysqli_query($link, "CREATE TEMPORARY TABLE myCity LIKE City") === TRUE) {
	// //     printf("Table myCity successfully created.\n");
	// // }


	$con = mysqli_connect("localhost","root","12345678","userTable");
	if(!$con){
		//die("连接失败".mysql_error());
		echo "0";	
	}	
	// mysql_select_db("userSQL",$con);
	
	//2、执行SQL语句
	$sqlStr = "insert into userTable(firstName,lastName,contry,birthday,email,password)
              values('".$firstName."','".$lastName."','".$contry."','".$birthday."','".$email."','".$password."')";
	//echo $sqlStr;
	
	mysqli_query($con,$sqlStr);
	
	//3、关闭数据库
	mysqli_close($con);
	
	//三、给前端响应
	echo "注册成功";
?>