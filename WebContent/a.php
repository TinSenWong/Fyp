<div class="container">
    <div id="level1Msg" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"
         aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header"><h5 class="modal-title" id="wizard-title">Instructions</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#Game"
                                                role="tab">Game</a></li>
                    </ul>
                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Blockly" role="tab">Blockly</a>
                    </li>
                    </ul>
                </div>
                <div class="tab-content mt-2">
                    <div class="tab-pane fade show active" id="Game" role="tabpanel"><h4>Game</h4>
                        <div class="col-md-8 banner-sec" style="text-align: center">
                            <div id="Game1" class="carousel slide" data-ride="carousel" style="text-align: center">
                                <ol class="carousel-indicators">
                                    <li data-target="#Game1" data-slide-to="0" class="active"></li>
                                    <li data-target="#Game1" data-slide-to="1"></li>
                                    <li data-target="#Game1" data-slide-to="2"></li>
                                    <li data-target="#Game1" data-slide-to="3"></li>
                                </ol>
                                <div class="carousel-inner" role="listbox" style="text-align: center">
                                    <div class="carousel-item active" style="text-align: center"><img
                                                class="d-block img-fluid" src="src/Level1~5/blockly/commandarea.png"
                                                width="500" height="500">
                                        <div class="carousel-caption d-none d-md-block"></div>
                                    </div>
                                    <div class="carousel-item" style="text-align: center">
                                        <img class="d-block img-fluid" src="src/Level1~5/gif/dropcomm.gif" width="500" height="500">
                                        <div class="carousel-caption d-none d-md-block"></div>
                                    </div>
                                    <div class="carousel-item" style="text-align: center"><img class="d-block img-fluid" src="src/Level1~5/blockly/run.png" width="500" height="500">
                                        <div class="carousel-caption d-none d-md-block"></div>
                                    </div>
                                    <div class="carousel-item" style="text-align: center"><img class="d-block img-fluid" src="src/Level1~5/blockly/movement.png" width="500" height="500">
                                        <div class="carousel-caption d-none d-md-block"></div>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#Game1" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span> </a>
                            <a class="carousel-control-next" href="#Game1" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span> </a></div>
                    </div>
                    <div class="tab-pane fade" id="Blockly" role="tabpanel"><h4>Blockly</h4>
                        <div class="col-md-8 banner-sec" style="text-align: center">
                            <div id="Blockly1" class="carousel slide" data-ride="carousel" style="text-align: center">
                                <ol class="carousel-indicators">
                                    <li data-target="#Blockly1" data-slide-to="0" class="active"></li>
                                    <li data-target="#Blockly1" data-slide-to="1"></li>
                                    <li data-target="#Blockly1" data-slide-to="2"></li>
                                    <li data-target="#Blockly1" data-slide-to="3"></li>
                                </ol>
                                <div class="carousel-inner" role="listbox" style="text-align: center">
                                    <div class="carousel-item active" style="text-align: center">
                                        <img class="d-block img-fluid" src="src/Level1~5/game/getkey1.jpg" width="500" height="500">
                                        <div class="carousel-caption d-none d-md-block"></div>
                                    </div>
                                    <div class="carousel-item" style="text-align: center"><img class="d-block img-fluid" src="src/Level1~5/gif/dropcomm.gif" width="500" height="500">
                                        <div class="carousel-caption d-none d-md-block"></div>
                                    </div>
                                    <div class="carousel-item" style="text-align: center"><img class="d-block img-fluid" src="src/Level1~5/blockly/run.png" width="500" height="500">
                                        <div class="carousel-caption d-none d-md-block"></div>
                                    </div>
                                    <div class="carousel-item" style="text-align: center"><img class="d-block img-fluid" src="src/Level1~5/game/stone1.jpg" width="500" height="500">
                                        <div class="carousel-caption d-none d-md-block"></div>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#Blockly1" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span> </a>
                            <a class="carousel-control-next" href="#Blockly1" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span> </a></div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"
                                onclick='hideBlockly(false);confirmMsg("level1Msg");'>confirm
                        </button>
                    </div>
                    <div>Don't show again
                        <inputtype
                        ="checkbox" id="checkshow">
                    </div>
                </div>
            </div>
        </div>
    </div>