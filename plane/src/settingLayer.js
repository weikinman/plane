/**
 * Created by Administrator on 13-12-25.
 */
var settingLayer = cc.Layer.extend({

    ctor:function(){
        this._super(cc.c4b(255,255,255,255),cc.c4b(0,0,0,255));
        this.init();
    },

    init:function(){
        this._super();
        var winSize = cc.Director.getInstance().getWinSize();
        var label = cc.LabelTTF.create("Setting","Georgia",24);
        label.setAnchorPoint(cc.p(0,0));
        label.setPosition(cc.p(winSize.width/2-label.getContentSize().width/2,400));
        this.addChild(label);

        var label1 = cc.LabelTTF.create("PLEASE BACK","Georgia",20);
        label1.setAnchorPoint(cc.p(0,0));
        label1.setPosition(cc.p(winSize.width/2-label1.getContentSize().width/2,300));
        this.addChild(label1);

        var menuTTF = cc.MenuItemFont.create("BACK TO MENU",this.backtoMenu,this);
        menuTTF.setFontSize(20);
        menuTTF.setAnchorPoint(cc.p(0,0));
        menuTTF.setPosition(cc.p(winSize.width/2-menuTTF.getContentSize().width/2,200));
        var menu = cc.Menu.create(menuTTF);
        menu.setAnchorPoint(cc.p(0,0));
        menu.setPosition(cc.p(0,0));
        this.addChild(menu,2);

    },

    backtoMenu:function(){

        var scene = new WelcomeScene();
        cc.Director.getInstance().replaceScene(scene);

    }

})
