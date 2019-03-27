<?php
/**
 * Created by PhpStorm.
 * User: edwardchau
 * Date: 2019-03-27
 * Time: 00:39
 */
?>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script>
    function Wronginput() {
        alert("Wrong ID or Password!");
        window.location.href="index.php";
    }
</script>
<!------ Include the above in your HEAD tag ---------->

<!---*************welcome this is my simple empty strap by John Niro Yumang ******************* -->

<!DOCTYPE html>
<html lang="en">

<title>Sign up facundo farm & resort</title>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<head>
    <script src="jquery/jquery.min.js"></script>
    <!---- jquery link local dont forget to place this in first than other script or link or may not work ---->

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!---- boostrap.min link local ----->

    <link rel="stylesheet" href="css/style.css">
    <!---- boostrap.min link local ----->

    <script src="js/bootstrap.min.js"></script>
    <!---- Boostrap js link local ----->


</head>
<body>
<?php
if (isset($_GET['Msg'])) {
    echo "<script>Wronginput();</script>";
}
?>
<div class="container-fluid">
    <div class="container">
        <br/>
        <br/>
        <h2 class="text-center" id="title">Welcome</h2>
        <hr>
        <div class="row">
            <div class="col-md-5">
                <form role="form" method="post" action="Register.php">
                    <fieldset>
                        <p class="text-uppercase pull-center"> SIGN UP.</p>
                        <div class="form-group">
                            <input type="text" name="signup_username" id="signup_username" class="form-control input-lg" placeholder="Username" required>
                        </div>

                        <div class="form-group">
                            <input type="email" name="signup_email" id="signup_email" class="form-control input-lg" placeholder="Email Address" required>
                        </div>
                        <div class="form-group">
                            <input type="password" name="signup_password" id="signup_password" class="form-control input-lg" placeholder="Password" required>
                        </div>
                        <div>
                            <input type="submit" class="btn btn-lg btn-primary   value="Register">
                        </div>
                    </fieldset>
                </form>
            </div>

            <div class="col-md-5">
                <form action="Login.php" method="post">
                    <fieldset>
                        <p class="text-uppercase"> Login using your account: </p>

                        <div class="form-group">
                            <input type="text" name="username" id="username" class="form-control input-lg" placeholder="Username" required>
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" id="password" class="form-control input-lg" placeholder="Password" required>
                        </div>
                        <div>
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div>
                            <input type="submit" value="Sign In" class="btn btn-primary btn-lg" >
                        </div>

                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
</body>


</html>
