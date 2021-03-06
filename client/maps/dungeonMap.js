var dungeonMap = function (){};

dungeonMap.prototype = {

    create: function(State){

        State.map = State.game.add.tilemap("dungeon");
        State.map.addTilesetImage('dungeon-tileset', 'dungeon-tileset');

        let layer = State.map.createLayer('base');
        layer.resizeWorld();
        let collisionLayer = State.map.createLayer('collision');
        State.map.collisionLayer = collisionLayer;
        collisionLayer.visible = false;
        State.map.setCollisionByExclusion([], true, State.map.collisionLayer);
        collisionLayer.resizeWorld();

        State.map.exit = State.map.objects.meta.find(o => o.name == 'exit');
        State.map.exitRect = new Phaser.Rectangle(State.map.exit.x, State.map.exit.y, State.map.exit.width, State.map.exit.height);

    },

    layForeground: function(State){
        State.map.createLayer('Foreground');

    }

};