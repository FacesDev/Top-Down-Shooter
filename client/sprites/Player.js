var Player = function() {};

Player.prototype = {

    create: function(State){

        var player = State.game.add.sprite( 100, 240, 'player');
        player.MOVE_SPEED = 500;
        player.anchor.set(0.5);
        player.scale.set(0.2);

        player.animations.add('pistol-idle', Phaser.Animation.generateFrameNames('handgun/idle/', 1, 20, '.png', 2), 20, true, false);
        player.animations.add('pistol-move', Phaser.Animation.generateFrameNames('handgun/move/', 1, 20, '.png', 2), 20, true, false);
        player.animations.add('pistol-shoot', Phaser.Animation.generateFrameNames('handgun/idle/', 1, 3, '.png', 2), 3, true, false);
        
        player.animations.add('flashlight-idle', Phaser.Animation.generateFrameNames('flashlight/idle/', 1, 20, '.png', 2), 20, true, false);
        player.animations.add('flashlight-move', Phaser.Animation.generateFrameNames('flashlight/move/', 1, 20, '.png', 2), 20, true, false);
        player.animations.add('flashlight-attack', Phaser.Animation.generateFrameNames('flashlight/meleeattack/', 1, 15, '.png', 2), 15, true, false);
        
        player.animations.add('rifle-idle', Phaser.Animation.generateFrameNames('rifle/idle/', 1, 20, '.png', 2), 20, true, false);
        player.animations.add('rifle-move', Phaser.Animation.generateFrameNames('rifle/move/', 1, 20, '.png', 2), 20, true, false);
        player.animations.add('rifle-shoot', Phaser.Animation.generateFrameNames('rifle/shoot/', 1, 3, '.png', 2), 3, true, false);
        
        player.animations.add('shotgun-idle', Phaser.Animation.generateFrameNames('shotgun/idle/', 1, 20, '.png', 2), 20, true, false);
        player.animations.add('shotgun-move', Phaser.Animation.generateFrameNames('shotgun/move/', 1, 20, '.png', 2), 20, true, false);
        player.animations.add('shotgun-shoot', Phaser.Animation.generateFrameNames('shotgun/shoot/', 1, 3, '.png', 2), 3, true, false);

        player.play('pistol-idle');
        State.game.physics.arcade.enable(player);
        player.body.setSize(100, 150, 100, 50);
        State.game.camera.follow(player);
        player.body.collideWorldBounds = true;
        player.playerLevel = gameStatHandler.prototype.playerLevel;
        player.playerXP = gameStatHandler.prototype.playerXP;
        player.playerXPStart = player.playerXP;
        player.shootTime = 0;
        player.currency = gameStatHandler.prototype.currency;
        player.currencyStart = player.currency;
        player.maxHealth = 100;
        player.health = 100 + (10 * player.playerLevel) + (gameStatHandler.prototype.healthPoints * 50);
    
        State.player = player;
        
        //make dot notation for each gun type
        State.player.gun1 = Pistol.prototype;
        State.player.gun1bullets = State.player.gun1.create(State);
        State.player.gun2 = Rocket.prototype;
        State.player.gun2bullets = State.player.gun2.create(State);
        State.player.gun3 = Rifle.prototype;
        State.player.gun3bullets = State.player.gun3.create(State);
        if(gameStatHandler.prototype.laser){
            State.player.gun4 = Laser.prototype;
            State.player.gun4bullets = State.player.gun4.create(State);
        }
        else{
            State.player.gun4 = Flash.prototype;
            State.player.gun4bullets = State.player.gun4.create(State);
        }


        State.player.gun = State.player.gun1;
        State.player.bullets = State.player.gun1bullets;

    },

    update: function(State){

        behaviorsObj.prototype.bodyCollide(State, State.player);
        behaviorsObj.prototype.bulletCollide(State, State.player.bullets);
        behaviorsObj.prototype.bulletOverlap(State, State.player.bullets, [State.waveEnemies]);
        behaviorsObj.prototype.playerInput(State);
        statHandler(State);

    },

    updateHouse: function(State){
        
        behaviorsObj.prototype.bodyCollide(State, State.player);
        behaviorsObj.prototype.bulletCollide(State, State.player.bullets);
        behaviorsObj.prototype.playerInput(State);
        updateUpgrades(State);

    }

};




