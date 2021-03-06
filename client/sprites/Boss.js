function Boss() { }

Boss.prototype = {

    create: function (State) {
        
        var spawnPoint = State.map.bossSpawn;
        var boss = State.waveEnemies.create(spawnPoint.x, spawnPoint.y, 'helio');
        State.boss = boss;
        boss.MOVE_SPEED = State.player.MOVE_SPEED - 100;
        boss.anchor.set(0.5);
        boss.scale.set(1);
        boss.animations.add('move', Phaser.Animation.generateFrameNames('helio-', 1, 1, '.png', 2), 1, true, false);
        boss.animations.add('shoot', Phaser.Animation.generateFrameNames('helio-', 1, 8, '.png', 2), 1, true, false);
        boss.animations._anims.shoot.speed = 20;
        boss.play('move');
        boss.maxHealth = 100 * (State.wave / 5);
        boss.health = boss.maxHealth;
        State.boss.health = boss.health;
        State.boss.maxHealth = boss.maxHealth;
        State.boss.alpha = 0;
        game.physics.arcade.enable(boss);
        boss.body.setSize(200, 300, 100, 50);
        boss.body.collideWorldBounds = true;
        boss.shootTime = 0;
        boss.hitPoints = 5 * (State.wave / 5);
        bossSpawn.play();
        //behaviorsObj.prototype.findPathTo(State, 87, 6, boss.x, boss.y, boss)
        boss.rotation = State.game.physics.arcade.angleToXY(boss, State.player.x, State.player.y);

    
        if (State.wave % 35 == 0) {
            boss.gun = Laser.prototype;
            boss.bullets = boss.gun.create(State, 0x800080);
        }
        else if (State.wave % 30 == 0) {
            boss.gun = Laser.prototype;
            boss.bullets = boss.gun.create(State, 0x800080);
        }
        else if (State.wave % 25 == 0) {
            boss.gun = Sniper.prototype;
            boss.bullets = boss.gun.create(State, 0x800080);
        }
        else if (State.wave % 20 == 0) {
            boss.gun = Rifle.prototype;
            boss.bullets = boss.gun.create(State, 0x800080);
        }
        else if (State.wave % 15 == 0) {
            boss.gun = Shotgun.prototype;
            boss.bullets = boss.gun.create(State, 0x800080);
        }
        else if (State.wave % 10 == 0) {
            boss.gun = Aoe.prototype;
            boss.bullets = boss.gun.create(State, 0x800080);
        }
        else if (State.wave % 5 == 0) {
            boss.gun = Pistol.prototype;
            boss.bullets = boss.gun.create(State, 0x800080);
        }
        State.bossAlive = true;
    }

};