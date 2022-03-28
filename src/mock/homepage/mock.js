let Mock = require("mockjs");
Mock.mock("/api/homepage", {
    homeData: [
        { id: 1, imgsrc: require("@/assets/homepage1.webp"), play: "66.6万", number: "384", title: "摆烂天花板" },
        { id: 2, imgsrc: require("@/assets/homepage2.webp"), play: "127.6万", number: "2368", title: "海贼王1044话情报来了！人人果实·幻兽种·尼卡型态！5档路飞能力全面觉醒，幻兽种果实再添新设定！" },
        { id: 3, imgsrc: require("@/assets/homepage3.webp"), play: "595.7万", number: "1.2万", title: "⚡️ 中 国 人 不 蹦 洋 迪 ⚡️" },
        { id: 4, imgsrc: require("@/assets/homepage4.webp"), play: "469.7万", number: "1105", title: "五个稀奇古怪的网站，浪费你46秒时间。" },
        { id: 5, imgsrc: require("@/assets/homepage5.jpg"), play: "289.7万", number: "712", title: "【别打了，牛牛坏掉了】" },
        { id: 6, imgsrc: require("@/assets/homepage6.webp"), play: "189.9万", number: "4164", title: "土坑酸菜被曝光以后，我在承受失业之苦" },
        { id: 7, imgsrc: require("@/assets/homepage7.webp"), play: "20.2万", number: "346", title: "事实证明，善良是不分种族的。" },
        { id: 8, imgsrc: require("@/assets/homepage8.webp"), play: "196万", number: "1.1万", title: "给老弟做了一个加油打气机器人" },
        { id: 9, imgsrc: require("@/assets/homepage1.webp"), play: "66.6万", number: "384", title: "摆烂天花板" },
        { id: 10, imgsrc: require("@/assets/homepage2.webp"), play: "127.6万", number: "2368", title: "海贼王1044话情报来了！人人果实·幻兽种·尼卡型态！5档路飞能力全面觉醒，幻兽种果实再添新设定！" },
        { id: 11, imgsrc: require("@/assets/homepage3.webp"), play: "595.7万", number: "1.2万", title: "⚡️ 中 国 人 不 蹦 洋 迪 ⚡️" },
        { id: 12, imgsrc: require("@/assets/homepage4.webp"), play: "469.7万", number: "1105", title: "五个稀奇古怪的网站，浪费你46秒时间。" },
        { id: 13, imgsrc: require("@/assets/homepage5.jpg"), play: "289.7万", number: "712", title: "【别打了，牛牛坏掉了】" },
        { id: 14, imgsrc: require("@/assets/homepage6.webp"), play: "189.9万", number: "4164", title: "土坑酸菜被曝光以后，我在承受失业之苦" },
        { id: 15, imgsrc: require("@/assets/homepage7.webp"), play: "20.2万", number: "346", title: "事实证明，善良是不分种族的。" },
        { id: 16, imgsrc: require("@/assets/homepage8.webp"), play: "196万", number: "1.1万", title: "给老弟做了一个加油打气机器人" },
        { id: 17, imgsrc: require("@/assets/homepage1.webp"), play: "66.6万", number: "384", title: "摆烂天花板" },
        { id: 18, imgsrc: require("@/assets/homepage2.webp"), play: "127.6万", number: "2368", title: "海贼王1044话情报来了！人人果实·幻兽种·尼卡型态！5档路飞能力全面觉醒，幻兽种果实再添新设定！" },
        { id: 19, imgsrc: require("@/assets/homepage3.webp"), play: "595.7万", number: "1.2万", title: "⚡️ 中 国 人 不 蹦 洋 迪 ⚡️" },
        { id: 20, imgsrc: require("@/assets/homepage4.webp"), play: "469.7万", number: "1105", title: "五个稀奇古怪的网站，浪费你46秒时间。" },
        { id: 21, imgsrc: require("@/assets/homepage5.jpg"), play: "289.7万", number: "712", title: "【别打了，牛牛坏掉了】" },
        { id: 22, imgsrc: require("@/assets/homepage6.webp"), play: "189.9万", number: "4164", title: "土坑酸菜被曝光以后，我在承受失业之苦" },
        { id: 23, imgsrc: require("@/assets/homepage7.webp"), play: "20.2万", number: "346", title: "事实证明，善良是不分种族的。" },
        { id: 24, imgsrc: require("@/assets/homepage8.webp"), play: "196万", number: "1.1万", title: "给老弟做了一个加油打气机器人" },
        { id: 25, imgsrc: require("@/assets/homepage1.webp"), play: "66.6万", number: "384", title: "摆烂天花板" },
        { id: 26, imgsrc: require("@/assets/homepage2.webp"), play: "127.6万", number: "2368", title: "海贼王1044话情报来了！人人果实·幻兽种·尼卡型态！5档路飞能力全面觉醒，幻兽种果实再添新设定！" },
        { id: 27, imgsrc: require("@/assets/homepage3.webp"), play: "595.7万", number: "1.2万", title: "⚡️ 中 国 人 不 蹦 洋 迪 ⚡️" },
        { id: 28, imgsrc: require("@/assets/homepage4.webp"), play: "469.7万", number: "1105", title: "五个稀奇古怪的网站，浪费你46秒时间。" },
        { id: 29, imgsrc: require("@/assets/homepage5.jpg"), play: "289.7万", number: "712", title: "【别打了，牛牛坏掉了】" },
        { id: 30, imgsrc: require("@/assets/homepage6.webp"), play: "189.9万", number: "4164", title: "土坑酸菜被曝光以后，我在承受失业之苦" },
        { id: 31, imgsrc: require("@/assets/homepage7.webp"), play: "20.2万", number: "346", title: "事实证明，善良是不分种族的。" },
        { id: 32, imgsrc: require("@/assets/homepage8.webp"), play: "196万", number: "1.1万", title: "给老弟做了一个加油打气机器人" },
    ]
})