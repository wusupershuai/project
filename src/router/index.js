import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue" //首页
import Animation from "@/views/Animation.vue" //动画
import Series from "@/views/Series.vue"
import Aimtron from "@/views/Aimtron.vue" //国创
import Music from "@/views/Music.vue" //音乐
import Dance from "@/views/Dance.vue" //舞蹈
import Movies from "@/views/Movies.vue" //电影


Vue.use(VueRouter);

const routes = [
  // 首页
  {
    path: '/',
    name: "home",
    redirect: "/homepage",
    component: HomePage
  },
  {
    path: "/homepage",
    component: HomePage
  },
  // 动画
  {
    path: '/animation',
    component: Animation
  },
  // 番剧
  {
    path: '/series',
    component: Series,
    redirect: "/series/hotlists",
    children: [
      {
        path: 'hotlists',
        name: 'hotlists',
        component: () => import("@/components/Series/Hotlists.vue")
      },
      {
        path: 'cartoon',
        name: 'cartoon',
        component: () => import("@/components/Series/Cartoon.vue")
      },
      {
        path: 'fcartoon',
        name: 'fcartoon',
        component: () => import("@/components/Series/FinCartoon.vue")
      },
      {
        path: 'zixun',
        name: 'zixun',
        component: () => import("@/components/Series/ZiXun.vue")
      },
      {
        path: 'offcial',
        name: 'offcial',
        component: () => import("@/components/Series/Offcial.vue")
      }
    ]
  },
  // 国创
  {
    path: "/aimtron",
    component: Aimtron,
    redirect: "/aimtron/recommend",
    children: [
      // 推荐
      {
        path: "recommend",
        name: 'recommend',
        component: () => import("@/components/Aimtron/Recommend.vue")
      },
      // 国产动画
      {
        path: "guoAnimation",
        name: "guoAnimation",
        component: () => import("@/components/Aimtron/GuoAnimation.vue")
      },
      // 国产原创相关
      {
        path: "guoAbout",
        name: "guoAbout",
        component: () => import("@/components/Aimtron/GuoAbout.vue")
      },
      // 布袋戏
      {
        path: "potehi",
        name: "potehi",
        component: () => import("@/components/Aimtron/Potehi.vue")
      },
      // 动态漫.广播剧
      {
        path: "dynamicImage",
        name: "dynamicImage",
        component: () => import("@/components/Aimtron/DynamicImage.vue")
      },
      // 资讯
      {
        path: "information",
        name: "information",
        component: () => import("@/components/Aimtron/Information.vue")
      }
    ]
  },
  // 音乐
  {
    path: '/music',
    component: Music,
    redirect: "/music/nav1",
    children: [
      {
        path: "nav1",
        name: 'nav1',
        component: () => import("@/components/Music/nav1.vue")
      },
      {
        path: "nav2",
        name: 'nav2',
        component: () => import("@/components/Music/nav2.vue")
      },
      {
        path: "nav3",
        name: 'nav3',
        component: () => import("@/components/Music/nav3.vue")
      },
      {
        path: "nav4",
        name: 'nav4',
        component: () => import("@/components/Music/nav4.vue")
      },
      {
        path: "nav5",
        name: 'nav5',
        component: () => import("@/components/Music/nav5.vue")
      },
      {
        path: "nav6",
        name: 'nav6',
        component: () => import("@/components/Music/nav6.vue")
      },
      {
        path: "nav7",
        name: 'nav7',
        component: () => import("@/components/Music/nav7.vue")
      },
      {
        path: "nav8",
        name: 'nav8',
        component: () => import("@/components/Music/nav8.vue")
      },
      {
        path: "nav9",
        name: 'nav9',
        component: () => import("@/components/Music/nav9.vue")
      }
    ]
  },
  // 舞蹈
  {
    path: "/dance",
    component: Dance,
    redirect: "/dance/tuijian",
    children: [
      {
        path: "tuijian",
        name: 'tuijian',
        component: () => import("@/components/Dance/TuiJian.vue")
      },
      {
        path: "zhaiwu",
        name: 'zhaiwu',
        component: () => import("@/components/Dance/ZhaiWu.vue")
      },
      {
        path: "jiewu",
        name: 'jiewu',
        component: () => import("@/components/Dance/JieWu.vue")
      },
      {
        path: "mingxing",
        name: 'mingxing',
        component: () => import("@/components/Dance/MingXing.vue")
      },
      {
        path: "zhongguo",
        name: 'zhongguo',
        component: () => import("@/components/Dance/ZhongGuo.vue")
      },
      {
        path: "zhonghe",
        name: 'zhonghe',
        component: () => import("@/components/Dance/ZongHe.vue")
      },
      {
        path: "jiaocheng",
        name: 'jiaocheng',
        component: () => import("@/components/Dance/JiaoCheng.vue")
      },
    ]
  },
  // 电影
  {
    path: '/movie',
    component: Movies,
    redirect: '/movie/recom',
    children: [
      {
        path: "recom",
        name: 'recom',
        component: () => import("@/components/Movies/RecomMovies")
      },
      {
        path: "chinese",
        name: 'chinese',
        component: () => import("@/components/Movies/ChineseMovies")
      },
      {
        path: "west",
        name: 'west',
        component: () => import("@/components/Movies/WestMovies")
      },
      {
        path: "japanese",
        name: 'japanese',
        component: () => import("@/components/Movies/JapanMovies")
      },
      {
        path: "elses",
        name: 'elses',
        component: () => import("@/components/Movies/ElseMovies")
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
