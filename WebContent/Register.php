<?php
/**
 * Created by PhpStorm.
 * User: edwardchau
 * Date: 2019-03-27
 * Time: 00:35
 */

extract($_POST);
$SQL_servername = "localhost";
$SQL_username = "root";
$SQL_password = "";
$SQL_database = "fyp";
$conn = @mysqli_connect($SQL_servername,$SQL_username,$SQL_password,$SQL_database) or die();

//$username  = $_POST['username'];
//$password  = $_POST['password'];
//$email  = $_POST['email'];
$sql = "INSERT INTO userInfo(UserID, userName, password, email)
        VALUES ('','$signup_username','$signup_password','$signup_email');";
mysqli_query($conn,$sql);
$successMessage = "Successful, Please Login!";
$sec = "0.5";
header("Refresh:$sec;url=index.php");
echo "<script> alert('$successMessage');</script>";
?>
