<?php
/**
 * Created by PhpStorm.
 * User: edwardchau
 * Date: 2019-03-27
 * Time: 00:39
 */
$errors = array();
$errorDIV = null;
if (isset($_POST['submit'])) {
    $SQL_servername = "localhost";
    $SQL_username = "root";
    $SQL_password = "";
    $SQL_database = "fyp";
    session_start();
    $conn = @mysqli_connect($SQL_servername, $SQL_username, $SQL_password, $SQL_database)
    or die ("<p align='center'>Server Connection Failed</p>");

    $email = $conn->real_escape_string($_POST['email']);
    $result = mysqli_query($conn, "select * from userinfo where email = '$email'") or die ();

    if (mysqli_num_rows($result) > 0) {

<<<<<<< HEAD
        $vkey = md5(time());
=======
        $vkey = md5(time() . $email);
>>>>>>> 32cf7d167b4f3051bf40e6a55c2535c145513902
        $result = mysqli_query($conn, "UPDATE userinfo SET vkey = '$vkey' WHERE email= '$email'") or die ();
        $from = 'IVESE2AFYP@gmail.com';
        $to = $email;
        $subject = 'Email Verification';
        $message = <<< EOF
        
        <a href='http://localhost/fyp/WebContent/ResetPW.php?vkey=$vkey'>Click here to reset your password</a>\n\n
        <p>
        *
        This message is sent when user want to reset password. <br />
        
         </p>
</p>
EOF;
        $header = "From: {$from}" . "\r\n";
        $header .= "MIME-Version:1.0" . "\r\n";
        $header .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        if (mb_send_mail($to, $subject, $message, $header)) {
            $correct = true;
            $sec = "10";
            header("Refresh:$sec;url=LoginPage.php");


        } else {
            echo 'Something Wrong3';
        }
    } else {
        $errorDIV = "<div class='error'>";

        $errorDIV .= "<H2 style='color:red;'> Email not find </H2>";

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
<<<<<<< HEAD

=======
        <h2 class="text-center" id="title">Welcome</h2>
>>>>>>> 32cf7d167b4f3051bf40e6a55c2535c145513902
        <?php
        if (isset($correct)){
            echo "<H1 align='center'>Check your email address</H1>
    
                  <p align='center'><H4>In order to reset your password,
                  please click the confirmation link. <br />
                  If you do not receive a confirmation email,
                  please check your spam folder. <br />
                  Also, please verify that you entered a valid email address in the form.<br /></H4>
                  <H2 align='center'>Page will redirect to login page in 10 sec.</H2></p>";
        }else {
            ?>
<<<<<<< HEAD
            <h2 class="text-center" id="title">Welcome</h2>
=======
>>>>>>> 32cf7d167b4f3051bf40e6a55c2535c145513902
            <hr>
            <div class="row">
                <div class="col-md-5">
                    <form role="form" method="post" action="">
                        <fieldset>
                            <p class="text-uppercase pull-center"> Enter your email</p>

                            <div class="form-group">
                                <input type="email" name="email" id="email"
                                       class="form-control input-lg" placeholder="email" required>
                            </div>
                            <input type="submit" class="btn btn-lg btn-primary" name="submit" id="submit"
                                   value="Send">
                        </fieldset>
                    </form>
                </div>

            </div>
            <?php
        }
            echo $errorDIV;
        ?>
    </div>
</div>
</body>


</html>
