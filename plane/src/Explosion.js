/**
 * Created by Administrator on 13-12-20.
 */
var ExplosionSprite = cc.Sprite.extend({

    ctor:function(pos){

        this._super();
        var pFrame = cc.SpriteFrameCache.getInstance().getSpriteFrame("ex1.png");
        this.initWithSpriteFrame(pFrame);
        this.setPosition(pos);
    },

    play:function(){
        var animFrames = [];
        var str = "";
        for (var i = 1; i < 7; i++) {
            // Obtain frames by alias name
            str = "ex" + i+".png";
            var frame = cc.SpriteFrameCache.getInstance().getSpriteFrame(str);
            animFrames.push(frame);
        }
        var animation = cc.Animation.create(animFrames, 0.1);
        // 14 frames * 1sec = 14 seconds
        this.runAction(cc.Sequence.create(
            cc.Animate.create(animation),
            cc.CallFunc.create(this.destory,this)));

    },

    destory:function(){
        this.setVisible(false);
    }

})