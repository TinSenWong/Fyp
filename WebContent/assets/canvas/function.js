//main
var game;
var maxBlock;
var toolbox;
// colors is actually the array of level pages
var colors = ["0xffffff"];
//var colors = ["0xffffff", "0xff0000", "0x00ff00", "0x0000ff", "0xffff00"];
// columns of thumbnails in each page
var columns = 9;
// rows of thumbnails in each page
var rows = 6;
// thumbnail width, in pixels
var thumbWidth = 100;
// thumbnail height, in pizels
var thumbHeight = 100;
// empty space between two thumbnails, in pixels
var spacing = 20;
// stars array
var stars = [];
// local storage name
var localStorageName = "levelselect";
// level we are currently playing
var level;
var testmode = false;
var live = 1;
var gamePass = false;
var lastOrder;
var screenWidth = screen.width;
var screenHeight = screen.height * 0.8;
var playerInput;
var weaknessGroup;
var currentRow = 0;
var correct;
var wrongTime = 0;
var checkInput = false;
var finish = 0;
var enemyHP = 3;
var currentRow = 0;
var currentCol = 0;
var weekCurrentRow = 0;
var weekCurrentCol = 0;
var currentScreen;
var currentMonster;
var limitTime = 3;
var weaknessGroupList = createArray(6, 20);
var playerInputList;
var dieList = [];
var currentLevel;
var MonsterGame;
var hit = true;
var tweenPlaying = false;
var userID = '';
var finnishGameHP;
var destroySpikeList = [];
var destroyHPList = [];

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function selectLevel() {
    $.ajax({
        url: "database/DBAction/getStar.php",
        type: "POST",
        data: {
            Action: 'getStar',
            userID: userID
        },
        success: function (data) {
            if (data.length == 0) {
                stars[0] = 0;
            } else {
                stars = data.split(",");
                stars[stars.length] = "0";
            }

            for (var l = stars.length; l < columns * rows * colors.length; l++) {
                stars[l] = "-1";
            }
            if (game != null) {
                game.destroy();
            }
            game = new Phaser.Game(document.body.offsetWidth, document.body.offsetHeight, Phaser.Auto, 'phaser');

            game.state.add("PlayGame", playGame);
            game.state.start("PlayGame");
            Phaser.Device.whenReady(function () {
                game.plugins.add(PhaserInput.Plugin);
                game.plugins.add(PhaserNineSlice.Plugin);
                game.plugins.add(Phaser.Plugin.KineticScrolling);
            });
            worngTime = 0;
            finish = 0;

        },
        error: function () {
        }
    });


};

function goSelectLevel() {
    runCount = 0;
    selectLevel()
}

//level
var goToTheRight = false;
var goToTheLeft = false;
var goToTheUp = false;
var goToTheDown = false;
var play;
var playerY;
var playerX;
var map;
var key = false;
var hp = 3;
var engNeverGiveUp = ['Don\'t give up the chance of success.', 'Stick to your dream, never give up.', 'Be generous, atmosphere, don\'t give up!', 'Real warrior never give up..', 'Until the last moment, never give up.', 'Not indulgence, do not give up. Just for a better tomorrow.', 'Winners never quit, quitters never succeed.', 'Action speak louder than words.', 'Never say die.', 'Zero in your target，and go for it.', 'Believe in yourself.', 'Keep on going never give up.', 'Hold on to the end, never give up, is the guarantee of success, as long as you don\'t give up, you will have the opportunity, as long as give up, he certainly would not have succeeded.', 'That’s will coming along nicely.', 'Don\'t give up! Don\'t give up! Don\'t give up! Important words three times.'];
var engGoodJob = ['Incredible!', 'Incomparable!', 'You\'re Awesome !', 'Keep it up! ', 'Lovely! ', 'Perfect!  ', 'WoW,Beautiful work', 'Bravo! ', 'Cool! ', 'Clever!', 'Excellent! ', 'Fabulous! ', 'Fantastic!', 'Good work.', 'Impressive! ']

function lostMsg() {
    return engNeverGiveUp[Math.round(Math.random() * 14)];
}

function winMsg() {
    return engGoodJob[Math.round(Math.random() * 14)];
}

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

}

