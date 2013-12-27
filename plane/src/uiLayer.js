/**
 * Created by Administrator on 13-12-25.
 */
var uiLayer = cc.Layer.extend({
    score:null,
    life:4,
    bomb:3,
    ctor:function(){

        this._super();

        this.init();
        this.scheduleUpdate();

    },
    init:function(){
        //UI界面初始化

        //分数显示
        this.score = cc.LabelTTF.create("","Tahoma",14);
        this.setAnchorPoint(cc.p(0,0));
        this.score.setColor(cc.c4b(0,0,0,255));
        this.addChild(this.score);

        this.life = cc.LabelTTF.create("","Tahoma",14);
        this.setAnchorPoint(cc.p(0,0));
        this.life.setPosition(cc.p(200,0));
        this.life.setColor(cc.c4b(0,0,0,255));
        this.addChild(this.life);

    },

    update:function(){

        this.score.setString("score:"+MW.SCORE);
        this.life.setString("LIFE:"+MW.LIFE);
    }

})