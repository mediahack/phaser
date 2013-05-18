/// <reference path="../../Phaser/Game.ts" />
(function () {
    var myGame = new Phaser.Game(this, 'game', 800, 600, null, create, update, render);
    var starfield;
    var xx = [];
    var yy = [];
    var zz = [];
    var xxx = 0;
    var yyy = 0;
    function create() {
        //  the width of the starfield
        var star_w = 12000;
        for(var i = 0; i < 800; i++) {
            xx[i] = Math.floor(Math.random() * star_w * 2) - star_w;
            yy[i] = Math.floor(Math.random() * star_w * 2) - star_w;
            zz[i] = Math.floor(Math.random() * 160) + 1;
        }
        starfield = myGame.createDynamicTexture(800, 600);
    }
    function update() {
        starfield.clear();
        for(var i = 0; i < 800; i++) {
            if(zz[i] == 1) {
                zz[i] = 100;
            }
            xxx = (xx[i]) / (zz[i]);
            yyy = (yy[i]) / (zz[i])--;
            var x = xxx + myGame.input.x;
            var y = yyy + myGame.input.y;
            var c = '#ffffff';
            if(zz[i] > 80) {
                c = '#666666';
            } else if(zz[i] > 60) {
                c = '#888888';
            } else if(zz[i] > 40) {
                c = '#aaaaaa';
            }
            //else if (zz[i] > 20) c = '#ffffff';
            starfield.setPixel(x, y, c);
        }
    }
    function render() {
        starfield.render();
    }
})();
