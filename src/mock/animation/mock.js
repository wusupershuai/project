let Mock = require("mockjs");
let animationData = {
    recommend: {
        info: "推荐",
        recommendData: [{
            id: 1,
            text: "热门推荐",
            ranking: true,
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend1.webp"),
                play: "42.3万",
                number: "839",
                title: "B站史上最强国产动画季！破亿名作大集结！完结吐槽！"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend2.webp"),
                play: "29.2万",
                number: "312",
                title: "续作评分9.6！空降女主惹争议？国产最火IP剑网3改编的侠肝义胆沈剑心！"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend3.webp"),
                play: "36.5万",
                number: "1123",
                title: "灵笼12集就这？其实隐藏信息巨多！【滑稽漫谈35期】"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend4.webp"),
                play: "13.6万",
                number: "583",
                title: "艺画填坑又挖坑，灵笼第十二集细节发掘、剧情解析"
            },
            ]
        },
        // 国产动画
        {
            id: 2,
            text: "国产动画",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend1.webp"),
                play: "42.3万",
                number: "839",
                title: "B站史上最强国产动画季！破亿名作大集结！完结吐槽！"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend2.webp"),
                play: "29.2万",
                number: "312",
                title: "续作评分9.6！空降女主惹争议？国产最火IP剑网3改编的侠肝义胆沈剑心！"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend3.webp"),
                play: "36.5万",
                number: "1123",
                title: "灵笼12集就这？其实隐藏信息巨多！【滑稽漫谈35期】"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend4.webp"),
                play: "13.6万",
                number: "583",
                title: "艺画填坑又挖坑，灵笼第十二集细节发掘、剧情解析"
            },
            ]
        },
        // 国产原创相关 
        {
            id: 3,
            text: "国产原创相关",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend1.webp"),
                play: "42.3万",
                number: "839",
                title: "B站史上最强国产动画季！破亿名作大集结！完结吐槽！"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend2.webp"),
                play: "29.2万",
                number: "312",
                title: "续作评分9.6！空降女主惹争议？国产最火IP剑网3改编的侠肝义胆沈剑心！"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend3.webp"),
                play: "36.5万",
                number: "1123",
                title: "灵笼12集就这？其实隐藏信息巨多！【滑稽漫谈35期】"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend4.webp"),
                play: "13.6万",
                number: "583",
                title: "艺画填坑又挖坑，灵笼第十二集细节发掘、剧情解析"
            },
            ]
        },
        // 布袋戏
        {
            id: 4,
            text: "布袋戏",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend1.webp"),
                play: "42.3万",
                number: "839",
                title: "B站史上最强国产动画季！破亿名作大集结！完结吐槽！"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend2.webp"),
                play: "29.2万",
                number: "312",
                title: "续作评分9.6！空降女主惹争议？国产最火IP剑网3改编的侠肝义胆沈剑心！"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend3.webp"),
                play: "36.5万",
                number: "1123",
                title: "灵笼12集就这？其实隐藏信息巨多！【滑稽漫谈35期】"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend4.webp"),
                play: "13.6万",
                number: "583",
                title: "艺画填坑又挖坑，灵笼第十二集细节发掘、剧情解析"
            },
            ]
        },
        // 动态漫.广播剧
        {
            id: 5,
            text: "动态漫.广播剧",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend1.webp"),
                play: "42.3万",
                number: "839",
                title: "B站史上最强国产动画季！破亿名作大集结！完结吐槽！"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend2.webp"),
                play: "29.2万",
                number: "312",
                title: "续作评分9.6！空降女主惹争议？国产最火IP剑网3改编的侠肝义胆沈剑心！"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend3.webp"),
                play: "36.5万",
                number: "1123",
                title: "灵笼12集就这？其实隐藏信息巨多！【滑稽漫谈35期】"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend4.webp"),
                play: "13.6万",
                number: "583",
                title: "艺画填坑又挖坑，灵笼第十二集细节发掘、剧情解析"
            },
            ]
        },
        // 资讯
        {
            id: 6,
            text: "资讯",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend1.webp"),
                play: "42.3万",
                number: "839",
                title: "B站史上最强国产动画季！破亿名作大集结！完结吐槽！"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend2.webp"),
                play: "29.2万",
                number: "312",
                title: "续作评分9.6！空降女主惹争议？国产最火IP剑网3改编的侠肝义胆沈剑心！"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend3.webp"),
                play: "36.5万",
                number: "1123",
                title: "灵笼12集就这？其实隐藏信息巨多！【滑稽漫谈35期】"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend4.webp"),
                play: "13.6万",
                number: "583",
                title: "艺画填坑又挖坑，灵笼第十二集细节发掘、剧情解析"
            },
            ]
        },
        ],

    },
    // 国产动画
    guoAnimation: {
        info: "MAD·AMV",
        // 热门推荐
        recommendData: [{
            id: 1,
            text: "热门推荐",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend5.webp"),
                play: "445.9万",
                number: "5.5万",
                title: "【独家】《凡人修仙传之魔道争锋篇》第21集【总第42集】"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend6.webp"),
                play: "206.4万",
                number: "1.4万",
                title: "【独家】《永生之无尽仙途》第9集 瀚海沙漠 【1月国创】"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend7.webp"),
                play: "132.5万",
                number: "6445",
                title: "【独家】《龙蛇演义》第10集【1月国创】"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend8.webp"),
                play: "88万",
                number: "7234",
                title: "《是王者啊？》第1集 消失的酒友【1月国创】"
            },
            ]
        },
        // 国产动画
        {
            id: 2,
            text: "最新视频",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend5.webp"),
                play: "445.9万",
                number: "5.5万",
                title: "【独家】《凡人修仙传之魔道争锋篇》第21集【总第42集】"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend6.webp"),
                play: "206.4万",
                number: "1.4万",
                title: "【独家】《永生之无尽仙途》第9集 瀚海沙漠 【1月国创】"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend7.webp"),
                play: "132.5万",
                number: "6445",
                title: "【独家】《龙蛇演义》第10集【1月国创】"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend8.webp"),
                play: "88万",
                number: "7234",
                title: "《是王者啊？》第1集 消失的酒友【1月国创】"
            },
            ]
        }
        ],

    },
    // 国产原创相关
    guoAbout: {
        // 热门推荐
        info: "MMD·3D",
        recommendData: [{
            id: 1,
            text: "热门推荐",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend9.webp"),
                play: "80.4万",
                number: "1.6万",
                title: "《画江湖》或成绝响？从若森数字-浅谈国产动画所面临的困境"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend10.webp"),
                play: "39.7万",
                number: "3298",
                title: "战斗细节堪称完美！这才是顶级斗法！《凡人修仙传》42集逐帧解析"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend11.webp"),
                play: "47万",
                number: "488",
                title: "小忍成仁，大忍成佛！曾经的齐天大圣孙悟空！如今忍成了现在的斗战圣佛！谁能理解他！"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend12.webp"),
                play: "23.3万",
                number: "2248",
                title: "【凹凸第四季预热】入坑+复习必看！《凹凸世界》动画前三季设定细点+剧情梳理（上）【国动荟萃-凹凸专题】"
            },
            ]
        },
        // 最新视频
        {
            id: 2,
            text: "最新视频",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend9.webp"),
                play: "80.4万",
                number: "1.6万",
                title: "《画江湖》或成绝响？从若森数字-浅谈国产动画所面临的困境"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend10.webp"),
                play: "39.7万",
                number: "3298",
                title: "战斗细节堪称完美！这才是顶级斗法！《凡人修仙传》42集逐帧解析"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend11.webp"),
                play: "47万",
                number: "488",
                title: "小忍成仁，大忍成佛！曾经的齐天大圣孙悟空！如今忍成了现在的斗战圣佛！谁能理解他！"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend12.webp"),
                play: "23.3万",
                number: "2248",
                title: "【凹凸第四季预热】入坑+复习必看！《凹凸世界》动画前三季设定细点+剧情梳理（上）【国动荟萃-凹凸专题】"
            },
            ]
        }
        ],

    },
    // 布袋戏
    potehi: {
        // 热门推荐
        info: "短片·手书·配音",
        recommendData: [{
            id: 1,
            text: "热门推荐",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend13.webp"),
                play: "4.9万",
                number: "4166",
                title: "金光御九界之仙古狂涛 第32集 止戈如来 下"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend14.webp"),
                play: "1.8万",
                number: "668",
                title: "【看戏吐槽】仙古狂涛32集—这是我最后的吐槽啦！道友！！"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend15.webp"),
                play: "1.7万",
                number: "291",
                title: "仙古狂涛32集，一锅大乱斗，累了毁灭吧"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend16.webp"),
                play: "1.7万",
                number: "41",
                title: "【仙古狂涛大结局】玄狐版高马尾俏如来超好看！！！"
            },
            ]
        },
        // 最新视频
        {
            id: 2,
            text: "最新视频",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend13.webp"),
                play: "4.9万",
                number: "4166",
                title: "金光御九界之仙古狂涛 第32集 止戈如来 下"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend14.webp"),
                play: "1.8万",
                number: "668",
                title: "【看戏吐槽】仙古狂涛32集—这是我最后的吐槽啦！道友！！"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend15.webp"),
                play: "1.7万",
                number: "291",
                title: "仙古狂涛32集，一锅大乱斗，累了毁灭吧"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend16.webp"),
                play: "1.7万",
                number: "41",
                title: "【仙古狂涛大结局】玄狐版高马尾俏如来超好看！！！"
            },
            ]
        }
        ],

    },
    // 动态漫.广播剧
    dynamicImage: {
        // 热门推荐
        info: "手办·模玩",
        recommendData: [{
            id: 1,
            text: "热门推荐",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend17.webp"),
                play: "2.6万",
                number: "9",
                title: "【Remix混音人生】老年人轩zone和他的一些老梗"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend18.webp"),
                play: "20.4万",
                number: "148",
                title: "【娘娘腔丨花絮】羊仔怼邵群，刘琮：我十一岁就这声"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend19.webp"),
                play: "3723",
                number: "1",
                title: "船长：要求毛毛录我爹！结果……"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend20.webp"),
                play: "835",
                number: "--",
                title: "叮咚！你有一封来自cv天空的高考祝福！"
            },
            ]
        },
        // 最新视频
        {
            id: 2,
            text: "最新视频",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend17.webp"),
                play: "2.6万",
                number: "9",
                title: "【Remix混音人生】老年人轩zone和他的一些老梗"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend18.webp"),
                play: "20.4万",
                number: "148",
                title: "【娘娘腔丨花絮】羊仔怼邵群，刘琮：我十一岁就这声"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend19.webp"),
                play: "3723",
                number: "1",
                title: "船长：要求毛毛录我爹！结果……"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend20.webp"),
                play: "835",
                number: "--",
                title: "叮咚！你有一封来自cv天空的高考祝福！"
            },
            ]
        },
        ],
    },
    // 资讯
    information: {
        // 热门推荐
        info: "特摄",
        recommendData: [{
            id: 1,
            text: "热门推荐",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend21.webp"),
                play: "88.9万",
                number: "7850",
                title: "《凹凸世界》动画第四季正式定档4月29日！"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend22.webp"),
                play: "58.6万",
                number: "119",
                title: "《少年歌行 风花雪月篇》第26集预告 唯见青山不见君【1月国创】"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend23.webp"),
                play: "46.7万",
                number: "44",
                title: "【独家】《龙蛇演义》第11集预告【1月国创】"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend24.webp"),
                play: "55.7万",
                number: "469",
                title: "《凡人修仙传之魔道争锋篇》第21集预告"
            },
            ]
        },
        // 最新视频
        {
            id: 2,
            text: "国产动画",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend21.webp"),
                play: "88.9万",
                number: "7850",
                title: "《凹凸世界》动画第四季正式定档4月29日！"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend22.webp"),
                play: "58.6万",
                number: "119",
                title: "《少年歌行 风花雪月篇》第26集预告 唯见青山不见君【1月国创】"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend23.webp"),
                play: "46.7万",
                number: "44",
                title: "【独家】《龙蛇演义》第11集预告【1月国创】"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend24.webp"),
                play: "55.7万",
                number: "469",
                title: "《凡人修仙传之魔道争锋篇》第21集预告"
            },
            ]
        }
        ],

    },
    total: {
        // 热门推荐
        info: "综合",
        recommendData: [{
            id: 1,
            text: "热门推荐",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend1.webp"),
                play: "88.9万",
                number: "7850",
                title: "《凹凸世界》动画第四季正式定档4月29日！"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend2.webp"),
                play: "58.6万",
                number: "119",
                title: "《少年歌行 风花雪月篇》第26集预告 唯见青山不见君【1月国创】"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend3.webp"),
                play: "46.7万",
                number: "44",
                title: "【独家】《龙蛇演义》第11集预告【1月国创】"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend4.webp"),
                play: "55.7万",
                number: "469",
                title: "《凡人修仙传之魔道争锋篇》第21集预告"
            },
            ]
        },
        // 最新视频
        {
            id: 2,
            text: "国产动画",
            data: [{
                id: 1,
                imgsrc: require("@/assets/img/recommend11.webp"),
                play: "88.9万",
                number: "7850",
                title: "《凹凸世界》动画第四季正式定档4月29日！"
            },
            {
                id: 2,
                imgsrc: require("@/assets/img/recommend12.webp"),
                play: "58.6万",
                number: "119",
                title: "《少年歌行 风花雪月篇》第26集预告 唯见青山不见君【1月国创】"
            },
            {
                id: 3,
                imgsrc: require("@/assets/img/recommend13.webp"),
                play: "46.7万",
                number: "44",
                title: "【独家】《龙蛇演义》第11集预告【1月国创】"
            },
            {
                id: 4,
                imgsrc: require("@/assets/img/recommend14.webp"),
                play: "55.7万",
                number: "469",
                title: "《凡人修仙传之魔道争锋篇》第21集预告"
            },
            ]
        }
        ],

    }
}
Mock.mock("/api/animation", "get", function (config) {
    return animationData
})