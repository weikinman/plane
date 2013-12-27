/**
 * Created by Administrator on 13-12-25.
 */
var WelcomeScene = cc.Scene.extend({

    onEnter:function(){

        this._super();


    },
    ctor:function(){
        this._super();
        this.init();

    },
    init:function(){
        this._super();
        //开始画面初始化
        var wbg = cc.Sprite.create(s_wbg);
        wbg.setAnchorPoint(cc.p(0,0));
        wbg.setPosition(cc.p(0,0));
        this.addChild(wbg,0);

        var welcome = new welcomeLayer();
        welcome.setAnchorPoint(cc.p(0,0));
        this.addChild(welcome,99);
    }
})

var welcomeLayer = cc.Layer.extend({

    ctor:function(){
        this._super();

        var winSize = cc.Director.getInstance().getWinSize();


        if( 'mouse' in sys.capabilities ) {
            this.setMouseEnabled(true);
        } else {
            cc.log("MOUSE Not supported");
        }

        //按钮初始化


        var selectNormal = cc.Sprite.create(s_menulist,cc.rect(0,0,150,30));
        var selectbut = cc.Sprite.create(s_menulist,cc.rect(0,105,150,30));
        var selectdis = cc.Sprite.create(s_menulist,cc.rect(0,105,150,30));
        var menuitem = cc.MenuItemSprite.create(selectNormal,selectbut,selectdis,this.onPlay,this);
        menuitem.setAnchorPoint(cc.p(0,0));
        menuitem.setPosition(cc.p(400,300));



        var selectNormal1 = cc.Sprite.create(s_menulist,cc.rect(0,33,150,30));
        var selectbut1 = cc.Sprite.create(s_menulist,cc.rect(0,135,150,30));
        var selectdis1 = cc.Sprite.create(s_menulist,cc.rect(0,135,150,30));
        var menuitem1 = cc.MenuItemSprite.create(selectNormal1,selectbut1,selectdis1,this.goSetting,this);
        menuitem1.setAnchorPoint(cc.p(0,0));
        menuitem1.setPosition(cc.p(-100,240));


        var selectNormal2 = cc.Sprite.create(s_menulist,cc.rect(0,65,150,30));
        var selectbut2 = cc.Sprite.create(s_menulist,cc.rect(0,160,150,30));
        var selectdis2 = cc.Sprite.create(s_menulist,cc.rect(0,160,150,30));
        var menuitem2 = cc.MenuItemSprite.create(selectNormal2,selectbut2,selectdis2,this.quite,this);
        menuitem2.setAnchorPoint(cc.p(0,0));
        menuitem2.setPosition(cc.p(400,180));

        var ani1 = cc.MoveTo.create(1,cc.p(winSize.width/2-menuitem.getContentSize().width/2,300));
        var ani2 = cc.MoveTo.create(1,cc.p(winSize.width/2-menuitem1.getContentSize().width/2,240));
        var ani3 = cc.MoveTo.create(1,cc.p(winSize.width/2-menuitem2.getContentSize().width/2,180));

        menuitem.runAction(cc.Sequence.create(ani1,null));
        menuitem1.runAction(cc.Sequence.create(ani2,null));
        menuitem2.runAction(cc.Sequence.create(ani3,null));

        var menu = cc.Menu.create(menuitem,menuitem1,menuitem2);
        menu.setAnchorPoint(cc.p(0,0));
        menu.setPosition(cc.p(0,0));
        this.addChild(menu,50);


    },
    onPlay:function(){
        var scene =new MyPLScene();

        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(1, scene));

    },

    goSetting:function(){
        var scene = cc.Scene.create();
        var layer = new settingLayer();
        scene.addChild(layer);
        cc.Director.getInstance().replaceScene(cc.TransitionSlideInT.create(1, scene));
    },

    quite:function(){


    }


})

