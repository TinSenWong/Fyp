<?php
$errors = array();
$errorDIV = null;
if (isset($_POST['submit'])) {

    extract($_POST);

    if (strlen($signup_username) < 6 || strlen($signup_username) > 15) {
        array_push($errors, '<p>Your user name must be at least 6 and maximum 15 characters.</p>');
    } elseif ($signup_password1 != $signup_password2) {
        array_push($errors, '<p>Your passwords do not match.</p>');

    }
    if (count($errors) == 0) {
        $SQL_servername = "localhost";
        $SQL_username = "root";
        $SQL_password = "";
        $SQL_database = "fyp";
        $conn = @mysqli_connect($SQL_servername, $SQL_username, $SQL_password, $SQL_database) or die();

        $signup_username = $conn->real_escape_string($signup_username);
        $signup_email = $conn->real_escape_string($signup_email);
        $signup_password1 = $conn->real_escape_string($signup_password1);
        $signup_password2 = $conn->real_escape_string($signup_password2);

        // use time to be the key
        $vkey = md5(time() . $signup_username);
        $password = md5($signup_password1);


        $sql = "INSERT INTO userInfo(userName, password, email, vkey)
        VALUES ('$signup_username','$password','$signup_email','$vkey');";
        $result = mysqli_query($conn, $sql);


        //$_SESSION['username'] = $signup_username;
        //$_SESSION['success'] = "You are now registered.";

        $from = 'IVESE2AFYP@gmail.com';
        $to = $signup_email;
        $subject = 'Email Verification';
        $message = <<< EOF
        
        <a href='http://localhost/fyp/WebContent/verify.php?vkey=$vkey'>Click here to register account</a>\n\n
        <p>
        *
        Received this message by mistake?<br />
        This message is sent when an email address is registered. <br />
        You may have received this email in error <br />
        because another customer entered this email address by mistake.<br />
        
        If you received this message by mistake, please delete this email. <br />
        Your email address will not be registered <br />
        unless you enter the verification code listed above.<br />
         </p>
</p>
EOF;
        $header = "From: {$from}" . "\r\n";
        $header .= "MIME-Version:1.0" . "\r\n";
        $header .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        if (mb_send_mail($to, $subject, $message, $header)) {
            $message = <<< EOF
                    <H3>Confirm your email address</H3>
    
              In order to complete the sign-up process, 
              please click the confirmation link. 
              If you do not receive a confirmation email, 
              please check your spam folder. 
              Also, please verify that you entered a valid email address in our sign-up form.
              Page will redirect to login page in 5sec.
EOF;


            $sec = "5";
            header("Refresh:$sec;url=LoginPage.php");

        } else {
            echo 'Something Wrong';
        }
    } else {
        $errorDIV = "<div class='error'>";
        foreach ($errors as $error) {
            $errorDIV .= "<H2 style='color:red;'> $error </H2>";
        }
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
                        <p class="text-uppercase pull-center"> Please input requested info.</p>
                        <div class="form-group">
                            <input type="text" name="signup_username" id="signup_username" class="form-control input-lg"
                                   placeholder="Username" pattern="^[A-Za-z0-9]{6,15}" required>
                            * Username may only contain alphanumeric characters
                        </div>

                        <div class="form-group">
                            <input type="email" name="signup_email" id="signup_email" class="form-control input-lg"
                                   placeholder="Email Address" required>
                            * We’ll occasionally send updates about your account to this inbox. We’ll never share your
                            email address with anyone.
                        </div>

                        <div class="form-group">
                            <input type="password" name="signup_password1" id="signup_password1"
                                   class="form-control input-lg" placeholder="Password"
                                   pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$" required>
                            * Make sure it's at least 15 characters OR at least 8 characters including one number and
                            one special character:
                        </div>

                        <div class="form-group">
                            <input type="password" name="signup_password2" id="signup_password2"
                                   class="form-control input-lg" placeholder="Confirm Password" required>
                            * Must same
                        </div>

                        <div>
                            <input type="submit" class="btn btn-lg btn-primary" name='submit' id="submit"
                                   value="Register">
                        </div>
                    </fieldset>
                </form>
            </div>

        </div>
        <?php
        echo $errorDIV;
        ?>
    </div>
</div>
</body>
<?php


?>

</html>
