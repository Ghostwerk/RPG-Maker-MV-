// ----------------------------------------------------------------------------
// SOUL_MV Chapter Select.js
// ----------------------------------------------------------------------------
/*:
* @plugindesc v1.0 Creates a chapter selection screen for episodic gameplay.
* @author Soulpour777
*
* @help
// ---------------------------------
// SOUL_MV Chapter Select.js
// Author: Soulpour777
// ---------------------------------

Plugin Commands:

chapter setSaveFile x       
where x is the save file being checked. Ex: chapter setSaveFile 1

chapter byPerspective               
sets the chapter definining the settings to New Game everytime.

chapter byContinuedCharacters       
sets the chapter defining the settings to old characters everytime.

chapter_select
opens the Chapter Selection Screen.

chapter disableOnMenu
disables the menu / greys the option on the menu.

chapter enableOnMenu
enables the option on the menu.

TERMINOLOGY GLOSSARY

By Perspective Option

When you use the chapter byPerspective Plugin Command, this means you
are going to setup New Game settings everytime. All your items, stats,
levels and gold will be lost and restart to nothing. This means in a
new map, you will be able to change to which character you want to
have in the new game.

Continued Characters

When you use the chapter byContinuedCharacters Plugin Command, this
means you are going to setup the characters you had in the old
chapter. All your items, stats, levels and gold will be in tact
and won't be restarted. This means in a new map, you will still
play as the ones you have been using from the past chapter.

Switch Start

What does this mean? It means this is where the batch is going to
start counting based on the maximum chapters you have. For example,
the value you placed is 1. If your max chapters are 6 chapters,
that means Switch ID 1 to Switch ID 6. It has to be done
by batch for easier memorization and eventing process.

If you change it to 6 and your max chapters is 6, that
means Switch ID 6 to Switch 12.

Features:
    - Window Based Commands for Chapter Selection
    - Button Based Commands for Chapter Selection
    - Advanced New Game Plus Style
    - Basic New Game Plus Style
    - Static and Animated Scene
    - Menu Option
    - Easily Changable Command Properties
    - Easily Changable Button Properties

* @param -- MAIN COMMANDS --
*
* @param Checked Save File
* @desc Which saved file do you wish to check the saved game values at? (Default. Changable in Plugin Commands)
* @default 1
*
* @param Show in Menu
* @desc Do you like to see the Chapter Select from the Menu? (true / false)
* @default true
*
* @param Switch Start
* @desc Which switch ID do you want the batch switch to start counting? (Default: 1. Means 1 to Chapters value)
* @default 1
*
* @param Chapters
* @desc How many chapters does your game have?
* @default 6
*
* @param Use Chapter Images
* @desc Do you want to use chapter images when displaying chapter names instead of default command window?
* @default true
*
* @param Use Confirm Window
* @desc Do you want to use images when displaying confirmation instead of command window?
* @default false
*
* @param Animate Cursor
* @desc Do you want the cursor to be purely animated or static? (true = Animated / false = static)
* @default true
*
* @param Rotate Circle
* @desc Do you want the circle to be purely animated or static? (true = Animated / false = static)
* @default true
*
* @param -- COMMANDS --
* 
* @param Draw Button Distance
* @desc The distance of each button drawn together on the screen. (Lower Value = Compact / Higher Value = Spaced)
* @default 90
* 
* @param Command Name
* @desc What is the command name of the Chapter Selection Screen when seen in the menu?
* @default Chapter Select
* 
* @param Command Visible
* @desc Do you want to make the chapter command visible?
* @default false
* 
* @param Command X
* @desc If the chapter commands are visible and not represented by images, what is the x axis dimension of your chapter command?
* @default 30
* 
* @param Command Y
* @desc If the chapter commands are visible and not represented by images, what is the y axis dimension of your chapter command?
* @default 120
* 
* @param Command Width
* @desc If the chapter commands are visible and not represented by images, what is the width of the window of your chapter command?
* @default 300
*
* @param Command Height
* @desc If the chapter commands are visible and not represented by images, what is the height of the window of your chapter command?
* @default 300
*
* @param Command Opacity
* @desc If the chapter commands are visible and not represented by images, what is the opacity of the window of your chapter command?
* @default 0
*
* @param Confirm Command X
* @desc X axis of the confirm command window.
* @default 308
* 
* @param Confirm Command Y
* @desc Y axis of the confirm command window.
* @default 412
*
* @param Confirm Command Width
* @desc Width of the confirm command window.
* @default 270
*
* @param Confirm Command Columns
* @desc How many columns does the confirm command carry? (Default: 2 because there are only two choices available)
* @default 2
*
* @param Confirm Command Opacity
* @desc Opacity of the confirm command window.
* @default 255
*
* @param Command OK Name
* @desc Command name when selecting OK from confirming to enter the saved file or not.
* @default Enter
*
* @param Command Cancel Name
* @desc Command name when selecting Cancel from confirming to enter the saved file or not.
* @default Cancel
*
* @param Command Back Name
* @desc Command name when selecting Back from confirming to enter the saved file or not.
* @default Go Back
*
* @param Chapter Names
* @desc Names of each of your chapter. Separated by commas. No "" marks. Chronological Order.
* @default 1 - Frey's Story, 2 - Lest's Story, 3 - Child's Story, 4 - Forte's Story, 5 - Dolce's Story, 6 - Clorica's Story
*
* @param Chapter Map Transfer
* @desc Which map do you want to be transferred per chapter? Separated by commas. No "" marks. Chronological Order.
* @default 1, 2, 3, 4, 5, 6
*
* @param Chapter Map X
* @desc X direction on the map you will be transferred at. Separated by commas. No "" marks. Chronological Order. 
* @default 10, 10, 10, 10, 10, 10
*
* @param Chapter Map Y
* @desc Y direction on the map you will be transferred at. Separated by commas. No "" marks. Chronological Order. 
* @default 10, 10, 10, 10, 10, 10
*
* @param Available Window
* @desc Dialog shown when the chapter is available and ready to play.
* @default Do you wish to enter this chapter?
*
* @param Available Window X
* @desc X axis of the window shown when the chapter is available and ready to play.
* @default 0
*
* @param Available Window Y
* @desc Y axis of the window shown when the chapter is available and ready to play.
* @default 0
*
* @param Available Window Opacity
* @desc Opacity of the window shown when the chapter is available and ready to play.
* @default 255
*
* @param Available Window Width
* @desc Width of the window shown when the chapter is available and ready to play.
* @default 700
*
* @param Available Window Height
* @desc Height of the window shown when the chapter is available and ready to play.
* @default 70
*
* @param Not Available Window
* @desc Dialog shown when the chapter is available and ready to play.
* @default You're not allowed to access this chapter yet.
*
* @param Unavailable Chapter Image
* @desc Image displayed if the chapter is not available.
* @default cancel_confirm
*
* @param Not Available Window X
* @desc X axis of the window shown when the chapter is not available to play.
* @default 0
*
* @param Not Available Window Y
* @desc Y axis of the window shown when the chapter is not available to play.
* @default 0
*
* @param Not Available Window Opacity
* @desc Opacity of the window shown when the chapter is not available to play.
* @default 255
*
* @param Not Available Window Width
* @desc Width of the window shown when the chapter is not available to play.
* @default 700
*
* @param Not Available Window Height
* @desc Height of the window shown when the chapter is not available to play.
* @default 70
*
* @param -- BACKGROUND --
*
* @param Scene Background
* @desc Background used when the right portrait is transitioned (Fade In / Fade Out).
* @default chapter ground
*
* @param -- SCENE IMAGES --
*
* @param Portrait X
* @desc X axis position of the portrait shown on the right for each chapter.
* @default 280
*
* @param Portrait Y
* @desc Y axis position of the portrait shown on the right for each chapter.
* @default 0
*
* @param Curved Image
* @desc The image name of the curved image shown on the left side beside the portrait (split by the magic circle).
* @default Curve1
* 
* @param Curved Image X
* @desc The x axis of the curved image shown on the left side beside the portrait (split by the magic circle).
* @default 0
*
* @param Curved Image Y
* @desc The x axis of the curved image shown on the left side beside the portrait (split by the magic circle).
* @default 0
*
* @param Cursor Image
* @desc The image name of the moving cursor that you are using to show the image commands (if used as option).
* @default cursor
*
* @param Cursor Image X
* @desc The x axis of the moving cursor that you are using to show the image commands (if used as option).
* @default 0
*
* @param Cursor Image Y
* @desc The y axis of the moving cursor that you are using to show the image commands (if used as option).
* @default 125
*
* @param Logo Image
* @desc The 'Chapter Select' Image shown on the top of the screen.
* @default Chapter Select Logo
*
* @param Logo Image X
* @desc The x axis of the 'Chapter Select' Image shown on the top of the screen.
* @default 0
*
* @param Logo Image Y
* @desc The y axis of the 'Chapter Select' Image shown on the top of the screen.
* @default 0
*
* @param Circle Image
* @desc The rotating image on the screen that splits the left and right scene images.
* @default Magic Circle
*
* @param Circle Image X
* @desc The x axis of the rotating image on the screen that splits the left and right scene images.
* @default 720
*
* @param Circle Image Y
* @desc The y axis of the rotating image on the screen that splits the left and right scene images.
* @default 320
*
* @param Circle Anchor X
* @desc The x anchor of the rotating image on the screen that splits the left and right scene images.
* @default 0.5
*
* @param Circle Anchor Y
* @desc The y anchor of the rotating image on the screen that splits the left and right scene images.
* @default 0.5
*
*/
(function(){
    var SOUL_MV = SOUL_MV || {};
    SOUL_MV.ChapterSelect = {};
    SOUL_MV.ChapterSelect.pluginCommand = Game_Interpreter.prototype.pluginCommand;
    SOUL_MV.ChapterSelect.gameSysteminitialize = Game_System.prototype.initialize;

    SOUL_MV.ChapterSelect.switchStart = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Switch Start'] || 1);
    SOUL_MV.ChapterSelect.drawButtonDistance = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Draw Button Distance'] || 90);
    SOUL_MV.ChapterSelect.confirmCommandX = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Confirm Command X'] || 308);
    SOUL_MV.ChapterSelect.confirmCommandY = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Confirm Command Y'] || 412);
    SOUL_MV.ChapterSelect.confirmCommandWidth = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Confirm Command Width'] || 240);
    SOUL_MV.ChapterSelect.confirmCommandColumns = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Confirm Command Columns'] || 2);  
    SOUL_MV.ChapterSelect.confirmCommandOpacity = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Confirm Command Opacity'] || 255);


    SOUL_MV.ChapterSelect.notAvailableImage = PluginManager.parameters('SOUL_MV Chapter Select')['Unavailable Chapter Image'] || 'cancel_confirm';

    SOUL_MV.ChapterSelect.commandName = PluginManager.parameters('SOUL_MV Chapter Select')['Command Name'] || 'Chapter Select';
    SOUL_MV.ChapterSelect.enterChapter = PluginManager.parameters('SOUL_MV Chapter Select')['Command OK Name'] || 'Enter';
    SOUL_MV.ChapterSelect.cancelSelection = PluginManager.parameters('SOUL_MV Chapter Select')['Command Cancel Name'] || 'Cancel';
    SOUL_MV.ChapterSelect.backSelection = PluginManager.parameters('SOUL_MV Chapter Select')['Command Back Name'] || 'Go Back';

    SOUL_MV.ChapterSelect.chapterMapTransfer = PluginManager.parameters('SOUL_MV Chapter Select')['Chapter Map Transfer'].split(/\s*,\s*/).filter(function(value) { return !!value; });
    SOUL_MV.ChapterSelect.chapterMapX = PluginManager.parameters('SOUL_MV Chapter Select')['Chapter Map X'].split(/\s*,\s*/).filter(function(value) { return !!value; });
    SOUL_MV.ChapterSelect.chapterMapY = PluginManager.parameters('SOUL_MV Chapter Select')['Chapter Map Y'].split(/\s*,\s*/).filter(function(value) { return !!value; });

    SOUL_MV.ChapterSelect.availableWindow = PluginManager.parameters('SOUL_MV Chapter Select')['Available Window'] || 'Do you wish to enter this chapter?';
    SOUL_MV.ChapterSelect.availableWindowX = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Available Window X'] || 0);
    SOUL_MV.ChapterSelect.availableWindowY = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Available Window Y'] || 0);
    SOUL_MV.ChapterSelect.availableWindowWidth = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Available Window Width'] || 700);
    SOUL_MV.ChapterSelect.availableWindowHeight = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Available Window Height'] || 70);    
    SOUL_MV.ChapterSelect.availableWindowOpacity = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Available Window Opacity'] || 255);


    SOUL_MV.ChapterSelect.notavailableWindow = PluginManager.parameters('SOUL_MV Chapter Select')['Not Available Window'] || "You're not allowed to access this chapter yet.";
    SOUL_MV.ChapterSelect.notavailableWindowX = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Not Available Window X'] || 0);
    SOUL_MV.ChapterSelect.notavailableWindowY = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Not Available Window Y'] || 0);
    SOUL_MV.ChapterSelect.notavailableWindowWidth = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Not Available Window Width'] || 700);
    SOUL_MV.ChapterSelect.notavailableWindowHeight = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Not Available Window Height'] || 70);    
    SOUL_MV.ChapterSelect.notavailableWindowOpacity = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Not Available Window Opacity'] || 255);

    SOUL_MV.ChapterSelect.chapterImageLogo = PluginManager.parameters('SOUL_MV Chapter Select')['Logo Image'] || 'Chapter Select Logo';
    SOUL_MV.ChapterSelect.logoImageX = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Logo Image X'] || 0);
    SOUL_MV.ChapterSelect.logoImageY = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Logo Image Y'] || 0);

    SOUL_MV.ChapterSelect.magicCircleImage = PluginManager.parameters('SOUL_MV Chapter Select')['Circle Image'] || 'Magic Circle';
    SOUL_MV.ChapterSelect.magicCircleImageX = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Circle Image X'] || 720);
    SOUL_MV.ChapterSelect.magicCircleImageY = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Circle Image Y'] || 320);
    SOUL_MV.ChapterSelect.magicCircleImageAX = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Circle Anchor X'] || 0.5);
    SOUL_MV.ChapterSelect.magicCircleImageAY = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Circle Anchor Y'] || 0.5);

    SOUL_MV.ChapterSelect.chapterBackground = PluginManager.parameters('SOUL_MV Chapter Select')['Scene Background'] || 'chapter ground';
    SOUL_MV.ChapterSelect.curvedImage = PluginManager.parameters('SOUL_MV Chapter Select')['Curved Image'] || 'Curve1';
    SOUL_MV.ChapterSelect.cursorImage = PluginManager.parameters('SOUL_MV Chapter Select')['Cursor Image'] || 'cursor';

    SOUL_MV.ChapterSelect.curvedImageX = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Curved Image X'] || 0);
    SOUL_MV.ChapterSelect.curvedImageY = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Curved Image Y'] || 0);

    SOUL_MV.ChapterSelect.cursorImageX = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Cursor Image X'] || 0);
    SOUL_MV.ChapterSelect.cursorImageY = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Cursor Image Y'] || 125);

    SOUL_MV.ChapterSelect.chapterNames = PluginManager.parameters('SOUL_MV Chapter Select')['Chapter Names'].split(/\s*,\s*/).filter(function(value) { return !!value; });
    SOUL_MV.ChapterSelect.commandX = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Command X'] || 30);
    SOUL_MV.ChapterSelect.commandY = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Command Y'] || 120);

    SOUL_MV.ChapterSelect.portraitX = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Portrait X'] || 280);
    SOUL_MV.ChapterSelect.portraitY = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Portrait Y'] || 0);

    SOUL_MV.ChapterSelect.commandWidth = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Command Width'] || 300);
    SOUL_MV.ChapterSelect.commandHeight = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Command Height'] || 300);
    SOUL_MV.ChapterSelect.commandOpacity = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Command Opacity'] || 0);

    SOUL_MV.ChapterSelect.checkedSaveFile = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Checked Save File'] || 1);
    SOUL_MV.ChapterSelect.chapterNumber = Number(PluginManager.parameters('SOUL_MV Chapter Select')['Chapters'] || 6);
    SOUL_MV.ChapterSelect.chapterVisible = PluginManager.parameters('SOUL_MV Chapter Select')['Command Visible'] === "true" ? true : false;
    SOUL_MV.ChapterSelect.useCommandImages = PluginManager.parameters('SOUL_MV Chapter Select')['Use Chapter Images'] === "true" ? true : false;
    SOUL_MV.ChapterSelect.animateCursor = PluginManager.parameters('SOUL_MV Chapter Select')['Animate Cursor'] === "true" ? true : false;
    SOUL_MV.ChapterSelect.rotateCircle = PluginManager.parameters('SOUL_MV Chapter Select')['Rotate Circle'] === "true" ? true : false;
    SOUL_MV.ChapterSelect.useConfirmWindow = PluginManager.parameters('SOUL_MV Chapter Select')['Use Confirm Window'] === "true" ? true : false;
    SOUL_MV.ChapterSelect.showinMenu = PluginManager.parameters('SOUL_MV Chapter Select')['Show in Menu'] === "true" ? true : false;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        SOUL_MV.ChapterSelect.pluginCommand.call(this, command, args);
        switch(command) {
            case 'chapter':
                if (args[0] === 'setSaveFile') {
                    $gameSystem._saveFile = args[1];
                }
                else if (args[0] === 'byPerspective') {
                    $gameSystem._byPerspective = true;
                    $gameSystem._continuedCharacters = false;
                }
                else if (args[0] === 'byContinuedCharacters') {
                    $gameSystem._byPerspective = false;
                    $gameSystem._continuedCharacters = true;
                } else if (args[0] === 'disableOnMenu') {
                    $gameSystem._enable = true;
                } else if (args[0] === 'enableOnMenu') {
                    $gameSystem._enable = false;
                }
                else {
                    alert("SOUL_MV Character Select Error! Your plugin command is not available!");
                }
                break;
            case 'chapter_select':
                SceneManager.push(SOUL_MV_SceneChapterSelect);
                break;
            case 'chapter_map_setup':
                $gameSystem._mapId = args[0];
                break;
        }
    };

    Game_System.prototype.initialize = function() {
        SOUL_MV.ChapterSelect.gameSysteminitialize.call(this);
        this._saveFile = SOUL_MV.ChapterSelect.checkedSaveFile;
        this._enable = true;
        this._byPerspective = false;
        this._continuedCharacters = false;
    }

    ImageManager.loadChapterSel = function(filename, hue) {
        return this.loadBitmap('img/chapter_select/', filename, hue, true);
    };

    function SOUL_MV_SceneChapterSelect() {
        this.initialize.apply(this, arguments);
    }

    SOUL_MV_SceneChapterSelect.prototype = Object.create(Scene_Base.prototype);
    SOUL_MV_SceneChapterSelect.prototype.constructor = SOUL_MV_SceneChapterSelect;

    SOUL_MV_SceneChapterSelect.prototype.initialize = function() {
        Scene_Base.prototype.initialize.call(this);
        this._phase = false;
    };

    SOUL_MV_SceneChapterSelect.prototype.create = function() {
        Scene_Base.prototype.create.call(this);
        this.createBackground(); // creates the background
        this.createRightPortrait(); //creates the portrait
        this.createCurveBackground(); // creates the curved background
        this.createChapterCommands(); // creates the commands
        this.createRotatingCircle(); // creates the magic circle
        this.createChapterSelectLogo(); //creates the logo
        if (SOUL_MV.ChapterSelect.useCommandImages)this.createChapterNumber(); // creates the chapter number
        if (SOUL_MV.ChapterSelect.useCommandImages)this.createCursor(); // creates the cursor
        this.createProgressAvailableWindow(); // creates the available window
        this.createProgressNotAvailableWindow(); //creates the not available window
        this.createWindowConfirmII();
        this.createProgressConfirmWindow(); //creates the progress confirm window
        this.createConfirmImages();
        preload();
    };

    SOUL_MV_SceneChapterSelect.prototype.createWindowConfirmII = function() {
        this._windowConfirm2 = new Window_ConfirmCommandII();
        if (SOUL_MV.ChapterSelect.useConfirmWindow) {
            this._windowConfirm2.x = SOUL_MV.ChapterSelect.confirmCommandX;
            this._windowConfirm2.y = SOUL_MV.ChapterSelect.confirmCommandX;        
        } else {
            this._windowConfirm2.x = Graphics.width * 2;
            this._windowConfirm2.y = Graphics.height * 2;            
        }        
        this._windowConfirm2.visible = false;
        this._windowConfirm2.close();
        this._windowConfirm2.setHandler('returnPhase',  this.returnPhase.bind(this));
        this._windowConfirm2.setHandler('cancel',  this.returnPhase.bind(this));
        this.addChild(this._windowConfirm2);
    }

    SOUL_MV_SceneChapterSelect.prototype.createConfirmImages = function() {
        this._confirmImage = new Sprite();
        this.addChild(this._confirmImage);
    }

    SOUL_MV_SceneChapterSelect.prototype.createProgressAvailableWindow = function() {
        this._windowProgressAvailable = new Window_ProgressAvailable();
        this._windowProgressAvailable.visible = false;
        this._windowProgressAvailable.x = SOUL_MV.ChapterSelect.availableWindowX;
        this._windowProgressAvailable.y = SOUL_MV.ChapterSelect.availableWindowY;
        this._windowProgressAvailable.opacity = SOUL_MV.ChapterSelect.availableWindowOpacity;
        this._windowProgressAvailable.close();
        this.addChild(this._windowProgressAvailable);    
    }

    SOUL_MV_SceneChapterSelect.prototype.createProgressConfirmWindow = function() {
        this._windowConfirmCommand = new Window_ConfirmCommand();
        if (SOUL_MV.ChapterSelect.useConfirmWindow) {
            this._windowConfirmCommand.x = SOUL_MV.ChapterSelect.confirmCommandX;
            this._windowConfirm2.x = SOUL_MV.ChapterSelect.confirmCommandX;
            this._windowConfirm2.y = SOUL_MV.ChapterSelect.confirmCommandX;
            this._windowConfirmCommand.y = SOUL_MV.ChapterSelect.confirmCommandY;            
        } else {
            this._windowConfirmCommand.x = Graphics.width * 2;
            this._windowConfirmCommand.y = Graphics.height * 2;
            this._windowConfirm2.x = Graphics.width * 2;
            this._windowConfirm2.y = Graphics.height * 2;            
        }
        this._windowConfirmCommand.width = SOUL_MV.ChapterSelect.confirmCommandWidth;
        this._windowConfirmCommand.opacity = SOUL_MV.ChapterSelect.confirmCommandOpacity;
        this._windowConfirmCommand.setHandler('enter',  this.commandEnter.bind(this));
        this._windowConfirmCommand.setHandler('cancel',  this.commandCancel.bind(this));
        this._windowConfirmCommand.visible = false;
        this._windowConfirmCommand.close();
        this.addChild(this._windowConfirmCommand);    
    }

    SOUL_MV_SceneChapterSelect.prototype.createProgressNotAvailableWindow = function() {
        this._windowProgressNotAvailable = new Window_ProgressNotAvailable();
        this._windowProgressNotAvailable.x = SOUL_MV.ChapterSelect.notavailableWindowX;
        this._windowProgressNotAvailable.y = SOUL_MV.ChapterSelect.notavailableWindowY;
        this._windowProgressNotAvailable.opacity = SOUL_MV.ChapterSelect.notavailableWindowOpacity;
        this._windowProgressNotAvailable.visible = false;
        this._windowProgressNotAvailable.close();
        this.addChild(this._windowProgressNotAvailable);    
    }

    SOUL_MV_SceneChapterSelect.prototype.commandEnter = function() {
        if ($gameSystem._byPerspective) {
            DataManager.setupNewGame();
            this._chapterCommands.close();
            this.fadeOutAll();
            var mapId = SOUL_MV.ChapterSelect.chapterMapTransfer[this._chapterCommands._index];
            var mapX = SOUL_MV.ChapterSelect.chapterMapX[this._chapterCommands._index];
            var mapY = SOUL_MV.ChapterSelect.chapterMapY[this._chapterCommands._index];
            $gamePlayer.reserveTransfer(mapId, Number(mapX), Number(mapY), 0, 0);
            $gameMap.autoplay();
            SceneManager.goto(Scene_Map);
        }
        else if ($gameSystem._continuedCharacters){
            this._chapterCommands.close();
            this.fadeOutAll();
            var mapId = SOUL_MV.ChapterSelect.chapterMapTransfer[this._chapterCommands._index];
            var mapX = SOUL_MV.ChapterSelect.chapterMapX[this._chapterCommands._index];
            var mapY = SOUL_MV.ChapterSelect.chapterMapY[this._chapterCommands._index];
            $gamePlayer.reserveTransfer(mapId, Number(mapX), Number(mapY), 0, 0);
            SceneManager.goto(Scene_Map);
            $gameMap.autoplay();
        } else {
            DataManager.setupNewGame();
            this._chapterCommands.close();
            this.fadeOutAll();
            SceneManager.goto(Scene_Map);
            $gameMap.autoplay();
        }       
    }

    SOUL_MV_SceneChapterSelect.prototype.commandCancel = function() {
        if (SOUL_MV.ChapterSelect.useConfirmWindow) {
            this._windowConfirmCommand.close();
            this._chapterCommands.activate();
            this._windowProgressAvailable.close();
        } else {
            this._confirmPhase = false;
            this._windowConfirmCommand.close();
            this._chapterCommands.activate();
            this._confirmImage.bitmap = null;
        }
    }



    SOUL_MV_SceneChapterSelect.prototype.createChapterCommands = function() {
        this._chapterCommands = new Window_ChapterCommand();
        this._chapterCommands.visible = SOUL_MV.ChapterSelect.chapterVisible;
        this._chapterCommands.width = SOUL_MV.ChapterSelect.commandWidth;
        this._chapterCommands.height = SOUL_MV.ChapterSelect.commandHeight;
        this._chapterCommands.opacity = SOUL_MV.ChapterSelect.commandOpacity;

        if (this._chapterCommands.visible) {
            this._chapterCommands.x = SOUL_MV.ChapterSelect.commandX;
            this._chapterCommands.y = SOUL_MV.ChapterSelect.commandY;
        } else {
            this._chapterCommands.x = Graphics.boxWidth;
            this._chapterCommands.y = Graphics.boxHeight;
        }

        for (var i = 1; i < SOUL_MV.ChapterSelect.chapterNumber+1; i++) {
            this._chapterCommands.setHandler('selectChapter',      this.commandSelectChapter.bind(this));
        }      
        
        this._chapterCommands.setHandler('cancel', this.popScene.bind(this));
        this.addChild(this._chapterCommands);
    }

    SOUL_MV_SceneChapterSelect.prototype.returnPhase = function() {
        this._confirmPhase2 = false;
        this._confirmImage.bitmap = null;
        this._windowConfirm2.close();
        this._windowProgressNotAvailable.close();
        this._chapterCommands.activate();
    }

    SOUL_MV_SceneChapterSelect.prototype.createCursor = function() {
        this._cursor = new Sprite();  
        this._cursor.bitmap = ImageManager.loadChapterSel(SOUL_MV.ChapterSelect.cursorImage);   
        this._cursor.x = SOUL_MV.ChapterSelect.cursorImageX;
        this._cursor.y = SOUL_MV.ChapterSelect.cursorImageY;
        this.addChild(this._cursor);
    }

    SOUL_MV_SceneChapterSelect.prototype.commandSelectChapter = function( ) {
        if (DataManager.isAnySavefileExists()) {
            this._data = JsonEx.parse(StorageManager.load($gameSystem._saveFile));
            if (this._data.switches.value(this._chapterCommands._index + SOUL_MV.ChapterSelect.switchStart)) {
                if (SOUL_MV.ChapterSelect.useConfirmWindow) {
                    this._windowProgressAvailable.open();
                    this._windowProgressNotAvailable.close();
                    this._windowProgressNotAvailable.visible = false;
                    this._windowProgressAvailable.visible = true;
                    this._windowConfirmCommand.open();

                    this._chapterCommands.deactivate();
                    this._windowConfirmCommand.visible = true;
                    this._windowConfirmCommand.activate(); 

                } else {
                    this._confirmPhase = true;
                    this._chapterPortrait.opacity = 255;
                    this._windowConfirmCommand.open();
                    this._windowConfirmCommand.activate();
                }
            } else {
                if (SOUL_MV.ChapterSelect.useConfirmWindow) {
                    this._windowProgressNotAvailable.open();
                    this._windowConfirm2.open();
                    this._windowConfirm2.visible = true;
                    this._windowProgressNotAvailable.visible = true;
                    this._windowConfirm2.activate();
                } else {
                    this._confirmPhase = false;
                    this._confirmPhase2 = true;
                    this._windowConfirm2.open();
                    this._windowConfirm2.visible = false;
                    this._windowProgressNotAvailable.open();
                    this._windowConfirm2.activate();
                }

            }
        } else {
                if (SOUL_MV.ChapterSelect.useConfirmWindow) {
                    this._windowProgressNotAvailable.open();
                    this._windowConfirm2.open();
                    this._windowProgressNotAvailable.visible = true;
                    this._chapterCommands.activate();
                } else {
                    this._windowProgressNotAvailable.open();
                    this._confirmPhase2 = true;
                    this._windowConfirm2.open();
                    this._windowConfirm2.visible = false;
                    this._windowConfirm2.activate(); 
                }
        }
    }

    SOUL_MV_SceneChapterSelect.prototype.createRightPortrait = function() {
        this._chapterPortrait = new Sprite();
        this._chapterPortrait.x = SOUL_MV.ChapterSelect.portraitX;
        this._chapterPortrait.y = SOUL_MV.ChapterSelect.portraitY;
        this._chapterPortrait.opacity = 0;
        this.addChild(this._chapterPortrait);
    }

    SOUL_MV_SceneChapterSelect.prototype.createChapterNumber = function() {
        for (var i = 1; i < SOUL_MV.ChapterSelect.chapterNumber+1; i++) {
            var line = SOUL_MV.ChapterSelect.drawButtonDistance;
            this._chapterImage = new Sprite_Button();
            this._chapterImage.bitmap = ImageManager.loadChapterSel('command_'+i);
            this._chapterImage.setClickHandler(this.commandSelectChapter.bind(this));
            this._chapterImage.x = 60;
            this._chapterImage.y = line * i;
            this.addChild(this._chapterImage);
        }
        
    }

    SOUL_MV_SceneChapterSelect.prototype.createChapterSelectLogo = function() {
        this._chapterSelectLogo = new Sprite();
        this._chapterSelectLogo.bitmap = ImageManager.loadChapterSel(SOUL_MV.ChapterSelect.chapterImageLogo);
        this._chapterSelectLogo.x = SOUL_MV.ChapterSelect.logoImageX;
        this._chapterSelectLogo.y = SOUL_MV.ChapterSelect.logoImageY;
        this.addChild(this._chapterSelectLogo);
    }

    SOUL_MV_SceneChapterSelect.prototype.createCurveBackground = function() {
        this._curveBackground = new Sprite();
        this._curveBackground.bitmap = ImageManager.loadChapterSel(SOUL_MV.ChapterSelect.curvedImage);
        this._curveBackground.x = SOUL_MV.ChapterSelect.curvedImageX;
        this._curveBackground.y = SOUL_MV.ChapterSelect.curvedImageY;
        this.addChild(this._curveBackground);
    }

    SOUL_MV_SceneChapterSelect.prototype.createRotatingCircle = function() {
        this._rotatingCircle = new Sprite();
        this._rotatingCircle.bitmap = ImageManager.loadChapterSel(SOUL_MV.ChapterSelect.magicCircleImage);
        this._rotatingCircle.x = SOUL_MV.ChapterSelect.magicCircleImageX;
        this._rotatingCircle.y = SOUL_MV.ChapterSelect.magicCircleImageY;
        this._rotatingCircle.anchor.x = SOUL_MV.ChapterSelect.magicCircleImageAX;
        this._rotatingCircle.anchor.y = SOUL_MV.ChapterSelect.magicCircleImageAY;
        this.addChild(this._rotatingCircle);
    }

    SOUL_MV_SceneChapterSelect.prototype.start = function() {
        Scene_Base.prototype.start.call(this);
        this.startFadeIn(this.slowFadeSpeed(), false);
    };

    SOUL_MV_SceneChapterSelect.prototype.update = function() {
        Scene_Base.prototype.update.call(this);
        
        if (SOUL_MV.ChapterSelect.useCommandImages)this.updateCursor();
        if (this._confirmPhase) {
            this._confirmImage.bitmap = ImageManager.loadChapterSel('confirm_'+Number(this._windowConfirmCommand._index+1));
        } else if(this._confirmPhase2) {
            this._confirmImage.bitmap = ImageManager.loadChapterSel(SOUL_MV.ChapterSelect.notAvailableImage);
        }else {
            this._confirmImage.bitmap = null;
        }
        if(SOUL_MV.ChapterSelect.rotateCircle)this._rotatingCircle.rotation += 0.003;
        this.refrainPortrait();
        this.checkPhase();
        this.checkPortrait();


    };

    SOUL_MV_SceneChapterSelect.prototype.updateCursor = function() {
        var date = new Date().getTime() / 150;
        if(SOUL_MV.ChapterSelect.animateCursor) {
            this._cursor.x = 20 + 4 + Math.cos(parseFloat(date)) * 5;
        } else {
            this._cursor.x = 20;
        }
        this._cursor.y = 127 + this._chapterCommands._index * 90;
    }

    SOUL_MV_SceneChapterSelect.prototype.checkPortrait = function() {
        this._chapterPortrait.bitmap = ImageManager.loadChapterSel('chapter_portrait_'+String(this._chapterCommands._index+1));
    }


    SOUL_MV_SceneChapterSelect.prototype.refrainPortrait = function() {
        if(this._chapterCommands.active) {
            if(this._chapterPortrait.opacity < 255) {
                if (this._chapterPortrait >= 255) {
                    this._chapterPortrait.opacity = 255;
                } else {
                    this._chapterPortrait.opacity += 10;
                }
            }     
        } else {
            this._chapterPortrait.opacity = 255;
        }
    }

    SOUL_MV_SceneChapterSelect.prototype.checkPhase = function() {
        if (Input.isTriggered('up') || Input.isTriggered('down') || Input.isTriggered('left') || Input.isTriggered('right')) {
            this._phase = false;
            if(this._chapterCommands.active)this._chapterPortrait.opacity = 0;
        }
    }

    SOUL_MV_SceneChapterSelect.prototype.stop = function() {
        Scene_Base.prototype.stop.call(this);
        this.fadeOutAll();
    };

    SOUL_MV_SceneChapterSelect.prototype.terminate = function() {
        Scene_Base.prototype.terminate.call(this);
        $gameMap.autoplay();
    };

    SOUL_MV_SceneChapterSelect.prototype.createBackground = function() {
        this._backSprite = new Sprite();
        this._backSprite.bitmap = ImageManager.loadChapterSel(SOUL_MV.ChapterSelect.chapterBackground);
        this.addChild(this._backSprite);
    };


    function Window_ChapterCommand() {
        this.initialize.apply(this, arguments);
    }

    Window_ChapterCommand.prototype = Object.create(Window_Command.prototype);
    Window_ChapterCommand.prototype.constructor = Window_ChapterCommand;

    Window_ChapterCommand.prototype.initialize = function(x, y) {
        Window_Command.prototype.initialize.call(this, x, y);
        this.selectLast();
    };

    Window_ChapterCommand._lastCommandSymbol = null;

    Window_ChapterCommand.initCommandPosition = function() {
        this._lastCommandSymbol = null;
    };

    Window_ChapterCommand.prototype.windowWidth = function() {
        return 240;
    };

    Window_ChapterCommand.prototype.numVisibleRows = function() {
        return this.maxItems();
    };

    Window_ChapterCommand.prototype.makeCommandList = function() {
        this.addMainCommands();
    };

    Window_ChapterCommand.prototype.addMainCommands = function() {
        for (var i = 1; i < SOUL_MV.ChapterSelect.chapterNumber+1; i++) {
            this.addCommand(SOUL_MV.ChapterSelect.chapterNames[i-1], 'selectChapter', true);
        }
    };


    Window_ChapterCommand.prototype.processOk = function() {
        Window_ChapterCommand._lastCommandSymbol = this.currentSymbol();
        Window_Command.prototype.processOk.call(this);
    };

    Window_ChapterCommand.prototype.selectLast = function() {
        this.selectSymbol(Window_ChapterCommand._lastCommandSymbol);
    };


    Window_ChapterCommand.prototype.processCursorMove = function() {
        if (this.isCursorMovable()) {
            var lastIndex = this.index();
            if (Input.isRepeated('down')) {
                this.cursorDown(Input.isTriggered('down'));
            }
            if (Input.isRepeated('up')) {
                this.cursorUp(Input.isTriggered('up'));
            }
            if (Input.isRepeated('right')) {
                this.cursorDown(Input.isTriggered('down'));
            }
            if (Input.isRepeated('left')) {
                this.cursorUp(Input.isTriggered('up'));
            }
            if (!this.isHandled('pagedown') && Input.isTriggered('pagedown')) {
                this.cursorPagedown();
            }
            if (!this.isHandled('pageup') && Input.isTriggered('pageup')) {
                this.cursorPageup();
            }
            if (this.index() !== lastIndex) {
                SoundManager.playCursor();
            }
        }
    };


    function Window_ProgressNotAvailable() {
        this.initialize.apply(this, arguments);
    }

    Window_ProgressNotAvailable.prototype = Object.create(Window_Base.prototype);
    Window_ProgressNotAvailable.prototype.constructor = Window_ProgressNotAvailable;

    Window_ProgressNotAvailable.prototype.initialize = function(x, y) {
        var width = this.windowWidth();
        var height = this.windowHeight();
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
    };

    Window_ProgressNotAvailable.prototype.windowWidth = function() {
        return SOUL_MV.ChapterSelect.notavailableWindowWidth;
    };

    Window_ProgressNotAvailable.prototype.windowHeight = function() {
        return SOUL_MV.ChapterSelect.notavailableWindowHeight;
    };

    Window_ProgressNotAvailable.prototype.refresh = function() {
        var x = this.textPadding();
        var color1 = this.hpGaugeColor1();
        var color2 = this.hpGaugeColor2();    
        var width = this.contents.width - this.textPadding() * 2;
        this.contents.clear();
        this.drawTextEx(SOUL_MV.ChapterSelect.notavailableWindow, 0, 0);
        
    };

    Window_ProgressNotAvailable.prototype.open = function() {
        this.refresh();
        Window_Base.prototype.open.call(this);
    };





    function Window_ProgressAvailable() {
        this.initialize.apply(this, arguments);
    }

    Window_ProgressAvailable.prototype = Object.create(Window_Base.prototype);
    Window_ProgressAvailable.prototype.constructor = Window_ProgressAvailable;

    Window_ProgressAvailable.prototype.initialize = function(x, y) {
        var width = this.windowWidth();
        var height = this.windowHeight();
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
    };

    Window_ProgressAvailable.prototype.windowWidth = function() {
        return SOUL_MV.ChapterSelect.availableWindowWidth;
    };

    Window_ProgressAvailable.prototype.windowHeight = function() {
        return SOUL_MV.ChapterSelect.availableWindowHeight;
    };

    Window_ProgressAvailable.prototype.refresh = function() {
        var x = this.textPadding();
        var color1 = this.hpGaugeColor1();
        var color2 = this.hpGaugeColor2();    
        var width = this.contents.width - this.textPadding() * 2;
        this.contents.clear();
        this.drawTextEx(SOUL_MV.ChapterSelect.availableWindow, 0, 0);
        
    };

    Window_ProgressAvailable.prototype.open = function() {
        this.refresh();
        Window_Base.prototype.open.call(this);
    };


    function Window_ConfirmCommand() {
        this.initialize.apply(this, arguments);
    }

    Window_ConfirmCommand.prototype = Object.create(Window_Command.prototype);
    Window_ConfirmCommand.prototype.constructor = Window_ConfirmCommand;

    Window_ConfirmCommand.prototype.initialize = function(x, y) {
        Window_Command.prototype.initialize.call(this, x, y);
        this.selectLast();
    };

    Window_ConfirmCommand._lastCommandSymbol = null;

    Window_ConfirmCommand.initCommandPosition = function() {
        this._lastCommandSymbol = null;
    };

    Window_ConfirmCommand.prototype.windowWidth = function() {
        return 240;
    };

    Window_ConfirmCommand.prototype.numVisibleRows = function() {
        return this.maxItems();
    };

    Window_ConfirmCommand.prototype.makeCommandList = function() {
        this.addMainCommands();
    };

    Window_ConfirmCommand.prototype.addMainCommands = function() {
        this.addCommand(SOUL_MV.ChapterSelect.enterChapter, 'enter', true);
        this.addCommand(SOUL_MV.ChapterSelect.cancelSelection, 'cancel', true);
    };


    Window_ConfirmCommand.prototype.processOk = function() {
        Window_ConfirmCommand._lastCommandSymbol = this.currentSymbol();
        Window_Command.prototype.processOk.call(this);
    };

    Window_ConfirmCommand.prototype.selectLast = function() {
        this.selectSymbol(Window_ConfirmCommand._lastCommandSymbol);
    };


    function Window_ConfirmCommandII() {
        this.initialize.apply(this, arguments);
    }

    Window_ConfirmCommandII.prototype = Object.create(Window_Command.prototype);
    Window_ConfirmCommandII.prototype.constructor = Window_ConfirmCommandII;

    Window_ConfirmCommandII.prototype.initialize = function(x, y) {
        Window_Command.prototype.initialize.call(this, x, y);
        this.selectLast();
    };

    Window_ConfirmCommandII._lastCommandSymbol = null;

    Window_ConfirmCommandII.initCommandPosition = function() {
        this._lastCommandSymbol = null;
    };

    Window_ConfirmCommandII.prototype.windowWidth = function() {
        return 240;
    };

    Window_ConfirmCommandII.prototype.numVisibleRows = function() {
        return this.maxItems();
    };

    Window_ConfirmCommandII.prototype.makeCommandList = function() {
        this.addMainCommands();
    };

    Window_ConfirmCommandII.prototype.addMainCommands = function() {
        this.addCommand(SOUL_MV.ChapterSelect.backSelection, 'returnPhase', true);
    };


    Window_ConfirmCommandII.prototype.processOk = function() {
        Window_ConfirmCommandII._lastCommandSymbol = this.currentSymbol();
        Window_Command.prototype.processOk.call(this);
    };

    Window_ConfirmCommandII.prototype.selectLast = function() {
        this.selectSymbol(Window_ConfirmCommandII._lastCommandSymbol);
    };

    Window_MenuCommand.prototype.addOriginalCommands = function() {
        if (SOUL_MV.ChapterSelect.showinMenu) {
            this.addCommand(SOUL_MV.ChapterSelect.commandName, 'chapterSelect', $gameSystem._enable);
        }
    };
    SOUL_MV.ChapterSelect.createCommandWindow = Scene_Menu.prototype.createCommandWindow;
    Scene_Menu.prototype.createCommandWindow = function() {
        SOUL_MV.ChapterSelect.createCommandWindow.call(this);
        if (SOUL_MV.ChapterSelect.showinMenu) {
            this._commandWindow.setHandler('chapterSelect',    this.callSelect.bind(this));
        }
        this.addWindow(this._commandWindow);
    };

    Scene_Menu.prototype.callSelect = function() {
        SceneManager.push(SOUL_MV_SceneChapterSelect);
    } 

    function preload(index) {
        ImageManager.loadChapterSel('confirm_1');
        ImageManager.loadChapterSel('confirm_2');
        ImageManager.loadChapterSel(SOUL_MV.ChapterSelect.notAvailableImage);
    }

})();

