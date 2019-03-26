<?php
extract($_POST);
$SQL_servername = "localhost";
$SQL_username = "root";
$SQL_password = "";
$SQL_database = "fyp";
$conn = @mysqli_connect($SQL_servername, $SQL_username, $SQL_password,$SQL_database)
or die ("<p align='center'>Server Connection Failed");

$result = mysqli_query($conn,"select userName,password from userinfo where userName = '$username' and password = '$password'")or die ();
$row=mysqli_fetch_array($result);
if ($row[0]==$username && $row[1]==$password) {
    session_start();
    echo $_SESSION["username"] = $username;
    $cookie_name = "username";
    $cookie_value = $username;
    setcookie($cookie_name, $cookie_value, time() + 30*60); // 30min
    $cookie_name = "timeout";
    $cookie_value = 1;
    setcookie($cookie_name, $cookie_value, time() + 2*60); // 2min
    header("Location:GamePlay.php");
}else {
    header("Location:1212.php?Msg=1");
}
?>