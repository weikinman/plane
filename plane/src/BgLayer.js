/**
 * Created by Administrator on 13-12-18.
 */
var BgLayer = cc.Layer.extend({
    bg:null,
    bg1:null,
    bg2:null,
    bg2_frame:0,
    ctor:function(){

        this._super();
        this.init();
    },
    init:function(){
        this._super();
        var wbg = cc.Sprite.create(s_wbg);
        wbg.setAnchorPoint(cc.p(0,0));
        wbg.setPosition(cc.p(0,0));
        this.addChild(wbg,1);
        this.bg = cc.Sprite.create(s_bg);
        this.bg.setAnchorPoint(cc.p(0,0));
        this.bg.setPosition(cc.p(0,500));
        this.addChild(this.bg,2);
        this.bg1 = cc.Sprite.create(s_bg1);
        this.bg1.setAnchorPoint(cc.p(0,0));
        this.bg1.setPosition(cc.p(0,1700));
        this.addChild(this.bg1,2);

        this.bg2 = cc.Sprite.create(s_bg2);
        this.bg2.setAnchorPoint(cc.p(0,0));
        this.bg2.setPosition(cc.p(0,1300));
        this.addChild(this.bg2,3);
        this.schedule(this.playbg,1/60);


        if( 'keyboard' in sys.capabilities ) {
            this.setKeyboardEnabled(true);
        } else {
            cc.log("KEYBOARD Not supported");
        }

    },
    playbg:function(dt){
        var pos1 = this.bg.getPosition();
        this.bg.setPositionY(pos1.y-=3);
        var pos2 = this.bg1.getPosition();
        this.bg1.setPositionY(pos2.y-=3);

        if(pos1.y<=-1900){
            this.bg.setPositionY(500);
        }
        if(pos2.y<=-400){

            this.bg1.setPositionY(1700);

        }
        if(this.bg2_frame++<80){
            return;
        }
        var pos3 = this.bg2.getPosition();
        this.bg2.setPositionY(pos3.y-=6);
        if(pos3.y<=-1200){
            this.bg2_frame=0;
            this.bg2.setPositionY(1300);
        }

    },
    onKeyDown:function (e) {
        MW.KEYS[e] = true;
    },

    onKeyUp:function (e) {
        MW.KEYS[e] = false;
    }
})

var FlowerLayer = cc.Layer.extend({
    runStep:1,

    onEnter:function(){
        this._super();
        var s = cc.Director.getInstance().getWinSize();
        this.setAnchorPoint(cc.p(0,0));
        this.init();
        this.schedule(this.update,0);
    },

    init:function(){
        this.flower =  cc.Sprite.create(s_flower);
        var ani1 = cc.ProgressTo.create(2,100);
        var randomnum = Math.random()*400+70;
        this.setPosition(cc.p(0,randomnum));
       // var move1 = cc.MoveTo.create(10,cc.p(0,0));
        var left = cc.ProgressTimer.create(this.flower);
        left.setType(cc.PROGRESS_TIMER_TYPE_RADIAL);
        this.addChild(left);
        left.setPosition(cc.p(0,0));
        left.runAction(cc.Sequence.create(ani1,null));

    },

    update:function(){
        this.setPositionY(this.getPositionY()-this.runStep);
        if(this.getPositionY()<0){
            //this.getParent().removeChild(this);
            this.setPositionY(400);
        }

    }

})