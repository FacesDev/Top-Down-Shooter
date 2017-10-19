function Ui () {}

Ui.prototype = {

    create: function(State){

State.hud = State.game.add.sprite(0,0, 'hero-ui');
State.hud.fixedToCamera = true;

State.hud = State.game.add.sprite(0,0, 'hero-ui');
State.hud.fixedToCamera = true;

State.weaponHud = State.game.add.sprite(State.game.camera.width / 2,630, 'weapon-ui');
console.log("HERE", State.game.world.centerX);
State.weaponHud.fixedToCamera = true;
State.weaponHud.anchor.setTo(.5,0);

State.bit = State.game.add.sprite(500,0, 'currency-icon');
State.bit.fixedToCamera = true;
State.bit.scale.setTo(0.11);

State.selectedPistol = State.game.add.sprite(439,632, 'selected-ui');
State.selectedPistol.fixedToCamera = true;
State.selectedPistol.visible = true;

State.selectedShotgun = State.game.add.sprite(502,632, 'selected-ui');
State.selectedShotgun.fixedToCamera = true;
State.selectedShotgun.visible = false;

State.selectedRifle = State.game.add.sprite(630,632, 'selected-ui');
State.selectedRifle.fixedToCamera = true;
State.selectedRifle.visible = false;

State.selectedLaser = State.game.add.sprite(568,632, 'selected-ui');
State.selectedLaser.fixedToCamera = true;
State.selectedLaser.visible = false;
    }
};