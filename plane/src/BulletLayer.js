/**
 * Created by Administrator on 13-12-18.
 */
var BulletSprite = cc.Sprite.extend({
    speedX:0,
    speedY:0,
    Hit:1,
    pos:{x:0,y:0},
    Vr:30*Math.PI/180,
    belong:null,
    speedStep:5,

    ctor:function(speed,pos,attackmode,belong){
        this._super();
        this.speedY = speed.y;
        this.speedX = speed.x;
        this.pos = pos;
        this.attmode = attackmode;
        this.belong = belong;
        var conSize = this.getContentSize();
        this.initWithFile(s_butter);
        this.setScale(0.5);
        this.setAnchorPoint(cc.p(0,0));
        this.setPosition(cc.p(this.pos.x+15,this.pos.y+35));
        this.schedule(this.update,0);
        g_sharedGameLayer.addChild(this);
    },

    update:function(dt){
        var winsize = cc.Director.getInstance().getWinSize();
        var p =this.getPosition();



        if(this.attmode==1){
            p.x +=this.speedX;
            p.y+=this.speedY;
            this.setPosition(p);
        }
        if(this.attmode==2){
            var count= 3;

            for(var i= 0;i<count;i++){

                var vx = Math.cos(this.Vr);
                var vy = Math.sin(this.Vr);
            }

            p.x +=vx;
            p.y+=vy+this.speedY;
            this.Vr+=15*Math.PI/180;
            this.setPosition(p);
        }
    },

    collideRect:function(p){
        return cc.rect(p.x, p.y,6,6);
    },

    destory:function(num){
        this.setVisible(false);
        if(this.belong=="plane"){
        MW.CONTAINER.PLAYER_BULLETS.splice(num,1);}
        else{
        MW.CONTAINER.ENEMY_BULLETS.splice(num,1);
        }

        //console.log(MW.CONTAINER.PLAYER_BULLETS.length+"---"+MW.CONTAINER.ENEMY_BULLETS.length);
    }

});