/**
 * Created by Administrator on 13-12-18.
 */

var planeSprite = cc.Sprite.extend({
    Hp:4,
    speed:100,
    attmode:1,
    count:3,
    Vr:60*Math.PI/180,
    speedStep:7,
    havegift:false,
    ctor:function(s_img){
        this._super();
        this.initWithFile(s_img);
        this.setAnchorPoint(cc.p(0,0));
        this.setPosition(cc.p(100,100));
        this.scheduleUpdate();

        this.schedule(this.shoot,5/9);
    },

    update:function(dt){
        if (sys.platform == 'browser') {
            var winSize = cc.Director.getInstance().getWinSize();
            var pos = this.getPosition();
            if ((MW.KEYS[cc.KEY.w] || MW.KEYS[cc.KEY.up]) && pos.y <= winSize.height) {
                pos.y += dt * this.speed;
            }
            if ((MW.KEYS[cc.KEY.s] || MW.KEYS[cc.KEY.down]) && pos.y >= 0) {
                pos.y -= dt * this.speed;
            }
            if ((MW.KEYS[cc.KEY.a] || MW.KEYS[cc.KEY.left]) && pos.x >= 0) {
                pos.x -= dt * this.speed;
            }
            if ((MW.KEYS[cc.KEY.d] || MW.KEYS[cc.KEY.right]) && pos.x <= winSize.width) {
                pos.x += dt * this.speed;
            }
            this.setPosition(pos);
        }

        if(MW.LIFE<=0){

            this.destory();

        }
    },

    shoot:function(dt){
        //this.attmode=2; //测试子弹轨道
        var pos = this.getPosition();
        var pos1 = {x:pos.x-4,y:pos.y};
        if(this.attmode==1){
            var bv = {x:0,y:7}
            var bullet = new BulletSprite(bv,pos1,1,"plane");
            MW.CONTAINER.PLAYER_BULLETS.push(bullet);
        }
        if(this.attmode==2){
            for(var i=0;i<this.count;i++){
                var vx = Math.cos(this.Vr)*this.speedStep;
                var vy = Math.sin(this.Vr)*this.speedStep;
                var bv = {x:vx,y:vy};
                var bullet = new BulletSprite(bv,pos1,1,"plane");
                MW.CONTAINER.PLAYER_BULLETS.push(bullet);

                this.Vr+=30*Math.PI/180;
                if(this.Vr>=130*Math.PI/180){
                    this.Vr=60*Math.PI/180;
                }
            }

        }
        if(this.havegift==true){



        }
    },

    collideRect:function(p){
        var a = this.getContentSize();
        return cc.rect(p.x , p.y, a.width, a.height);
    },
    destory:function(){
        this.setVisible(false);
        var pos = this.getPosition();
        var explosion = new ExplosionSprite(pos);
        g_sharedGameLayer.addexplosions(explosion);
        explosion.play();
        var scene = cc.Scene.create();
        var layer = new gameoverLayer();
        scene.addChild(layer);

        cc.Director.getInstance().replaceScene(scene);

    }

})

