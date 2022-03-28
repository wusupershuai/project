let Mock = require('mockjs');

Mock.mock('/api/movies', 'get', function (config) {
    return {
        recom: {
            hots: {
                title: "热门推荐",
                more: "排行榜",
                icon: "el-icon-s-data",
                list: [
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【狙击手】全网首播，张艺谋导演年度口碑战争片",
                        number: "69.7万",
                        comment: "1969",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【鼠来宝2：明星俱乐部】花栗鼠校园PK女花栗鼠",
                        number: "3.6万",
                        comment: "561",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【完美盗贼】布鲁斯·威利斯主演喜剧犯罪片",
                        number: "3.4万",
                        comment: "459",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【科学怪人】同名经典科幻小说改编",
                        number: "2.7万",
                        comment: "41",
                    },
                ],
            },
            chinese: {
                title: "华语电影",
                more: "查看更多",
                list: [
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【狙击手】全网首播，张艺谋导演年度口碑战争片",
                        number: "69.7万",
                        comment: "1969",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【恶战】粤语版",
                        number: "3.3万",
                        comment: "161",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【醉鬼张三】惠英红主演功夫武打片",
                        number: "3.4万",
                        comment: "83",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【追凶五十年】老战士追缉连环杀人魔",
                        number: "2.4万",
                        comment: "66",
                    },
                ],
            },
            eas: {
                title: "欧美电影",
                more: "查看更多",
                list: [
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【鼠来宝】花栗鼠变身歌坛巨星",
                        number: "16.7万",
                        comment: "1229",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【逆转王牌】高材生网络赌博深陷圈套",
                        number: "7.3万",
                        comment: "50",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【查理布朗男孩】9.2分童年经典动画",
                        number: "5.2万",
                        comment: "574",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【机器管家】豆瓣8.6科幻片，机器人爱上人类",
                        number: "3.6万",
                        comment: "258",
                    },
                ],
            },
            japans: {
                title: "日本电影",
                more: "查看更多",
                list: [
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【投靠女与出走男】户田惠梨香、满岛光演绎古代离婚",
                        number: "10.8万",
                        comment: "486",
                    },
                ],
            },
            elses: {
                title: "其他国家",
                more: "查看更多",
                list: [
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【逃逸速度】第三届蓝星球科幻终评12强入围作品",
                        number: "1.6万",
                        comment: "28",
                    },
                ],
            },
        },
        china: {
            chinese: {
                title: "华语电影",
                more: "查看更多",
                list: [
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【狙击手】全网首播，张艺谋导演年度口碑战争片",
                        number: "69.7万",
                        comment: "1969",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【恶战】粤语版",
                        number: "3.3万",
                        comment: "161",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【醉鬼张三】惠英红主演功夫武打片",
                        number: "3.4万",
                        comment: "83",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【追凶五十年】老战士追缉连环杀人魔",
                        number: "2.4万",
                        comment: "66",
                    },
                ],
            },
            recommend: {
                title: "最新视频",
                list: [
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【血性山谷】（2001）",
                        number: "11.3万",
                        comment: "559",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【碑】军人就是国界碑",
                        number: "55.7万",
                        comment: "501",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "戏曲 三凤求凰 1963",
                        number: "3890",
                        comment: "17",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "皮克斯全新原创动画《青春变形记》首发预告，即将全球献映",
                        number: "9.4万",
                        comment: "152",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "苦恋（1947）导演: 但杜宇/陈实-编剧: 卞勋-主演: 龚秋霞/吕玉堃",
                        number: "3627",
                        comment: "15",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "鸟笼山剿匪记-胡戈 龚格尔",
                        number: "1820",
                        comment: "2",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【动画片】医生与皇帝-1990",
                        number: "3516",
                        comment: "23",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【剧情 / 家国】乡愁 1934",
                        number: "725",
                        comment: "2",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "牧笛",
                        number: "4.7万",
                        comment: "149",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "上美影经典动画《骄傲的将军》",
                        number: "43.2万",
                        comment: "2049",
                    },
                ],
            }
        },
        esa: {
            eas: {
                title: "欧美电影",
                more: "查看更多",
                list: [
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【鼠来宝】花栗鼠变身歌坛巨星",
                        number: "16.7万",
                        comment: "1229",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【逆转王牌】高材生网络赌博深陷圈套",
                        number: "7.3万",
                        comment: "50",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【查理布朗男孩】9.2分童年经典动画",
                        number: "5.2万",
                        comment: "574",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【机器管家】豆瓣8.6科幻片，机器人爱上人类",
                        number: "3.6万",
                        comment: "258",
                    },
                ],
            },
            recommend: {
                title: "最新视频",
                list: [
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【新桥恋人】法国最贵文艺片，富家女恋上流浪汉",
                        number: "9.4万",
                        comment: "1224",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【克苏鲁系电影】星之彩 Color Out of Space",
                        number: "6650",
                        comment: "303",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【查理布朗男孩】9.2分童年经典动画",
                        number: "5.2万",
                        comment: "574",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【出逃的扫地机器人】蓝星球科幻电影周历届获奖短片",
                        number: "3.7万",
                        comment: "84",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "阿拉伯的劳伦斯",
                        number: "31.9万",
                        comment: "7493",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【银翼杀手：2022黑暗浩劫】2049前传动画短片",
                        number: "54.4万",
                        comment: "1127",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【007之择日而亡】皮尔斯·布鲁斯南、哈莉·贝瑞主演",
                        number: "53.9万",
                        comment: "6956",
                    },
                ],
            }
        },
        japan: {
            japans: {
                title: "日本电影",
                more: "查看更多",
                list: [
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【投靠女与出走男】户田惠梨香、满岛光演绎古代离婚",
                        number: "10.8万",
                        comment: "486",
                    },
                ],
            },
            recommend: {
                title: "最新视频",
                list: [
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【太阳】神木隆之介主演科幻电影",
                        number: "9.6万",
                        comment: "226",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "电影《普罗米亚》插曲「Nexus」/曲：泽野弘之、唱：Laco",
                        number: "5.3万",
                        comment: "86",
                    },
                ],
            }
        },
        else: {
            elses: {
                title: "其他国家",
                more: "查看更多",
                list: [
                    {
                        img: require("@/assets/movie.webp"),
                        name: "【逃逸速度】第三届蓝星球科幻终评12强入围作品",
                        number: "1.6万",
                        comment: "28",
                    },
                ],
            },
            recommend: {
                title: "最新视频",
                list: [
                    {
                        img: require("@/assets/movie.webp"),
                        name: "路易斯安那州的故事 Louisiana Story 弗拉哈迪 1948",
                        number: "185",
                        comment: "--",
                    },
                    {
                        img: require("@/assets/movie.webp"),
                        name: "七号房的礼物（2019）【令人泪奔的监狱童话】",
                        number: "76.1万",
                        comment: "5640",
                    },
                ],
            }
        },
    }
})