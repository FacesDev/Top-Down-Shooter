Game.MainMenu = function(game){

    
};
var titlescreen;

Game.MainMenu.prototype = {
    create:function(game){
        this.createButton(game,"Play",game.world.centerX,game.world.centerY +32, 300, 100, function(){
            this.state.start('Level1');
        });
        this.createButton(game,"Outside",game.world.centerX,game.world.centerY +110, 300, 100, function(){
             this.state.start('Outside');
        });
        this.createButton(game,"About",game.world.centerX,game.world.centerY +192, 300, 100, function(){
            console.log("About HERE");
        });
        titlescreen = game.add.sprite(game.world.centerX,game.world.centerY - 192, 'titlescreen');
    
        titlescreen.anchor.setTo(0.5,0.5);
    },
    update:function(game){

    },
    createButton:function(game,string,x,y,width,height,callback){
        var button1 = game.add.button(x,y,'button',callback,this,2,1,0);

        button1.anchor.setTo(0.5,0.5);
        button1.width = width;
        button1.height = height;

        var text = game.add.text(button1.x,button1.y, string, {font:"14px Arial", fill:"#fff", align:"center"});

        text.anchor.setTo(0.5,0.5);

    }

}