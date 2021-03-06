/**
 * Created by Administrator on 13-12-18.
 */
function INIT(){
//控制配置
MW.KEYS = [];
//状态配置
G_STATE = null;
MW.STATE = {normal:1,over:2,stop:0};
//分数
MW.SCORE = 0;
//玩家生命
MW.LIFE = 4;
//添加敌人控制
MW.FRAMES = {

    FRAME:0,
    FRAMEINDEX:0,
    ADD:true
}
//玩家配置
MW.PLAYER_TYPE ={
    isdie:false,
    bullet_type:1,
    hp:3,
    bittype:s_plane
}
//子弹和敌人存放数组
MW.CONTAINER={
    ENEMY:[],
    ENEMY_BULLETS:[],
    PLAYER_BULLETS:[]
};
//移动相关
MW.SPEED = {
    PLANE:200,
    ENEMY:-150

}
//敌人出现控制，敌人配置
MW.CONTAINER.ENEMYS= [
    {
        frame:1,
        moveType:4,
        score:10,
        isdie:false,
        attackmode:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:5,
        moveType:2,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:8,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:11,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:11,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:11,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:15,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:15,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:16,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:16,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:20,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:21,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:22,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:25,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:25,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:30,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:31,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:35,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:35,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:40,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },{
        frame:41,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:42,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:50,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },

    {
        isboss:true,
        frame:51,
        moveType:10,
        score:100,
        isdie:false,
        bullet_type:1,
        hp:1,
        bittype:s_plane
    },
    {
        frame:52,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
    {
        frame:52,
        moveType:1,
        score:10,
        isdie:false,
        bullet_type:1,
        hp:3,
        bittype:s_plane
    },
];
//声音
MW.SOUND = {};

//奖励品相关
MW.GIFTS=[
    {
        GIFTTYPE:1,
        MOVETYPE:1,
        score:10,
        isdie:false
    }];
}
INIT();