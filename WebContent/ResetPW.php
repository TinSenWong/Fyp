<?php
/**
 * Created by PhpStorm.
 * User: edwardchau
 * Date: 2019-03-27
 * Time: 00:39
 */
if (isset($_POST['submit'])){
    $SQL_servername = "localhost";
    $SQL_username = "root";
    $SQL_password = "";
    $SQL_database = "fyp";
    session_start();
    $conn = @mysqli_connect($SQL_servername, $SQL_username, $SQL_password,$SQL_database)
    or die ("<p align='center'>Server Connection Failed</p>");

    $email = $conn->real_escape_string($_POST['email']);
    $op = $conn->real_escape_string($_POST['OldPassword']);
    $np = $conn->real_escape_string($_POST['NewPassword1']);
    $op = md5($op);
    $result = mysqli_query($conn,"select * from userinfo where $userID = '{$_SESSION["userID"]}' and password = '$op'")or die ();
    $row=mysqli_fetch_array($result);
    if (mysqli_num_rows($result)>0){
        $np = md5($np);
        $result = mysqli_query($conn,"UPDATE userinfo SET password='$np'WHERE $userID = '{$_SESSION["userID"]}'")or die ();
    }
}

?>
<!DOCTYPE html>
<html lang="en">

<title>Sign up facundo farm & resort</title>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<head>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="jquery/jquery.min.js"></script>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container-fluid">
    <div class="container">
        <br/>
        <br/>
        <h2 class="text-center" id="title">Welcome</h2>
        <hr>
        <div class="row">
            <div class="col-md-5">
                <form role="form" method="post" action="">
                    <fieldset>
                        <p class="text-uppercase pull-center"> Login.</p>
                        <div class="form-group">
                            <input type="password" name="OldPassword" id="OldPassword" class="form-control input-lg" placeholder="OldPassword" required>
                        </div>
                        <div class="form-group">
                            <input type="password" name="NewPassword1" id="NewPassword1" class="form-control input-lg" placeholder="NewPassword1" required>
                        </div>
                        <div class="form-group">
                            <input type="password" name="NewPassword2" id="NewPassword2" class="form-control input-lg" placeholder="NewPassword2" required>
                        </div>
                        <div>
                            <a href="ResetPW.php" class="btn btn-lg btn-primary">Reset</a>&nbsp
                            <input type="submit" class="btn btn-lg btn-primary" name="submit" id="submit" value="Sign in">
                        </div>
                    </fieldset>
                </form>
            </div>

        </div>
    </div>
</div>
</body>


</html>
