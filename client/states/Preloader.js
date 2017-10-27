

Preloader = function () {
    Preloader.preloadBar = null;
};

Preloader.prototype.preload = function () {
    var blackURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY6AzYGAAAAByAAHo7e7HAAAAAElFTkSuQmCC';

    this.load.tilemap('outside', './client/assets/maps/outside-beta.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('large-map', './client/assets/maps/large-map.png');

    this.load.tilemap('inside', './client/assets/maps/inside.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('inside-tileset', './client/assets/maps/outside-tileset.png');

    this.load.atlasJSONHash(
        'player',
        './client/assets/animations/player.png',
        './client/assets/animations/player.json'
    );

    this.load.atlasJSONHash(
        'npc',
        './client/assets/sprites/zombieSS.png',
        './client/assets/sprites/zombieSS.json'
    );

    this.load.atlasJSONHash(
        'tower',
        './client/assets/sprites/towerSS.png',
        './client/assets/sprites/towerSS.json'
    );

    this.load.atlasJSONHash(
        'helio',
        './client/assets/sprites/helioSS.png',
        './client/assets/sprites/helioSS.json'
    );

    this.load.atlas('merc', './client/assets/animations/player-rifle.png', './client/assets/animations/player-rifle.json');
    this.load.atlas('flashlight-enemy', './client/assets/sprites/flashlight-enemy.png', './client/assets/sprites/flashlight-enemy.json');
    this.load.atlas('shotgun-enemy', './client/assets/sprites/shotgun-enemy.png', './client/assets/sprites/shotgun-enemy.json');



    this.load.image('button', './client/assets/sprites/button.png');
    this.load.image('menu-image', './client/assets/sprites/menu-image.png');
    this.load.image('menu-bg', './client/assets/ui/menu-bg-new.jpg');
    this.load.image('bullet', './client/assets/sprites/bullet.png');
    this.load.image('fog-of-war', blackURI);

    this.load.audio('pistol', './client/assets/audio/pistol.mp3');
    this.load.audio('rifle', './client/assets/audio/rifle.mp3');
    this.load.audio('rifle-echo', './client/assets/audio/rifle-short.mp3');
    this.load.audio('shotgun', './client/assets/audio/shotgun.mp3');
    this.load.audio('laser', './client/assets/audio/laser.mp3');
    this.load.audio('boss-spawn', './client/assets/audio/bossSpawn.mp3');


    this.load.image('hero-ui', './client/assets/ui/hud.png');
    this.load.image('hero-ui-xp-tic', './client/assets/ui/xp-ui.png');
    this.load.image('hero-ui-health-tic', './client/assets/ui/health-ui.png');

    this.load.image('level-ui', './client/assets/ui/level-ui.png');

    this.load.image('weapon-ui', './client/assets/ui/weaponHud.png');
    this.load.image('selected-ui', './client/assets/ui/selected.png');

    this.load.image('boss-ui', './client/assets/ui/boss.png');
    this.load.image('boss-health-bar', './client/assets/ui/boss-health-ui.png');
    this.load.image('boss-health-tic', './client/assets/ui/boss-ui-health.png');

    this.load.image('wave-ui', './client/assets/ui/wave-ui.png');

    this.load.image('merc-ui', './client/assets/ui/merc-ui.png');
    this.load.image('merc-ui-red', './client/assets/ui/merc-ui-red.png');
    this.load.image('merc-ui-green', './client/assets/ui/merc-ui-green.png');

    this.load.image('currency-icon', './client/assets/ui/btc.png');

    this.load.image('store', './client/assets/ui/store.png');
    this.load.image('work-bench', './client/assets/sprites/workBench.png');

    game.load.audio('dangerous', './client/assets/audio/music.mp3');

    this.load.image('boss-slide', './client/assets/ui/bossSlide.png');
    this.load.image('outside-ui-slide', './client/assets/ui/outsideUi.png');
    this.load.image('inside-ui-slide', './client/assets/ui/insideUi.png');
    this.load.image('controls-slide', './client/assets/ui/controls.png');

    this.load.image('mountains', './client/assets/animations/mountains.png');

    this.load.image('stars', './client/assets/animations/stars.jpg');
    this.load.image('ship-1', './client/assets/animations/ship1.png');
    this.load.image('ship-2', './client/assets/animations/ship2.png');
    this.load.image('ship-3', './client/assets/animations/ship3.png');
    this.load.image('planet-1', './client/assets/animations/planet1.png');
    this.load.image('planet-2', './client/assets/animations/planet2.png');
    this.load.image('planet-3', './client/assets/animations/planet3.png');
    this.load.image('hero-ship', './client/assets/animations/heroShip.png');
    this.load.image('big-ship', './client/assets/animations/bigShip.png');

    this.load.image('smoke', './client/assets/animations/smoke-puff.png');

    this.load.image('chris', './client/assets/animations/chris.jpg');
    this.load.image('austin', './client/assets/animations/austin.jpg');
    this.load.image('phaser', './client/assets/animations/phaser.png');
    
    this.load.image('beam', './client/assets/animations/beam.png');

    this.load.image('troop1', './client/assets/animations/troop1.png');
    this.load.image('troop2', './client/assets/animations/troop2.png');
    this.load.image('troop3', './client/assets/animations/troop3.png');
    this.load.image('troop4', './client/assets/animations/troop4.png');

    this.load.atlasJSONHash(
        'rocket',
        './client/assets/animations/rocket.png',
        './client/assets/animations/rocket.json'
    );

    let rocket = game.add.sprite( game.camera.width / 2, game.camera.height / 2, 'rocket');
    rocket.scale.set(.5);
    rocket.animations.add('rocket-shoot', Phaser.Animation.generateFrameNames('rocket', 1, 13, '.png', 2), 13, true, false);
    rocket.play('rocket-shoot');
    
};

Preloader.prototype.create = function () {
    laserAudio = game.add.audio('laser');
    rifleAudio = game.add.audio('rifle-echo');
    pistolAudio = game.add.audio('pistol');
    shotgunAudio = game.add.audio('shotgun');
    bossSpawn = game.add.audio('boss-spawn');
    music = game.add.audio('dangerous');
    music.loop = true;
    music.volume = .5;
    music.play();
    game.state.start('Credits');
};
