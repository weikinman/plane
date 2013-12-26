/**
 * Created by Administrator on 13-12-19.
 */
var enemySprite = cc.Sprite.extend({
    score:10,
    isdie:false,
    attackmode:1,
    hp:3,
    moveType:1,
    parent:null,
    isboss:false,
    //active:true,
    ctor:function(arg){

        this._super();
        this.moveType = arg.moveType;
        this.score = arg.score;
        this.isdie = arg.isdie;
        this.attackmode=arg.attackmode;
        this.hp = arg.hp;
        this.setAnchorPoint(cc.p(0,0));
        this.setScale(-1);
        this.initWithFile(arg.bittype);
        this.isboss = arg.isboss;
        var randomW = Math.random()*290+5;
        var randomH = Math.random()*150+330;
        this.setPosition(cc.p(randomW,randomH));
        this.scheduleUpdate();
        this.schedule(this.shoot,1);
        //敌人的运动方式
        if(this.moveType ==1){
            var ain1 = cc.MoveTo.create(6,cc.p(100,200));
            var ani2 = cc.MoveBy.create(3,cc.p(-150,100));

         }
        if(this.moveType == 2){
            var ain1 = cc.MoveTo.create(2,cc.p(100,100));
            var ani2 = cc.MoveBy.create(3,cc.p(300,100));
        }
        if(this.moveType == 3){
            var ain1 = cc.MoveTo.create(2,cc.p(100,100));
            var ani2 = cc.MoveBy.create(3,cc.p(300,150));
        }
        if(this.moveType == 4){
            var ain1 = cc.ScaleTo.create(0.5,-1.5);
            var ani3 = cc.ScaleTo.create(2,-1);
            var  ani2 = cc.MoveTo.create(3,cc.p(150,300));
           var  ani4 = cc.MoveBy.create(3,cc.p(300,150));
        }
        this.runAction(cc.Sequence.create(ain1,ani2,ani3?ani3:null,ani4?ani4:null));
    },

    update:function(dt){
        var pos = this.getPosition();
        if(pos.x<-20||pos.x>300||pos.y<0||pos.y>500||this.hp<=1){

            this.isdie=true;

        }
    },

    shoot:function(dt){
        var bv = {x:0,y:-5}
        var pos = this.getPosition();
        pos.x = pos.x-20;
        pos.y -= 70;
        var bullet = new BulletSprite(bv,pos,1,"enemy");
        MW.CONTAINER.ENEMY_BULLETS.push(bullet);

    },

    collideRect:function(p){
        var a = this.getContentSize();
        return cc.rect(p.x- a.width/2 , p.y, a.width, a.height);
    },
    destory:function(i){
        if(this.isdie==true){
            this.setVisible(false);
            this.parent.removeChild(this);
            MW.CONTAINER.ENEMY.splice(i,1);//删除敌人
            MW.SCORE+=this.score;
            //添加爆炸事件
            var pos = this.getPosition();
            var explosion = new ExplosionSprite(pos);
            g_sharedGameLayer.addexplosions(explosion);
            explosion.play();
        }
    }

})
//boss
var bossSprite = cc.Sprite.extend({
    score:10,
    isdie:false,
    attackmode:1,
    hp:3,
    moveType:1,
    parent:null,
    isboss:false,
    ctor:function(arg){

        this._super();
        this.moveType = arg.moveType;
        this.score = arg.score;
        this.isdie = arg.isdie;
        this.attackmode=arg.attackmode;
        this.hp = arg.hp;
        this.isboss = arg.isboss;
        var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("fish0.png");
        this.initWithSpriteFrame(pFrame);
        this.setAnchorPoint(cc.p(0,0));
        this.scheduleUpdate();
        this.setPosition(cc.p(260,450));
        this.schedule(this.shoot,1);

        //boss运动路线
       if(this.moveType==10){
            var ain1 = cc.MoveTo.create(2,cc.p(100,300));
           var delay = cc.DelayTime.create(0.25);;
           var ani2 = cc.MoveTo.create(2,cc.p(260,450));
            var ani3 = cc.MoveTo.create(2,cc.p(100,300));
        }
        this.runAction(cc.RepeatForever.create(cc.Sequence.create(ain1,ani2,delay,ani3,null)));

    },

    update:function(dt){
        var pos = this.getPosition();
        if(pos.x<-20||pos.x>300||pos.y<0||pos.y>500||this.hp<=1){

            this.isdie=true;

        }
    },
    shoot:function(dt){
        var bv = {x:0,y:-5}
        var pos = this.getPosition();
        pos.x = pos.x-20;
        pos.y -= 70;
        var bullet = new BulletSprite(bv,pos,1,"enemy");
        MW.CONTAINER.ENEMY_BULLETS.push(bullet);

    },

    collideRect:function(p){
        var a = this.getContentSize();
        return cc.rect(p.x- a.width/2 , p.y, a.width, a.height);
    },

    play:function(){

        var animFrames = [];
        var str = "";
        for (var i = 0; i < 2; i++) {
            // Obtain frames by alias name
            str = "fish" + i+".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }
        var animation = cc.Animation.create(animFrames, 0.5);
        this.runAction(cc.RepeatForever.create(
            cc.Animate.create(animation))
        );
    },
    destory:function(i){
        if(this.isdie==true){
            if(this.isboss==true){
                g_sharedGameLayer.winner();
            }
            this.stopAllActions();
            this.setVisible(false);
            this.parent.removeChild(this);
            MW.CONTAINER.ENEMY.splice(i,1);//删除敌人
            MW.SCORE+=this.score;
            //添加爆炸事件
            var pos = this.getPosition();
            var explosion = new ExplosionSprite(pos);
            g_sharedGameLayer.addexplosions(explosion);
            explosion.play();
            var scene = cc.Scene.create();
            var layer = new winnerLayer();
            scene.addChild(layer);
            cc.Director.getInstance().replaceScene(scene);
        }
    }
})