Game.Preloader = function (game) {
    this.preloadBar = null;
};
var blackURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY6AzYGAAAAByAAHo7e7HAAAAAElFTkSuQmCC';

Game.Preloader.prototype = {
    preload: function () {


        // Tiled exported tilemap
        this.load.tilemap('tavernTakeTwo', 'assets/tavernTakeTwo.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap('outside', 'assets/outsideTakeTwo.json', null, Phaser.Tilemap.TILED_JSON);

        this.load.image('tiles', 'assets/tilesetHouse.png');
        this.load.image('woodland', 'assets/woodland.png')

        this.load.atlas('player', 'assets/Rifle-Man.png', './assets/Rifle-Man.json');
        this.load.atlas('enemy', 'assets/enemyMove.png', './assets/enemyMove.json');
        this.load.atlas('enemyTest', 'assets/enemy.png', 'assets/enemy.json');
        

         this.load.image('button', 'assets/button.png');
         this.load.image('titlescreen', 'assets/titlescreen.png');
         this.load.image('bullet', 'assets/bullet.png');
         this.load.image('black', blackURI);
         this.load.image('inventory', 'assets/inventory.png');
         this.load.image('gamepad', 'assets/gamepad.png');
         
    },

    create: function () {
        this.state.start('MainMenu');
    }
}
