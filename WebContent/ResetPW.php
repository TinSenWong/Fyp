<?php
/**
 * Created by PhpStorm.
 * User: edwardchau
 * Date: 2019-03-27
 * Time: 00:39
 */
$errors = array();
$errorDIV = null;
$SQL_servername = "localhost";
$SQL_username = "root";
$SQL_password = "";
$SQL_database = "fyp";
session_start();
$conn = @mysqli_connect($SQL_servername, $SQL_username, $SQL_password, $SQL_database)
or die ("<p align='center'>Server Connection Failed</p>");

if (isset($_GET['vkey'])) {
    $vkey = $_GET['vkey'];
    $result = mysqli_query($conn, "select * from userinfo where vkey = '$vkey'") or die ();
    if (mysqli_num_rows($result) > 0) {
        while ($values = mysqli_fetch_assoc($result)) {
            $_SESSION["userID"] = $values['UserID'];
        }
    } else {
        echo 'Error';
        $sec = "10";
        header("Refresh:$sec;url=LoginPage.php");
        echo '<H2 align=\'center\'>Page will redirect to login page in 10 sec.</H2></p>
            <script>
                    var timeleft = 10;
                    var downloadTimer = setInterval(function(){
                      document.getElementById(\'progressBar\').value = 10 - timeleft;
                      timeleft -= 1;
                      if(timeleft <= 0)
                        clearInterval(downloadTimer);
                    }, 1000);
            </script>';
    }
}
if (!isset($_SESSION["userID"])) {
    echo 'Error';
    $sec = "10";
    header("Refresh:$sec;url=LoginPage.php");
    echo "<H2 align='center'>Page will redirect to login page in 10 sec.</H2></p>
            <script>
                    var timeleft = 10;
                    var downloadTimer = setInterval(function(){
                      document.getElementById('progressBar').value = 10 - timeleft;
                      timeleft -= 1;
                      if(timeleft <= 0)
                        clearInterval(downloadTimer);
                    }, 1000);
            </script>";
} elseif (isset($_POST['submit'])) {
    if (isset($vkey)) {
        $result = mysqli_query($conn, "select * from userinfo where vkey = '$vkey'") or die ();
        if (mysqli_num_rows($result) > 0) {
            if ($_POST['NewPassword1'] != $_POST['NewPassword2']) {
                array_push($errors, '<p>Your passwords do not match.</p>');
            }
            if (count($errors) == 0) {
                $np = $conn->real_escape_string($_POST['NewPassword1']);
                $np = md5($np);

                $result = mysqli_query($conn, "UPDATE userinfo SET password='$np' WHERE UserID = '{$_SESSION["userID"]}'") or die ();
                $correct = true;
                $sec = "10";
                header("Refresh:$sec;url=LoginPage.php");
            } else {
                $errorDIV = "<div class='error'>";
                foreach ($errors as $error) {
                    $errorDIV .= "<H2 style='color:red;'> $error </H2>";
                }
                $errorDIV .= "</div>";
            }
        } else {
            echo 'Error';
            $sec = "10";
            header("Refresh:$sec;url=LoginPage.php");
            echo "<H2 align='center'>Page will redirect to login page in 10 sec.</H2></p>
            <script>
                    var timeleft = 10;
                    var downloadTimer = setInterval(function(){
                      document.getElementById('progressBar').value = 10 - timeleft;
                      timeleft -= 1;
                      if(timeleft <= 0)
                        clearInterval(downloadTimer);
                    }, 1000);
            </script>";
        }
    } else {
        if ($_POST['NewPassword1'] != $_POST['NewPassword2']) {
            array_push($errors, '<p>Your passwords do not match.</p>');
        } elseif ($_POST['OldPassword'] == $_POST['NewPassword1']) {
            array_push($errors, '<p>The new password cannot be the same as the old password.</p>');
        }
        if (count($errors) == 0) {

            $op = $conn->real_escape_string($_POST['OldPassword']);
            $np = $conn->real_escape_string($_POST['NewPassword1']);
            $np2 = $conn->real_escape_string($_POST['NewPassword2']);
            $op = md5($op);
            $result = mysqli_query($conn, "select * from userinfo where UserID = '{$_SESSION["userID"]}' and password = '$op'") or die ();
            $row = mysqli_fetch_array($result);
            if (mysqli_num_rows($result) > 0) {
                $np = md5($np);
                $result = mysqli_query($conn, "UPDATE userinfo SET password='$np' WHERE UserID = '{$_SESSION["userID"]}'") or die ();
                $correct = true;
                $sec = "10";
                header("Refresh:$sec;url=LoginPage.php");
            }

        } else {
            $errorDIV = "<div class='error'>";
            foreach ($errors as $error) {
                $errorDIV .= "<H2 style='color:red;'> $error </H2>";
            }
            $errorDIV .= "</div>";
        }
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

        <?php
        if (isset($correct)) {
            echo " <H1 align='center'>
 <h2 class=\"text-center\" id=\"title\">Successful</h2>
              <H4 align='center'>Please login again.<br /></H4>
              <H2 align='center'>Page will redirect to login page in 10 sec.</H2></p>";
            echo "<script>
                    var timeleft = 10;
                    var downloadTimer = setInterval(function(){
                      document.getElementById('progressBar').value = 10 - timeleft;
                      timeleft -= 1;
                      if(timeleft <= 0)
                        clearInterval(downloadTimer);
                    }, 1000);
            </script>";
        } else {
            ?>
            <h2 class="text-center" id="title">Welcome</h2>
            <hr>
            <div class="row">
                <div class="col-md-5">
                    <?php
                    if (isset($vkey)) {
                        ?>
                        <form role="form" method="post" action="">
                            <fieldset>
                                <div class="form-group">
                                    <input type="password" name="NewPassword1" id="NewPassword1"
                                           class="form-control input-lg" placeholder="NewPassword1" required>
                                </div>
                                <div class="form-group">
                                    <input type="password" name="NewPassword2" id="NewPassword2"
                                           class="form-control input-lg" placeholder="NewPassword2" required>
                                </div>
                                <div>
                                    <input type="submit" class="btn btn-lg btn-primary" name="submit" id="submit"
                                           value="Reset">&nbsp
                                    <a href="LoginPage.php" class="btn btn-lg btn-primary">Sign in</a>

                                </div>
                            </fieldset>
                        </form>
                        <?php
                    } else {
                        ?>
                        <form role="form" method="post" action="">

                            <fieldset>
                                <p class="text-uppercase pull-center"> Login.</p>
                                <div class="form-group">
                                    <input type="password" name="OldPassword" id="OldPassword"
                                           class="form-control input-lg"
                                           placeholder="OldPassword" required>
                                </div>
                                <div class="form-group">
                                    <input type="password" name="NewPassword1" id="NewPassword1"
                                           class="form-control input-lg" placeholder="NewPassword1" required>
                                </div>
                                <div class="form-group">
                                    <input type="password" name="NewPassword2" id="NewPassword2"
                                           class="form-control input-lg" placeholder="NewPassword2" required>
                                </div>
                                <div>
                                    <input type="submit" class="btn btn-lg btn-primary" name="submit" id="submit"
                                           value="Reset">&nbsp
                                    <a href="LoginPage.php" class="btn btn-lg btn-primary">Sign in</a>

                                </div>
                            </fieldset>
                        </form>
                        <?php
                    }
                    ?>
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
