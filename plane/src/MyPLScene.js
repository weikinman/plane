/**
 * Created by Administrator on 13-12-18.
 */
g_sharedGameLayer = null;
MAX_CONTAINT_WIDTH = 30;
MAX_CONTAINT_HEIGHT = 30;
var MyPLScene = cc.Scene.extend({
    texbothbullet:null,// 子弹的批量精灵动画
    sprite:null,
    _explosions:null,//爆炸的批量精灵动画
    _bossbox:null,
    texbatchboss:null,
    onEnter:function(){
        this._super();
        //初始化背景
        if(G_STATE==MW.STATE.over){

            INIT();

        }
        var bglayer = new BgLayer();
        this.addChild(bglayer,0);
        g_sharedGameLayer = this;

        var flower = new FlowerLayer();
       // this.addChild(flower,2);

        this.setui();

        //初始化玩家
        this._plane = new planeSprite(s_player);
        this.addChild(this._plane,10);

        //设置精灵批量动画运行
        //this.texbothbullet = cc.SpriteBatchNode.create(s_butter,50);

        cc.SpriteFrameCache.getInstance().addSpriteFrames(s_boss_plist,s_boss);
        this.texbatchboss = cc.SpriteBatchNode.create(s_boss,2);
        this.addChild(this.texbatchboss,51);




        //添加splist到精灵帧缓存
        cc.SpriteFrameCache.getInstance().addSpriteFrames(s_ex_plist,s_ex);
        //设置爆炸精灵动画
        //var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("ex1.png");
        this._explosions = cc.SpriteBatchNode.create(s_ex);
        this.addChild(this._explosions,50);
        this.schedule(this.addEnemy,1/2);
        this.scheduleUpdate();
    },
    //碰撞检测
    checkcollide:function(){
        //检测敌人与玩家子弹的碰撞
        var selChild, bulletChild;
        for(var i = 0; i<MW.CONTAINER.ENEMY.length;i++){

            selChild = MW.CONTAINER.ENEMY[i];
            for(var j = 0; j<MW.CONTAINER.PLAYER_BULLETS.length;j++){

                bulletChild = MW.CONTAINER.PLAYER_BULLETS[j];
                var p = bulletChild.getPosition();
                //子弹出界删除
                if(p.x<-10|| p.x>310|| p.y<-10|| p.y>510){

                    bulletChild.destory(j);

                }
                if(bulletChild&&selChild){
                    if(this.collide(selChild,bulletChild)){
                        selChild.hp--;
                        if(selChild.isboss!=true){
                        selChild.parent = this;
                        }else{
                            selChild.parent = this.texbatchboss;
                        }
                        selChild.destory(i);

                        bulletChild.destory(j);
                    }
                 }
            }
        }
        //检测敌人子弹与玩家的碰撞
        var planeChild, bulletenemy;
        for(var i = 0; i<MW.CONTAINER.ENEMY.length;i++){

            planeChild = this._plane;
            for(var j = 0; j<MW.CONTAINER.ENEMY_BULLETS.length;j++){

                bulletenemy = MW.CONTAINER.ENEMY_BULLETS[j];
                var p = bulletenemy.getPosition();
                //子弹出界删除
                if(p.x<-10|| p.x>310|| p.y<-10|| p.y>510){

                    bulletenemy.destory(j);

                }
                if(bulletenemy&&planeChild){
                    if(this.collide(planeChild,bulletenemy)){
                        MW.LIFE--;
                        console.log(MW.LIFE);
                        //planeChild.destory(i);
                        bulletenemy.destory(j);
                    }
                }
            }
        }



    },

    update:function(dt){
        this.checkcollide();

    },

    setui:function(){
        var UI = new uiLayer();
        UI.setPosition(cc.p(40,480));
        this.addChild(UI,100);
    },
    //设置碰撞矩形
    collide:function(a,b){
        var pos1 = a.getPosition();
        var pos2 = b.getPosition();
        if (Math.abs(pos1.x - pos2.x) > MAX_CONTAINT_WIDTH || Math.abs(pos1.y - pos2.y) > MAX_CONTAINT_HEIGHT)
            return false;

        var aRect = a.collideRect(pos1);
        var bRect = b.collideRect(pos2);
        return cc.rectIntersectsRect(aRect, bRect);


    },
    //添加敌人
    addEnemy:function(){
        //根据帧的增加添加敌人
        MW.FRAMES.FRAMEINDEX++;
        if(MW.FRAMES.FRAMEINDEX%2==0){
            MW.FRAMES.FRAME++;
            /*
            if(MW.FRAMES.FRAME> MW.CONTAINER.ENEMYS.length){

                MW.FRAMES.ADD = false;

            }
            */
            if(MW.FRAMES.ADD ==true){
                //从设置好的敌人属性在敌人类中添加敌人
                for(var i = 0; i<MW.CONTAINER.ENEMYS.length;i++){

                    var child = MW.CONTAINER.ENEMYS[i];
                    if(child.frame ==MW.FRAMES.FRAME){
                        if(MW.CONTAINER.ENEMYS[i].isboss == true){
                            var boss = new bossSprite(child);
                            this.texbatchboss.addChild(boss);
                            MW.CONTAINER.ENEMY.push(boss);
                            boss.play();
                        }
                        else{
                            var enemy = new enemySprite(child);
                            this.addChild(enemy,10);
                            MW.CONTAINER.ENEMY.push(enemy);
                        }

                    }
                }
            }

        }


    }

});
//从外部调用添加到画布
MyPLScene.prototype.addbullet = function(bullet){
    //原型方法，渲染到画布
    this.texbothbullet.addChild(bullet);

}

MyPLScene.prototype.addexplosions = function(explosion){
    //原型方法，渲染到画布
        this._explosions.addChild(explosion);
}

MyPLScene.prototype.winner = function(){

   console.log("winner");

}