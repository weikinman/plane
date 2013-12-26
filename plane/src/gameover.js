/**
 * Created by Administrator on 13-12-25.
 */
var gameoverLayer = cc.Layer.extend({

    ctor:function(){

        this._super();
        this.init();

    },
    init:function(){

        this._super();
        this.setAnchorPoint(cc.p(0,0));
        var winSize = cc.Director.getInstance().getWinSize();
        var overTTF = cc.LabelTTF.create("gameover","Tahoma",24);
        overTTF.setAnchorPoint(cc.p(0,0));
        overTTF.setPosition(cc.p(winSize.width/2-overTTF.getContentSize().width/2,300));
        this.addChild(overTTF);

        var menuback = cc.MenuItemFont.create("restar",this.backtoMenu,this);
        menuback.setFontSize(24);
        menuback.setAnchorPoint(cc.p(0,0));

        var menu = cc.Menu.create(menuback);
        menu.setAnchorPoint(cc.p(0,0));
        menu.setPosition(cc.p(winSize.width/2-menuback.getContentSize().width/2,200));
        this.addChild(menu);
    },
    backtoMenu:function(){
        G_STATE = MW.STATE.over;
        var scene = new WelcomeScene();
        cc.Director.getInstance().replaceScene(scene);
    }

})

var winnerLayer = cc.Layer.extend({

    ctor:function(){

        this._super();
        this.init();

    },
    init:function(){

        this._super();
        this.setAnchorPoint(cc.p(0,0));
        var winSize = cc.Director.getInstance().getWinSize();
        var overTTF = cc.LabelTTF.create("WINNER","Tahoma",24);
        overTTF.setAnchorPoint(cc.p(0,0));
        overTTF.setPosition(cc.p(winSize.width/2-overTTF.getContentSize().width/2,300));
        this.addChild(overTTF);

        var menuback = cc.MenuItemFont.create("replay",this.backtoMenu,this);
        menuback.setFontSize(24);
        menuback.setAnchorPoint(cc.p(0,0));

        var menu = cc.Menu.create(menuback);
        menu.setAnchorPoint(cc.p(0,0));
        menu.setPosition(cc.p(winSize.width/2-menuback.getContentSize().width/2,200));
        this.addChild(menu);
    },
    backtoMenu:function(){
        G_STATE = MW.STATE.over;
        var scene = new WelcomeScene();
        cc.Director.getInstance().replaceScene(scene);
    }

})
