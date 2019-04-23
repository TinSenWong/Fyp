<?php
/**
 * Created by PhpStorm.
 * User: edwardchau
 * Date: 2019-03-27
 * Time: 00:39
 */
$errorDIV = null;
$error = false;
if (isset($_POST['submit'])){
    $SQL_servername = "localhost";
    $SQL_username = "root";
    $SQL_password = "";
    $SQL_database = "fyp";

    $conn = @mysqli_connect($SQL_servername, $SQL_username, $SQL_password,$SQL_database)
    or die ("<p align='center'>Server Connection Failed</p>");

    $email = $conn->real_escape_string($_POST['email']);
    $password = $conn->real_escape_string($_POST['password']);

    $password = md5($password);
    $result = mysqli_query($conn,"select * from userinfo where email = '$email' and password = '$password' and verified = 1")or die ();
    $row=mysqli_fetch_array($result);
    if ($row['email']==$email && $row['password']==$password) {
        session_start();
        $_SESSION["userID"] = $row['UserID'];
        $cookie_name = "username";
        $cookie_value = $row['userName'];
        setcookie($cookie_name, $cookie_value, time() + 60*60); // 1hour
        $cookie_name = "timeout";
        $cookie_value = 1;
        setcookie($cookie_name, $cookie_value, time() + 30*60); // 30min

        header("Location:GamePlay.php");
    }else {
        $error = true;
        $errorDIV = "<div class='error'>";
            $errorDIV .= "<H2 style='color:red;'> Password or email is incorrect   </H2>";
        $errorDIV .= "</div>";
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
                            <input type="email" name="email" id="email" class="form-control input-lg" placeholder="Email Address" required>
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" id="password1" class="form-control input-lg" placeholder="Password" required>
                        </div>
                        <div>
                            <input type="submit" class="btn btn-lg btn-primary" name="submit" id="submit" value="Sign in">
                            &nbsp<a href="RegisterPage.php" class="btn btn-lg btn-primary">Sign up</a> <br /><br />
                            <a href="ForgetPW.php" class="btn btn-lg btn-primary">Forget password</a>
                        </div>
                    </fieldset>
                </form>
            </div>

        </div>

        <?php
        if ($error){
            echo $errorDIV;
        }
        ?>
    </div>
</div>
</body>


</html>