//01
function lostheartHandler(that) {
    hp -= 1;
    that.fHPGroup.children[3 - hp - 1].play('play');
    if (hp == 0) {
        dieList = [];
        if (confirm('你死了  重新遊玩')) {
            hideGame(false);
            game.destroy();
            game = new Phaser.Game(1200, 800, Phaser.Auto, 'phaser');
            gamePass = false;
            destroySpikeList = [];
            destroyHPList = [];
            key = false;
            hp = 3;
            game.state.add("level", currentLevel);
            game.state.start("level");
        } else {

            selectLevel();
        }

    }
}

function collisionHeal() {
    if (hp < 3) {
        hp += 1;
        this.fHPGroup.children[3 - hp].play('heal');
        this.fHearts.children[i].destroy();
        console.log(i);
        destroyHPList.push(i);
    }

}

function getKey() {
    if (this.fKeyYellow.exists) {
        key = true;
        this.fKeyYellow.destroy();
    }
}

function IsOpenChest() {

    if (key) {
        key = false;
        this.fTreasure_chest.play('open').onComplete.add(function () {
            if (hp == 1) {
                stars[level] = 1;
                if (stars[level + 1] != undefined && stars[level + 1] == -1) {
                    stars[level + 1] = 0;
                }
            } else if (hp == 2) {
                stars[level] = 2;
                if (stars[level + 1] != undefined && stars[level + 1] == -1) {
                    stars[level + 1] = 0;
                }
            } else if (hp == 3) {
                stars[level] = 3;
                if (stars[level + 1] != undefined && stars[level + 1] == -1) {
                    stars[level + 1] = 0;
                }

                $.ajax({
                    url: "database/DBAction/insertACM.php",
                    type: "POST",
                    data: {
                        AchievementID: 3,
                        p: 33.33,
                        userID: userID
                    },
                    success: function (data) {
                        if (data != '')
                            showSnackbar(data);
                    },
                    error: function () {
                    }
                });
            }

            //use localStorageName
            //localStorage.setItem(localStorageName, stars.toString());
            for (var k in workspace.blockDB_) {

                if (workspace.blockDB_[k].type == 'controls_repeat_ext') {
                    $.ajax({
                        url: "database/DBAction/insertACM.php",
                        type: "POST",
                        data: {
                            AchievementID: 4,
                            p: 100,
                            userID: userID
                        },
                        success: function (data) {
                            if (data != '')
                                showSnackbar(data);
                        },
                        error: function () {
                        }
                    });

                }
            }
            if (level == 0) {
                $.ajax({
                    url: "database/DBAction/insertACM.php",
                    type: "POST",
                    data: {
                        AchievementID: 1,
                        p: 100,
                        userID: userID
                    },
                    success: function (data) {
                        if (data != '')
                            showSnackbar(data);
                    },
                    error: function () {
                    }
                });
            } else if (level == 1) {
                $.ajax({
                    url: "database/DBAction/insertACM.php",
                    type: "POST",
                    data: {
                        AchievementID: 2,
                        p: 100,
                        userID: userID
                    },
                    success: function (data) {
                        if (data != '')
                            showSnackbar(data);
                    },
                    error: function () {
                    }
                });
            }
            $.ajax({
                url: "database/DBAction/insertACM.php",
                type: "POST",
                data: {
                    AchievementID: 6,
                    p: 10,
                    userID: userID
                },
                success: function (data) {
                    if (data != '')
                        showSnackbar(data);
                },
                error: function () {
                }
            });
            $.ajax({
                url: "database/DBAction/insertACM.php",
                type: "POST",
                data: {
                    AchievementID: 8,
                    p: 20,
                    userID: userID
                },
                success: function (data) {
                    if (data != '')
                        showSnackbar(data);
                },
                error: function () {
                }
            });
            $.ajax({
                url: "database/DBAction/insertLVStar.php",
                type: "POST",
                data: {
                    Action: 'insertLVStar',
                    userID: userID,
                    lv: level + 1,
                    star: stars[level]
                },
                success: function (data) {
                },
                error: function () {
                }
            });


            hideGrid(true);
            messageBox(true, 300, 200, function () {
                selectLevel()
            }), this;
        }, this);
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function wait(millisecondsToWait) {
    setTimeout(function () {

    }, millisecondsToWait)
    sleep(millisecondsToWait);
}

function changeToolbox(toolbox, maxBlockNum) {
    workspace.dispose();
    workspace = Blockly.inject('blocklyDiv',
        {
            maxBlocks: maxBlockNum,
            media: 'google-blockly/media/',
            toolbox: toolbox
        });
    generateCodeAndLoadIntoInterpreter();
    workspace.addChangeListener(function (event) {
        if (!(event instanceof Blockly.Events.Ui)) {
            // Something changed. Parser needs to be reloaded.
            resetInterpreter();
            generateCodeAndLoadIntoInterpreter();
        }
    });

    workspace.addChangeListener(onWorkspaceChange);
    onWorkspaceChange();
}

function viewAllBlockly() {
    workspace.dispose();
    workspace = Blockly.inject('blocklyDiv',
        {
            media: 'google-blockly/media/',
            toolbox: document.getElementById("toolbox")
        });
    generateCodeAndLoadIntoInterpreter();
    workspace.addChangeListener(function (event) {
        if (!(event instanceof Blockly.Events.Ui)) {
            // Something changed. Parser needs to be reloaded.
            resetInterpreter();
            generateCodeAndLoadIntoInterpreter();
        }
    });

    workspace.addChangeListener(onWorkspaceChange);
    onWorkspaceChange();
}

function KoMessage(name, callback) {
    if (level == 5) {
        $.ajax({
            url: "database/DBAction/insertACM.php",
            type: "POST",
            data: {
                AchievementID: 5,
                p: 33.33,
                userID: userID
            },
            success: function (data) {
                if (data != null)
                    showSnackbar(data);
            },
            error: function () {
            }
        });
    }
    $.ajax({
        url: "database/DBAction/insertACM.php",
        type: "POST",
        data: {
            AchievementID: 7,
            p: 16.67,
            userID: userID
        },
        success: function (data) {
            if (data != '')
                showSnackbar(data);
        },
        error: function () {
        }
    });
    //if exists
    var w = 300;
    var h = 200;

    if (this.msgBox) {
        this.msgBox.destroy();
    }
    //make a group to hold all the elements
    var msgBox = game.add.group();
    //make the back of the message box
    var back = game.add.sprite(0, 0, "boxBack");
    //make the close button
    //add the elements to the group
    msgBox.add(back);

    var text1 = game.add.text(0, 0, "你打羸了" + name);
    var okButton = game.add.sprite(0, 0, "OKButton");
    //make a text field
    //set the textfeild to wrap if the text is too long
    text1.wordWrap = true;
    //make the width of the wrap 90% of the width
    //of the message box
    text1.wordWrapWidth = w * .9;
    msgBox.add(okButton);
    msgBox.add(text1);
    //set the ok button
    //in the center horizontally
    //and near the bottom of the box vertically
    okButton.x = w / 2 - okButton.width / 2;
    okButton.y = h - okButton.height + 50;
    //enable the button for input
    okButton.inputEnabled = true;
    //add a listener to destroy the box when the button is pressed
    okButton.events.onInputDown.add(function () {
        this.msgBox.destroy();
        callback();
    }, this);

    //set the message box in the center of the screen
    msgBox.x = game.width / 2 - msgBox.width / 2;
    msgBox.y = game.height / 2 - msgBox.height / 2;
    //set the text in the middle of the message box
    text1.x = w / 2 - text1.width / 2;
    text1.y = h / 2 - text1.height / 2;
    //make a state reference to the messsage box
    this.msgBox = msgBox;
}

function messageBox(IsWin, w, h, callback) {
    //if exists
    if (this.msgBox) {
        this.msgBox.destroy();
    }
    //make a group to hold all the elements
    var msgBox = game.add.group();
    //make the back of the message box
    var back = game.add.sprite(0, 0, "boxBack");
    //make the close button
    //add the elements to the group
    msgBox.add(back);

    if (!IsWin) {
        var text1 = game.add.text(0, 0, lostMsg());
        var closeButton = game.add.sprite(0, 0, "closeButton");
        var Backselect = game.add.sprite(0, 0, "Backselect");
        Backselect.scale.setTo(0.60, 0.60);
        closeButton.scale.setTo(0.65, 0.58);
        //make a text field
        //set the textfeild to wrap if the text is too long
        text1.wordWrap = true;
        //make the width of the wrap 90% of the width
        //of the message box
        text1.wordWrapWidth = w * .9;
        msgBox.add(text1);
        msgBox.add(closeButton);
        msgBox.add(Backselect);
        //set the close button
        //in the center horizontally
        //and near the bottom of the box vertically
        Backselect.x = w / 8 - Backselect.width / 8 - 10;
        Backselect.y = h - Backselect.height + 60;
        closeButton.x = w / 8 - closeButton.width / 8 + 150;
        closeButton.y = h - closeButton.height + 55;
        //enable the button for input
        Backselect.inputEnabled = true;
        closeButton.inputEnabled = true;
        //add a listener to destroy the box when the button is pressed
        Backselect.events.onInputDown.add(function () {
            this.msgBox.destroy();
            selectLevel();
        }, this);
        closeButton.events.onInputDown.add(function () {
            this.msgBox.destroy();
            callback();
        }, this);
    } else if (IsWin) {
        var text1 = game.add.text(0, 0, winMsg());
        var okButton = game.add.sprite(0, 0, "OKButton");
        //make a text field
        //set the textfeild to wrap if the text is too long
        text1.wordWrap = true;
        //make the width of the wrap 90% of the width
        //of the message box
        text1.wordWrapWidth = w * .9;
        msgBox.add(okButton);
        msgBox.add(text1);
        //set the ok button
        //in the center horizontally
        //and near the bottom of the box vertically
        okButton.x = w / 2 - okButton.width / 2;
        okButton.y = h - okButton.height + 50;
        //enable the button for input
        okButton.inputEnabled = true;
        //add a listener to destroy the box when the button is pressed
        okButton.events.onInputDown.add(function () {
            this.msgBox.destroy();
            callback();
        }, this);
    }
    //set the message box in the center of the screen
    msgBox.x = game.width / 2 - msgBox.width / 2;
    msgBox.y = game.height / 2 - msgBox.height / 2;
    //set the text in the middle of the message box
    text1.x = w / 2 - text1.width / 2;
    text1.y = h / 2 - text1.height / 2;
    //make a state reference to the messsage box
    this.msgBox = msgBox;
}


function scrollByArrow(y) {

    if (playerInput.alpha > 0.3) {
        playerInput.forEach(function (i) {
            i.y += y / (playerInput.children.length / 10);
        }, this);
    }
}

function scrollWeaknessByArrow(y) {
    weakness.forEach(function (item, idx, array) {
        if (item.alpha > 0.3) {
            item.forEach(function (i) {
                i.y += y / (array.length / 10);
            }, this);
        }
    });
}

function scroll() {
    if (playerInput.alpha > 0.3) {
        playerInput.forEach(function (i, idx, array) {
            if (array.length >= 10) {
                i.y += game.input.mouse.wheelDelta * 9 / (Math.floor(playerInput.children.length) / 10);
            } else {
                i.y += game.input.mouse.wheelDelta * 9;
            }
        }, this);
    }

}

function weekSpace() {
    if (weekCurrentCol < 20) {
        weekCurrentCol += 1;
    }
}

function weekNextline() {
    weekCurrentRow += 1;
    weekCurrentCol = 0;
}

function space() {
    if (currentCol < 20) {

    }
}

function nextline() {
    currentRow += 1;
    currentCol = 0;
}

var gameIndex;

function inGame(index) {
    weaknessGroupList = createArray(6, 20);
    if (weaknessGroup != null) {
        weaknessGroup.destroy();
    }
    weaknessGroup = game.add.group();
    if (index == 1) {
        //game
        addweaknessGroupGame1(randonWeakness(3));
    } else if (index == 2) {
        addweaknessGroupGame1(randonWeakness(5));
    } else if (index == 3) {
        //space game
        addweaknessGroupGame2(randonWeakness(5));
    } else if (index == 4) {
        //create game with multiple line(elementArray, NoOfEnter(start from 1))
        addweaknessGroupGame3(randonWeakness(5), 2);
    } else if (index == 5) {
        //create game with multiple line(elementArray, NoOfEnter(start from 1))
        addweaknessGroupGame4(setWeakness(1, 10));
    }else if (index == 6) {
        //create game with multiple line(elementArray, NoOfEnter(start from 1))
        addweaknessGroupGame5(setWeakness(0, 10));
    }
}

//create random element
function randonWeakness(number) {
    var weakness = [];
    for (i = 0; i < number; i++) {
        weakness[i] = Math.floor(Math.random() * 5) + 1;
    }
    return weakness;
}

//create random element
function setWeakness(weakness, number) {
    var weaknessArray = [];
    for (i = 0; i < number; i++) {
        weaknessArray[i] = weakness;
    }
    return weaknessArray;
}

// Game
function setHeart(that) {

}

function resetElement() {

    if (playerInput != null) {
        playerInput.destroy();
        playerInput = game.add.group();
        playerInput.x = 120;
        playerInput.y = 330;
    }
    currentRow = 0;
    currentCol = 0;
    playerInputList = createArray(6, 20);
}

function addPlayerInputList(element) {
    playerInput.x = 120;
    playerInput.y = 330;
    if (element == 'pause') {
        sprite = game.add.sprite(0, 0, 'pause', null, playerInput);
        sprite.scale.set(32 / 225);
    } else {

        if (playerInput.children.length == 0) {
            //firstElement = playerInput.createMultiple(1, 'Attributes', element, true);
            sprite = game.add.sprite(0, 0, 'Attributes', element, playerInput);
            sprite.scale.set(0.5);
        } else {
            sprite = game.add.sprite(0, 0, 'Attributes', element, playerInput);
            sprite.scale.set(0.5);
        }
    }


    playerInputList[currentRow][currentCol] = playerInput.children[playerInput.children.length - 1];
    playerInput.children[playerInput.children.length - 1].y += currentRow * 45;
    playerInput.children[playerInput.children.length - 1].x += currentCol * 45;
    currentCol += 1;
    return playerInput;
}

function addweaknessGroupGame1(weakness) {
    playerInput = game.add.group();
    hideGrid(true);
    toolbox = '<xml id="toolbox" style="display: none">';
    toolbox += '  <block type="input"></block>';
    toolbox += '</xml>';
    changeToolbox(toolbox, 20);

    weaknessGroup.x = 120;
    weaknessGroup.y = 30;
    weekCurrentCol = 0;
    weekCurrentRow = 0;
    for (i = 0; i < weakness.length; i++) {
        sprite = game.add.sprite(0, 0, 'Attributes', weakness[i], weaknessGroup);
        sprite.scale.set(0.5);
        weaknessGroupList[weekCurrentRow][weekCurrentCol] = weaknessGroup.children[weaknessGroup.children.length - 1];
        weaknessGroup.children[weaknessGroup.children.length - 1].y += weekCurrentRow * 45;
        weaknessGroup.children[weaknessGroup.children.length - 1].x += weekCurrentCol * 45;
        weekCurrentCol += 1;
    }
    game.world.bringToTop(weaknessGroup);
    return weaknessGroup;
}

//with space
function addweaknessGroupGame2(weakness) {
    playerInput = game.add.group();
    hideGrid(true);

    toolbox = '<xml id="toolbox" style="display: none">';
    toolbox += '  <block type="input"></block>';
    toolbox += '  <block type="null"></block>';
    toolbox += '</xml>';
    changeToolbox(toolbox, 20);

    weaknessGroup.x = 120;
    weaknessGroup.y = 30;
    weekCurrentCol = 0;
    weekCurrentRow = 0;
    var randomSpace = Math.floor((Math.random() * weakness.length) - 1) + 1;
    for (i = 0; i < weakness.length; i++) {
        if (i == randomSpace) {
            sprite = game.add.sprite(0, 0, 'pause', null, weaknessGroup);
            sprite.scale.set(32 / 225);
        } else {
            sprite = game.add.sprite(0, 0, 'Attributes', weakness[i], weaknessGroup);
            sprite.scale.set(0.5);
        }

        weaknessGroupList[weekCurrentRow][weekCurrentCol] = weaknessGroup.children[weaknessGroup.children.length - 1];

        weaknessGroup.children[weaknessGroup.children.length - 1].y += weekCurrentRow * 45;
        weaknessGroup.children[weaknessGroup.children.length - 1].x += weekCurrentCol * 45;
        weekCurrentCol += 1;

    }

    game.world.bringToTop(weaknessGroup);
    return weaknessGroup;
}

function addweaknessGroupGame3(weakness, newLine) {
    playerInput = game.add.group();
    hideGrid(true);

    toolbox = '<xml id="toolbox" style="display: none">';
    toolbox += '<category name="Element">';
    toolbox += '  <block type="input"></block>';
    toolbox += '  <block type="null"></block>';
    toolbox += '  <block type="newRow"></block>';
    toolbox += '</xml>';

    changeToolbox(toolbox, 20);

    weaknessGroup.x = 120;
    weaknessGroup.y = 30;
    weekCurrentCol = 0;
    weekCurrentRow = 0;
    var randomSpace = Math.floor((Math.random() * weakness.length) - 1);
    var randomNewLine = [newLine];
    for (i = 0; i < newLine; i++) {
        randomNewLine[i] = Math.floor((Math.random() * weakness.length));
        if (randomNewLine[i] == 0) {
            randomNewLine[i] += 1;
        }
    }
    do {
        bool = false;

        for (i = 0; i < randomNewLine.length; i++) {
            for (j = 0; j < randomNewLine.length; j++) {
                if (randomNewLine[i] == randomNewLine[j] && (i != j) || randomNewLine[i] == 0) {
                    bool = true;
                    randomNewLine[i] = Math.floor((Math.random() * weakness.length));
                }
            }

        }
    } while (bool);
    for (i = 0; i < randomNewLine.length; i++) {
    }

    for (i = 0; i < weakness.length; i++) {
        for (j = 0; j < randomNewLine.length; j++) {
            if (i == randomNewLine[j]) {
                weekNextline();
            }
        }
        if (weekCurrentRow < 6 || weekCurrentCol < 20) {
            if (i == randomSpace) {
                sprite = game.add.sprite(0, 0, 'pause', null, weaknessGroup);
                sprite.scale.set(32 / 225);
            } else {
                sprite = game.add.sprite(0, 0, 'Attributes', weakness[i], weaknessGroup);
                sprite.scale.set(0.5);
            }

            weaknessGroupList[weekCurrentRow][weekCurrentCol] = weaknessGroup.children[weaknessGroup.children.length - 1];
            weaknessGroup.children[weaknessGroup.children.length - 1].y += weekCurrentRow * 45;
            weaknessGroup.children[weaknessGroup.children.length - 1].x += weekCurrentCol * 45;
            weekCurrentCol += 1;
        }
    }

    game.world.bringToTop(weaknessGroup);
    return weaknessGroup;
}

function addweaknessGroupGame4(weakness) {
    playerInput = game.add.group();
    hideGrid(true);

    toolbox = '<xml id="toolbox" style="display: none">';
    toolbox += '<category name="Element">';
    toolbox += '  <block type="input"></block>';
    toolbox += '  <block type="null"></block>';
    toolbox += '  <block type="newRow"></block>';
    toolbox += ' </category>';
    toolbox += '<category name="Loops" colour="#5CA65C">';
    toolbox += '<block type="controls_repeat_ext">';
    toolbox += '<value name="TIMES">';
    toolbox += '    <shadow type="math_number">';
    toolbox += '        <field name="NUM">10</field>';
    toolbox += '   </shadow>';
    toolbox += '</value>';
    toolbox += '</block>';
    toolbox += ' </category>';
    toolbox += '   <category name="Math" colour="#5C68A6">';
    toolbox += ' <block type="math_number">';
    toolbox += '           <field name="NUM">0</field>';
    toolbox += '        </block>';
    toolbox += '        <block type="math_arithmetic">';
    toolbox += '            <field name="OP">ADD</field>';
    toolbox += '            <value name="A">';
    toolbox += '                <shadow type="math_number">';
    toolbox += '                    <field name="NUM">1</field>';
    toolbox += '                </shadow>';
    toolbox += '            </value>';
    toolbox += '            <value name="B">';
    toolbox += '                <shadow type="math_number">';
    toolbox += '                    <field name="NUM">1</field>';
    toolbox += '                </shadow>';
    toolbox += '            </value>';
    toolbox += '        </block>';
    toolbox += '    </category>';
    toolbox += '<sep gap="8"></sep>';
    toolbox += '<category name="Variables" colour="330" custom="VARIABLE"></category>';
    toolbox += '</xml>';

    changeToolbox(toolbox, 20);

    weaknessGroup.x = 120;
    weaknessGroup.y = 30;
    weekCurrentCol = 0;
    weekCurrentRow = 0;
    for (i = 0; i < 6; i++) {
        for (j = 0 ; j < i; j++){
            if (weekCurrentRow < 6 || weekCurrentCol < 20) {

                sprite = game.add.sprite(0, 0, 'Attributes', weakness[i], weaknessGroup);
                sprite.scale.set(0.5);


                weaknessGroupList[weekCurrentRow][weekCurrentCol] = weaknessGroup.children[weaknessGroup.children.length - 1];
                weaknessGroup.children[weaknessGroup.children.length - 1].y += weekCurrentRow * 45;
                weaknessGroup.children[weaknessGroup.children.length - 1].x += weekCurrentCol * 45;
                weekCurrentCol++;
            }
        }

        weekNextline();
    }

    game.world.bringToTop(weaknessGroup);
    return weaknessGroup;
}
function addweaknessGroupGame5(weakness) {
    playerInput = game.add.group();
    hideGrid(true);

    toolbox = '<xml id="toolbox" style="display: none">';
    toolbox += '<category name="Element">';
    toolbox += '  <block type="input"></block>';
    toolbox += '  <block type="null"></block>';
    toolbox += '  <block type="newRow"></block>';
    toolbox += ' </category>';
    toolbox += '<category name="Loops" colour="#5CA65C">';
    toolbox += '<block type="controls_repeat_ext">';
    toolbox += '<value name="TIMES">';
    toolbox += '    <shadow type="math_number">';
    toolbox += '        <field name="NUM">10</field>';
    toolbox += '   </shadow>';
    toolbox += '</value>';
    toolbox += '</block>';
    toolbox += ' </category>';
    toolbox += '   <category name="Math" colour="#5C68A6">';
    toolbox += ' <block type="math_number">';
    toolbox += '           <field name="NUM">0</field>';
    toolbox += '        </block>';
    toolbox += '        <block type="math_arithmetic">';
    toolbox += '            <field name="OP">ADD</field>';
    toolbox += '            <value name="A">';
    toolbox += '                <shadow type="math_number">';
    toolbox += '                    <field name="NUM">1</field>';
    toolbox += '                </shadow>';
    toolbox += '            </value>';
    toolbox += '            <value name="B">';
    toolbox += '                <shadow type="math_number">';
    toolbox += '                    <field name="NUM">1</field>';
    toolbox += '                </shadow>';
    toolbox += '            </value>';
    toolbox += '        </block>';
    toolbox += '    </category>';
    toolbox += '<sep gap="8"></sep>';
    toolbox += '<category name="Variables" colour="330" custom="VARIABLE"></category>';
    toolbox += '</xml>';

    changeToolbox(toolbox, 20);

    weaknessGroup.x = 120;
    weaknessGroup.y = 30;
    weekCurrentCol = 0;
    weekCurrentRow = 0;
    for (i = 0; i < 6; i++) {
        for (j = 0 ; j < i; j++){
            if (weekCurrentRow < 6 || weekCurrentCol < 20) {

                sprite = game.add.sprite(0, 0, 'Attributes', weakness[i], weaknessGroup);
                sprite.scale.set(0.5);


                weaknessGroupList[weekCurrentRow][weekCurrentCol] = weaknessGroup.children[weaknessGroup.children.length - 1];
                weaknessGroup.children[weaknessGroup.children.length - 1].y += weekCurrentRow * 45;
                weaknessGroup.children[weaknessGroup.children.length - 1].x += weekCurrentCol * 45;
                weekCurrentCol++;
            }
        }
        for (j = 6; j > i ; j--){
            console.log(i+';'+j);
            sprite = game.add.sprite(0, 0, 'pause', null, weaknessGroup);
            sprite.scale.set(32 / 225);
            weaknessGroupList[weekCurrentRow][weekCurrentCol] = weaknessGroup.children[weaknessGroup.children.length - 1];
            weaknessGroup.children[weaknessGroup.children.length - 1].y += weekCurrentRow * 45;
            weaknessGroup.children[weaknessGroup.children.length - 1].x += weekCurrentCol * 45;
            weekCurrentCol++;
        }
        weekNextline();
    }

    game.world.bringToTop(weaknessGroup);
    return weaknessGroup;
}


function confirmMsg(msgName) {
    if (document.getElementById('checkshow').checked) {
        setCookie(msgName, 0, expDate);
    }
}

function showMsg(msg) {
    document.getElementById('additem').innerHTML = '<button id="msgBTN" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#' + msg + '"></button>">';
    document.getElementById('msgBTN').click();
}

function createMsg(levelName, tabNameArray, img2Darray) {
    html = '';
    html += '<div class="container">';
    html += ' <div id="' + levelName + '" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">';
    html += '    <div class="modal-dialog modal-lg">';
    html += '   <div class="modal-content">';
    html += '   <div class="modal-header">';
    html += '    <h5 class="modal-title" id="wizard-title">Instructions</h5>';
    html += ' <button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    html += '    <span aria-hidden="true">&times;</span>';
    html += ' </button>';
    html += ' </div>';
    html += '<div class="modal-body">';
    html += '   <ul class="nav nav-tabs" id="myTab" role="tablist">';
    for (i = 0; i < tabNameArray.length; i++) {
        if (i == 0) {
            html += '    <li class="nav-item">';
            html += '   <a class="nav-link active" data-toggle="tab" href="#' + tabNameArray[i] + '" role="tab">' + tabNameArray[i] + '</a>';
            html += '   </li>';
        } else {
            html += '   <li class="nav-item">';
            html += '   <a class="nav-link" data-toggle="tab" href="#' + tabNameArray[i] + '" role="tab">' + tabNameArray[i] + '</a>';
            html += '  </li>';

        }

    }
    html += '  </ul>';
    html += '   </div>';
    for (i = 0; i < tabNameArray.length; i++) {
        if (i == 0) {
            html += '    <div class="tab-content mt-2">';
            html += '<div class="tab-pane fade show active" id="' + tabNameArray[i] + '" role="tabpanel">';
        } else {
            html += '<div class="tab-pane fade" id="' + tabNameArray[i] + '" role="tabpanel">';
        }
        html += '<h4>' + tabNameArray[i] + '</h4>';
        html += '   <div class="col-md-8 banner-sec" style="text-align: center">';
        html += '  <div id="' + tabNameArray[i] + '1" class="carousel slide" data-ride="carousel" style="text-align: center">';
        html += '  <ol class="carousel-indicators">';
        for (j = 0; j < img2Darray[i].length; j++) {
            if (img2Darray[i][j] == undefined) {
                break;
            } else if (j == 0) {
                html += '  <li data-target="#' + tabNameArray[i] + '1" data-slide-to="' + j + '" class="active"></li>';
            } else {
                html += '  <li data-target="#' + tabNameArray[i] + '1" data-slide-to="' + j + '" ></li>';
            }
        }
        html += '  </ol>';

        html += ' <div class="carousel-inner" role="listbox" style="text-align: center">';

        for (j = 0; j < img2Darray[i].length; j++) {
            if (img2Darray[i][j] != undefined) {
                if (j == 0) {
                    html += ' <div class="carousel-item active" style="text-align: center">';
                    html += '   <img class="d-block img-fluid" src="' + img2Darray[i][j] + '" width="500" height="500">';
                    html += '   <div class="carousel-caption d-none d-md-block"></div>';
                    html += '   </div>';
                } else {
                    html += '   <div class="carousel-item" style="text-align: center">';
                    html += '   <img class="d-block img-fluid" src="' + img2Darray[i][j] + '" width="500" height="500">';
                    html += '   <div class="carousel-caption d-none d-md-block"></div>';
                    html += '   </div>';
                }
            } else {
                break;
            }
        }
        html += '  </div>';
        html += '  </div>';
        html += '  <a class="carousel-control-prev" href="#' + tabNameArray[i] + '1" role="button" data-slide="prev">';
        html += '  <span class="carousel-control-prev-icon" aria-hidden="true"></span>';
        html += '   <span class="sr-only">Previous</span>';
        html += '   </a>';
        html += '   <a class="carousel-control-next" href="#' + tabNameArray[i] + '1" role="button" data-slide="next">';
        html += '  <span class="carousel-control-next-icon" aria-hidden="true"></span>';
        html += '  <span class="sr-only">Next</span>';
        html += ' </a>';
        html += ' </div>';
        html += ' </div>';
    }

    html += '  <div class="modal-footer">';
    html += '   <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick=\'confirmMsg("' + levelName + '");\'>confirm</button>';
    html += '   </div>';
    html += '  <div style="font-size: 20px">Don\'t show again <input type="checkbox" id="checkshow"></div>';
    html += ' </div>';
    html += ' </div>';
    html += ' </div>';
    html += '  </div>';

    document.getElementById('msgContainer').innerHTML = html;
    showMsg(levelName);
}


//cookie


var expDate = new Date();
expDate.setTime(expDate.getTime() + 365 * 24 * 60 * 60 * 1000); // one year

function setCookie(isName, isValue, dExpires) {

    document.cookie = isName + "=" + isValue + ";expires=" + dExpires.toGMTString();
}

function getCookie(isName) {

    cookieStr = document.cookie;
    startSlice = cookieStr.indexOf(isName + "=");
    if (startSlice == -1) {
        return false
    }
    endSlice = cookieStr.indexOf(";", startSlice + 1)
    if (endSlice == -1) {
        endSlice = cookieStr.length
    }
    isData = cookieStr.substring(startSlice, endSlice)
    isValue = isData.substring(isData.indexOf("=") + 1, isData.length);
    return isValue;
}

function initPopups() {
    /*
    if (!getCookie('autoMsg')) {
        window.location.href = "GamePlay.php#msg";
        setCookie('autoMsg', 0, expDate);
    }
    */

}



