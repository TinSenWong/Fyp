

var playGame = function (game) {};
playGame.prototype = {
    preload: function () {
        // level thumbnail
    	currentScreen = 'selectlevel';
        game.load.spritesheet("levelthumb", "assets/image/levelthumb.png", 60, 60);
        // level pages at the bottom
        game.load.image("levelpages", "assets/image/levelpages.png");
        // transparent background used to scroll
        game.load.image("transp", "assets/image/transp.png");
    },
    create: function () {
    	hideGame(true);
        // the first level has zero stars, to it's playable although not finished
        //stars[0] = 0;
        // retrieving stars string from local storage or converting stars array to a string
        //use localStorage
        //this.savedData = localStorage.getItem(localStorageName) == null ? stars.toString() : localStorage.getItem(localStorageName);
        //stars = this.savedData.split(",");
        // setting game background color
        game.stage.backgroundColor = "#222222";
        // just a text placed on the top of the stage to show level page
        // the tiled transparent sprite, covering the entire scrollable area which width is (number of pages) * (game width)
        this.scrollingMap = game.add.tileSprite(0, 0, colors.length * game.width, game.height, "transp");
        // this is how we tell Phaser the sprite can receive inputs
        this.scrollingMap.inputEnabled = true;
        // the sprite can be dragged
        this.scrollingMap.input.enableDrag(false);
        // the sprite can't be dragged vertically
        this.scrollingMap.input.allowVerticalDrag = false;
        // this is the bounding box which defines dragging limits
        this.scrollingMap.input.boundsRect = new Phaser.Rectangle(game.width - this.scrollingMap.width, game.height - this.scrollingMap.height, this.scrollingMap.width * 2 - game.width, this.scrollingMap.height * 2 - game.height);
        // we start at page zero, that is the first page
        this.currentPage = 0;
        // this will be the array of page thumbnails
        this.pageSelectors = [];
        // determining row length according to thumbnail width, spacing and number of columns
        var rowLength = thumbWidth * columns + spacing * (columns - 1);
        // left margin is set to every row is centered in the stage
        var leftMargin = (game.width - rowLength) / 2;
        // same concept applies to column height and top margin
        var colHeight = thumbHeight * rows + spacing * (rows - 1);
        var topMargin = (game.height - colHeight) / 2;
        // looping through all pages
        for (var k = 0; k < colors.length; k++) {
            // looping through all columns
            for (var i = 0; i < columns; i++) {
                // looping through all rows
                for (var j = 0; j < rows; j++) {
                    // adding level thumbnail
                    var thumb = game.add.image(k * game.width + leftMargin + i * (thumbWidth + spacing), topMargin + j * (thumbHeight + spacing), "levelthumb");
                    // setting tint color according to page cumber
                    thumb.tint = colors[k];
                    // each level has a number...
                 
                    thumb.levelNumber = k * (rows * columns) + j * columns + i;//change************************************************************************+1
                    // assigning each thumbnail a frame according to its stars value
                    thumb.frame = parseInt(stars[thumb.levelNumber]) + 1;
                    // which we are going to write inside the thumbnail
                    var levelText = game.add.text(0, 0, thumb.levelNumber+1, {
                        font: "24px Arial",
                        fill: "#000000"
                    });
                    // level number is added as a child of level thumbnail
                    thumb.addChild(levelText);
                    // level thumbnail is added as a child of scrolling map
                    this.scrollingMap.addChild(thumb);
                }
            }
        }
        // when we start dragging, we just save horizontal map position
        this.scrollingMap.events.onDragStart.add(function (sprite, pointer) {
            this.scrollingMap.startPosition = this.scrollingMap.x;
        }, this);
        // the core of the script is when we STOP dragging
        this.scrollingMap.events.onDragStop.add(function (sprite, pointer) {
            // if there wasn't any scroll, we can say it wasn't a drag so the player clicked a level
            if (this.scrollingMap.startPosition == this.scrollingMap.x) {
                // now we just have to check for all bounding boxes to see which level thumbnail has been clicked
                // sadly, we can't use buttons or they won't allow to detect scrolling
                for (i = 0; i < this.scrollingMap.children.length; i++) {
                    var bounds = this.scrollingMap.children[i].getBounds();
                    // before we start a level, let's check the level is not locked that means it's not on frame zero  
                    if (bounds.contains(pointer.x, pointer.y) && this.scrollingMap.children[i].frame > 0) {
                        alert("Welcome to Level " + (this.scrollingMap.children[i].levelNumber+1));
                        var selestLevel = this.scrollingMap.children[i].levelNumber;
                        level = selestLevel;
                        hideGame(false);
                        game.destroy();
                        game = new Phaser.Game(1200, 800, Phaser.Auto, 'phaser');
                        gamePass = false;
                        key = false;
                        hp = 3 ;
                        dieList = [];
                        currentScreen = 'level';
                        runCount = 0;
                        document.getElementById('runTime').innerHTML = '';
                        
                        switch (selestLevel+1) {
                            case 1:
                            	currentLevel = Level1;

                                game.state.add("level", Level1);
                                game.state.start("level");
                                if (!getCookie('level1Msg')) {
                                    tabNameArray=['Game','Blockly'];
                                    img2Darray=createArray(2,100);
                                    img2Darray[0][0]='src/Level1~4/game/getkey1.jpg';
                                    img2Darray[0][1]='src/Level1~4/game/getkey2.jpg';
                                    img2Darray[0][2]='src/Level1~4/game/stone1.jpg';
                                    img2Darray[1][0]='src/Level1~4/blockly/commandarea.png';
                                    img2Darray[1][1]='src/Level1~4/gif/dropcomm.gif';
                                    img2Darray[1][2]='src/Level1~4/blockly/run.png';
                                    img2Darray[1][3]='src/Level1~4/blockly/movement.png';
                                    createMsg('level1Msg',tabNameArray,img2Darray);
                                }
                                break;

                            case 2:
                            	currentLevel = Level2;
                            	game.state.add("level", Level2);
                                game.state.start("level");
                                if (!getCookie('level1Msg')) {
                                    tabNameArray=['Game','Blockly'];
                                    img2Darray=createArray(2,100);
                                    img2Darray[0][0]='src/Level1~4/game/getkey1.jpg';
                                    img2Darray[0][1]='src/Level1~4/game/getkey2.jpg';
                                    img2Darray[0][2]='src/Level1~4/game/stone1.jpg';
                                    img2Darray[1][0]='src/Level1~4/blockly/commandarea.png';
                                    img2Darray[1][1]='src/Level1~4/gif/dropcomm.gif';
                                    img2Darray[1][2]='src/Level1~4/blockly/run.png';
                                    img2Darray[1][3]='src/Level1~4/blockly/movement.png';
                                    createMsg('level1Msg',tabNameArray,img2Darray);
                                }
                                break;
                                
                            case 3:
                            	currentLevel = Level3;
                            	game.state.add("level", Level3);
                                game.state.start("level");
                                if (!getCookie('level1Msg')) {
                                    tabNameArray=['Game','Blockly'];
                                    img2Darray=createArray(2,100);
                                    img2Darray[0][0]='src/Level1~4/game/getkey1.jpg';
                                    img2Darray[0][1]='src/Level1~4/game/getkey2.jpg';
                                    img2Darray[0][2]='src/Level1~4/game/stone1.jpg';
                                    img2Darray[1][0]='src/Level1~4/blockly/commandarea.png';
                                    img2Darray[1][1]='src/Level1~4/gif/dropcomm.gif';
                                    img2Darray[1][2]='src/Level1~4/blockly/run.png';
                                    img2Darray[1][3]='src/Level1~4/blockly/movement.png';
                                    createMsg('level1Msg',tabNameArray,img2Darray);
                                }
                                break;
                                
                            case 4:
                            	currentLevel = Level4;
                                game.state.add("level", Level4);
                                game.state.start("level");
                                if (!getCookie('level1Msg')) {
                                    tabNameArray=['Game','Blockly'];
                                    img2Darray=createArray(2,100);
                                    img2Darray[0][0]='src/Level1~4/game/getkey1.jpg';
                                    img2Darray[0][1]='src/Level1~4/game/getkey2.jpg';
                                    img2Darray[0][2]='src/Level1~4/game/stone1.jpg';
                                    img2Darray[1][0]='src/Level1~4/blockly/commandarea.png';
                                    img2Darray[1][1]='src/Level1~4/gif/dropcomm.gif';
                                    img2Darray[1][2]='src/Level1~4/blockly/run.png';
                                    img2Darray[1][3]='src/Level1~4/blockly/movement.png';
                                    createMsg('level1Msg',tabNameArray,img2Darray);
                                }
                                break;
                            case 5:
                                if (!getCookie('level5Msg')) {
                                    tabNameArray=['Game','Blockly'];
                                    img2Darray=createArray(2,100);
                                    img2Darray[0][0]='src/Level5~10/game/readytobattle.jpg';
                                    img2Darray[0][1]='src/Level5~10/game/rule.png';
                                    img2Darray[1][0]='src/Level5~10/blockly/changeElement.png';
                                    img2Darray[1][1]='src/Level5~10/blockly/repeat.png';

                                    createMsg('level5Msg',tabNameArray,img2Darray);
                                }
                            	currentLevel = Level5;
                                game.state.add("level", Level5);
                                game.state.start("level");

                                break;

                            case 6:
                                if (!getCookie('level5Msg')) {
                                    tabNameArray=['Game','Blockly'];
                                    img2Darray=createArray(2,100);
                                    img2Darray[0][0]='src/Level5~10/game/readytobattle.jpg';
                                    img2Darray[0][1]='src/Level5~10/game/rule.png';
                                    img2Darray[1][0]='src/Level5~10/blockly/changeElement.png';
                                    img2Darray[1][1]='src/Level5~10/blockly/repeat.png';

                                    createMsg('level5Msg',tabNameArray,img2Darray);
                                }
                            	currentLevel = Level6;
                            	game.state.add("level", Level6);
                                game.state.start("level");
                                break;

                            case 7:
                                if (!getCookie('level5Msg')) {
                                    tabNameArray=['Game','Blockly'];
                                    img2Darray=createArray(2,100);
                                    img2Darray[0][0]='src/Level5~10/game/readytobattle.jpg';
                                    img2Darray[0][1]='src/Level5~10/game/rule.png';
                                    img2Darray[1][0]='src/Level5~10/blockly/changeElement.png';
                                    img2Darray[1][1]='src/Level5~10/blockly/repeat.png';

                                    createMsg('level5Msg',tabNameArray,img2Darray);
                                }
                            	currentLevel = Level7;
                            	game.state.add("level", Level7);
                                game.state.start("level");
                                break;
                            case 8:
                                if (!getCookie('level5Msg')) {
                                    tabNameArray=['Game','Blockly'];
                                    img2Darray=createArray(2,100);
                                    img2Darray[0][0]='src/Level5~10/game/readytobattle.jpg';
                                    img2Darray[0][1]='src/Level5~10/game/rule.png';
                                    img2Darray[1][0]='src/Level5~10/blockly/changeElement.png';
                                    img2Darray[1][1]='src/Level5~10/blockly/repeat.png';

                                    createMsg('level5Msg',tabNameArray,img2Darray);
                                }
                            	currentLevel = Level8;
                            	game.state.add("level", Level8);
                                game.state.start("level");
                                break;
                            case 9:
                                if (!getCookie('level5Msg')) {
                                    tabNameArray=['Game','Blockly'];
                                    img2Darray=createArray(2,100);
                                    img2Darray[0][0]='src/Level5~10/game/readytobattle.jpg';
                                    img2Darray[0][1]='src/Level5~10/game/rule.png';
                                    img2Darray[1][0]='src/Level5~10/blockly/changeElement.png';
                                    img2Darray[1][1]='src/Level5~10/blockly/repeat.png';

                                    createMsg('level5Msg',tabNameArray,img2Darray);
                                }
                            	currentLevel = Level9;
                            	game.state.add("level", Level9);
                                game.state.start("level");
                                break;
                            case 10:
                                if (!getCookie('level5Msg')) {
                                    tabNameArray=['Game','Blockly'];
                                    img2Darray=createArray(2,100);
                                    img2Darray[0][0]='src/Level5~10/game/readytobattle.jpg';
                                    img2Darray[0][1]='src/Level5~10/game/rule.png';
                                    img2Darray[1][0]='src/Level5~10/blockly/changeElement.png';
                                    img2Darray[1][1]='src/Level5~10/blockly/repeat.png';

                                    createMsg('level5Msg',tabNameArray,img2Darray);
                                }
                            	currentLevel = Level10;
                            	game.state.add("level", Level10);
                                game.state.start("level");
                                break;
                            case 11:
                            	currentLevel = Level11;
                            	game.state.add("level", Level11);
                                game.state.start("level");
                                break;
                            case 12:
                            	currentLevel = Level12;
                            	game.state.add("level", Level12);
                                game.state.start("level");
                                break;
                            case 13:
                            	currentLevel = Level13;
                            	game.state.add("level", Level13);
                                game.state.start("level");
                                break;
                            case 14:
                            	currentLevel = Level14;
                            	game.state.add("level", Level14);
                                game.state.start("level");
                                break;
                            case 15:
                            	currentLevel = Level15;
                            	game.state.add("level", Level15);
                                game.state.start("level");
                                break;

                        }
                        break;

                    }
                }
            } else {
                // we define 1/8 of the width of the page as the minimum amount of pixels scrolled to say the player
                // wanted to swipe the page
                if (this.scrollingMap.startPosition - this.scrollingMap.x > game.width / 8) {
                    this.changePage(1);
                } else {
                    if (this.scrollingMap.startPosition - this.scrollingMap.x < -game.width / 8) {
                        this.changePage(-1);
                    } else {
                        this.changePage(0);
                    }
                }
            }
        }, this);
    },
    changePage: function (page) {
        // here we move the scrolling map according to selected page
        this.currentPage += page;
        for (var k = 0; k < colors.length; k++) {
            if (k == this.currentPage) {
                this.pageSelectors[k].height = 30;
            } else {
                this.pageSelectors[k].height = 15;
            }
        }
 var tween = game.add.tween(this.scrollingMap).to({
            x: this.currentPage * -game.width
        }, 300, Phaser.Easing.Cubic.Out, true);
    }
};

