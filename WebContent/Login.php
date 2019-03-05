<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="http://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link href="css/login.css" rel="stylesheet" id="bootstrap-css">
    <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.2.0/zxcvbn.js"></script>
    <script>
        $(document).ready(function () {
            $("#login").click(function () {
                var username = $('#username').val();
                var password = $('#password').val();
                //var successphone = document.getElementById('successphone');
                //first time login account;
                window.location = "index.php";

            })

            $("#send").click(function () {
                var email = $('#email').val();
                var phone = $('#phone').val();
                var successemail = document.getElementById('successemail');
                var color = "#FF0000";
                if (email == "reset@gmail.com" || phone == "24400998") {
                    //successemail.innerHTML = "The default password has been sent.<br />Please check your email or sms!";
                    successemail.innerHTML = "" + "<font color=" + color + ">The default password has been sent.<br />Please check your email or sms!</font>";
                    setTimeout(function () {
                        $("#reset").modal('hide');
                    }, 3000);
                }
            })
        });

    </script>
</head>

<body>
<?php //include 'Heading.php'; ?>
<section class="login-block">
    <br/>
    <div class="container">
        <div class="row">
            <div class="col-md-4 login-sec">
                <h2 class="text-center">Welcome</h2>
                <form class="login-form">
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" class="form-control" placeholder="username" id="username" required>
                    </div>


                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" placeholder="password" id="password" required>
                    </div>

                    <div class="form-check">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input">
                            <small>Remember Me</small>
                        </label>
                        <input type="button" value="Login" class="btn btn-login float-right" id="login"
                               data-toggle="modal" data-target="#firstTime">
                    </div>


                </form>
                <!--pop up Forgot password-->
                <a href="" data-toggle="modal" data-target="#reset">Forgot Password?</a>
                <div class="modal fade" id="reset" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Forgot Password</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>Please enter your recovery email</p>
                                <p id="successemail"></p>
                                <div class="form-group">
                                    <input type="email" name="email" class="form-control" placeholder="Email"
                                           id="email">
                                </div>
                            </div>
                            <div class="modal-footer">
                                <input type="button" class="btn btn-primary" value="Send" id="send">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--banner photo-->
            <div class="col-md-8 banner-sec">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img class="d-block img-fluid" src="#" alt="First slide">
                            <div class="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block img-fluid" src="#" alt="Second slide">
                            <div class="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</body>

</html>
