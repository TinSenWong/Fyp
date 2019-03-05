<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/font/octicons.min.css" rel="stylesheet">
    <link href="src/jquery-bootstrap-modal-steps.js"/>
    <title>Document</title>
</head>
<body>
<div class="container mt-5">
    <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal">How to play</button>
    <!-- <button class="btn btn-primary btn-lg" data-target="#video">Video</button> -->
    <h2>Here is the video of the game.</h2>
</div>
<br/>


<!-- Show Video of game -->
<!--<div class="embed-responsive embed-responsive-16by9">-->
<!--    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>-->
<!--</div>-->


<!-- Modal of how to play-->
<div class="container">
    <div id="modal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
         aria-labelledby="myLargeModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="wizard-title">How to play?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#menu" role="tab">Menu</a>
                        <li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#life" role="tab">Life</a>
                        <li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#key" role="tab">Get Key</a>
                        <li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#stone" role="tab">Stone</a>
                        <li>
                    </ul>
                </div>
                <div class="tab-content mt-2">
                    <div class="tab-pane fade show active" id="menu" role="tabpanel">
                        <h4>Menu</h4>
                        <div class="well" style="text-align: center;"><img src="src/menu.jpg" width="500" height="500"/>
                        </div>
                        <!--                        <button class="btn btn-secondary" id="menuCon">Continue</button>-->
                    </div>
                    <div class="tab-pane fade" id="life" role="tabpanel">
                        <h4>Life</h4>
                        <div class="col-md-8 banner-sec" style="text-align: center">
                            <div id="life1" class="carousel slide" data-ride="carousel"
                                 style="text-align: center">
                                <ol class="carousel-indicators">
                                    <li data-target="#life1" data-slide-to="0" class="active"></li>
                                    <li data-target="#life1" data-slide-to="1"></li>
                                    <li data-target="#life1" data-slide-to="2"></li>
                                    <li data-target="#life1" data-slide-to="3"></li>
                                    <li data-target="#life1" data-slide-to="4"></li>
                                </ol>
                                <div class="carousel-inner" role="listbox" style="text-align: center">
                                    <div class="carousel-item active" style="text-align: center">
                                        <img class="d-block img-fluid" src="src/life.jpg" alt="First slide" width="500"
                                             height="500">
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div class="carousel-item" style="text-align: center">
                                        <img class="d-block img-fluid" src="src/increase_life1.jpg" alt="First slide"
                                             width="500" height="500">
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div class="carousel-item" style="text-align: center">
                                        <img class="d-block img-fluid" src="src/increase_life2.jpg" alt="First slide"
                                             width="500" height="500">
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div class="carousel-item" style="text-align: center">
                                        <img class="d-block img-fluid" src="src/decrease_life1.jpg" alt="First slide"
                                             width="500" height="500">
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div class="carousel-item" style="text-align: center">
                                        <img class="d-block img-fluid" src="src/decrease_life2.jpg" alt="First slide"
                                             width="500" height="500">
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="key" role="tabpanel">
                        <h4>Key</h4>
                        <div class="col-md-8 banner-sec" style="text-align: center">
                            <div id="key1" class="carousel slide" data-ride="carousel"
                                 style="text-align: center">
                                <ol class="carousel-indicators">
                                    <li data-target="#key1" data-slide-to="0" class="active"></li>
                                    <li data-target="#key1" data-slide-to="1"></li>
                                </ol>
                                <div class="carousel-inner" role="listbox" style="text-align: center">
                                    <div class="carousel-item active" style="text-align: center">
                                        <img class="d-block img-fluid" src="src/getkey1.jpg" alt="First slide"
                                             width="500"
                                             height="500">
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div class="carousel-item" style="text-align: center">
                                        <img class="d-block img-fluid" src="src/getkey2.jpg" alt="First slide"
                                             width="500"
                                             height="500">
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="stone" role="tabpanel">
                        <h4>Stone</h4>
                        <div class="col-md-8 banner-sec" style="text-align: center">
                            <div id="stone1" class="carousel slide" data-ride="carousel"
                                 style="text-align: center">
                                <ol class="carousel-indicators">
                                    <li data-target="#stone1" data-slide-to="0" class="active"></li>
                                    <li data-target="#stone1" data-slide-to="1"></li>
                                </ol>
                                <div class="carousel-inner" role="listbox" style="text-align: center">
                                    <div class="carousel-item active" style="text-align: center">
                                        <img class="d-block img-fluid" src="src/stone1.jpg" alt="First slide"
                                             width="500"
                                             height="500">
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                    <div class="carousel-item" style="text-align: center">
                                        <img class="d-block img-fluid" src="src/stone2.jpg" alt="First slide"
                                             width="500"
                                             height="500">
                                        <div class="carousel-caption d-none d-md-block">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>

<script>
    $(function () {
        $('#modalToggle').click(function () {
            $('#modal').modal({
                backdrop: 'static'
            });
        });

        // $('#gameMenu').click(function (e) {
        //     e.preventDefault();
        //     $('.progress-bar').css('width', '40%');
        //     $('.progress-bar').html('Step 2 of 5');
        //     $('#myTab a[href="#life"]').tab('show');
        // });
        //
    })
</script>