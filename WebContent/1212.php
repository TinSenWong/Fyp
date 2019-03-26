<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="myStyle.css">
    <script>
        function Wronginput() {
            alert("Wrong ID or Password!");
            window.location.href="index.php";
        }
    </script>
</head>
<body id="background">
<?php
if (isset($_GET['Msg'])) {
    echo "<script>Wronginput();</script>";
}
?>
<form action="Login.php" method="post">
    <table align="center" border="1">
        <tr>
            <td><label>UserName</label></td>
            <td><input type="text" name="username" value="" required></td>
        </tr>
        <td><label>Password</label></td>
        <td><input type="password" name="password" value="" required></td>
    </table>
    <td><a href="Register.php">Sign up</a></td>
    <p align="center">
        <input type="submit" name="login_btn" value="Login" id="loginButton">
    </p>
</form>
</body>
</html>
