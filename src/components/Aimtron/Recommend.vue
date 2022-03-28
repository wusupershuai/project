<template>
  <div class="recommend">
    <!-- 一个一个写的 -->
    <!-- 热门推荐 -->
    <!-- <div class="content">
      <div class="content-title">
        <span>热门推荐</span>
        <p>
          <img src="@/assets/bangdan.png" alt />
          <span>排行榜</span>
          <img src="@/assets/jiantou.png" alt />
        </p>
      </div>
      <ul class="content-list">
        <li v-for="item in hot" :key="item.id">
          <img :src="item.imgsrc" />
          <div class="count">
            <p>
              <img src="@/assets/play.png" alt />
              <span>{{item.play}}</span>
            </p>
            <p>
              <img src="@/assets/number.png" alt />
              <span>{{item.number}}</span>
            </p>
          </div>
          <p class="title">{{item.title}}</p>
        </li>
      </ul>
    </div>-->

    <!-- 国产动画 -->
    <!-- <div class="content">
      <div class="content-title">
        <span>国产动画</span>
        <p>
          <span>查看更多</span>
          <img src="@/assets/jiantou.png" alt />
        </p>
      </div>
      <ul class="content-list">
        <li v-for="item in hot" :key="item.id">
          <img :src="item.imgsrc" />
          <div class="count">
            <p>
              <img src="@/assets/play.png" alt />
              <span>{{item.play}}</span>
            </p>
            <p>
              <img src="@/assets/number.png" alt />
              <span>{{item.number}}</span>
            </p>
          </div>
          <p class="title">{{item.title}}</p>
        </li>
      </ul>
    </div>-->

    <!-- 国产原创相关 -->
    <!-- <div class="content">
      <div class="content-title">
        <span>国产原创相关</span>
        <p>
          <span>查看更多</span>
          <img src="@/assets/jiantou.png" alt />
        </p>
      </div>
      <ul class="content-list">
        <li v-for="item in hot" :key="item.id">
          <img :src="item.imgsrc" />
          <div class="count">
            <p>
              <img src="@/assets/play.png" alt />
              <span>{{item.play}}</span>
            </p>
            <p>
              <img src="@/assets/number.png" alt />
              <span>{{item.number}}</span>
            </p>
          </div>
          <p class="title">{{item.title}}</p>
        </li>
      </ul>
    </div>-->

    <!-- 布袋戏 -->
    <!-- <div class="content">
      <div class="content-title">
        <span>布袋戏</span>
        <p>
          <span>查看更多</span>
          <img src="@/assets/jiantou.png" alt />
        </p>
      </div>
      <ul class="content-list">
        <li v-for="item in hot" :key="item.id">
          <img :src="item.imgsrc" />
          <div class="count">
            <p>
              <img src="@/assets/play.png" alt />
              <span>{{item.play}}</span>
            </p>
            <p>
              <img src="@/assets/number.png" alt />
              <span>{{item.number}}</span>
            </p>
          </div>
          <p class="title">{{item.title}}</p>
        </li>
      </ul>
    </div>-->

    <!-- 动态漫.广播剧 -->
    <!-- <div class="content">
      <div class="content-title">
        <span>动态漫.广播剧</span>
        <p>
          <span>查看更多</span>
          <img src="@/assets/jiantou.png" alt />
        </p>
      </div>
      <ul class="content-list">
        <li v-for="item in hot" :key="item.id">
          <img :src="item.imgsrc" />
          <div class="count">
            <p>
              <img src="@/assets/play.png" alt />
              <span>{{item.play}}</span>
            </p>
            <p>
              <img src="@/assets/number.png" alt />
              <span>{{item.number}}</span>
            </p>
          </div>
          <p class="title">{{item.title}}</p>
        </li>
      </ul>
    </div>-->

    <!-- 资讯 -->
    <!-- <div class="content">
      <div class="content-title">
        <span>资讯</span>
        <p>
          <span>查看更多</span>
          <img src="@/assets/jiantou.png" alt />
        </p>
      </div>
      <ul class="content-list">
        <li v-for="item in hot" :key="item.id">
          <img :src="item.imgsrc" />
          <div class="count">
            <p>
              <img src="@/assets/play.png" alt />
              <span>{{item.play}}</span>
            </p>
            <p>
              <img src="@/assets/number.png" alt />
              <span>{{item.number}}</span>
            </p>
          </div>
          <p class="title">{{item.title}}</p>
        </li>
      </ul>
    </div>-->

    <!-- 使用循环写的 -->
    <div class="content" v-for="item in recommend" :key="item.id">
      <div class="content-title">
        <span>{{item.text}}</span>
        <p>
          <img :src="item.hotImgsrc" alt />
          <span>查看更多</span>
          <img src="@/assets/jiantou.png" alt />
        </p>
      </div>
      <ul class="content-list">
        <li v-for="listItem in item.data" :key="listItem.id">
          <img :src="listItem.imgsrc" />
          <div class="count">
            <p>
              <img src="@/assets/play.png" alt />
              <span>{{listItem.play}}</span>
            </p>
            <p>
              <img src="@/assets/number.png" alt />
              <span>{{listItem.number}}</span>
            </p>
          </div>
          <p class="title">{{listItem.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"Recommend",
    data(){
        return {
          // hot:null,
          recommend:null,
        }
    },
    methods:{
        async getAimtron(){
          //  let {data}  = await axios.get("/api/aimrton")
          //  this.hot = data.recommend.hot

          let {data} = await axios.get("/api/aimrton")
          this.recommend = data.recommend;
        }
    },
    created(){
      this.getAimtron();
    }
}
</script>

<style scoped>
.recommend {
  box-sizing: border-box;
  width: 100%;
  padding: 16px 0px 0 0px;
}
.content {
  margin-bottom: 34px;
}
.content-title {
  box-sizing: border-box;
  width: 100%;
  font-size: 30px;
  padding: 8px 20px 8px 25px;
  display: flex;
  justify-content: space-between;
  color: #000;
}
.content:first-child .content-title p {
  color: #ffa726;
}
.content-title p {
  font-size: 30px;
  color: #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-title p img {
  margin-right: 5px;
  height: 30px;
}
.content-title p span {
  margin-right: 5px;
}
.content-list {
  box-sizing: border-box;
  width: 100%;
  padding: 0 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.content-list li {
  box-sizing: border-box;
  width: 50%;
  padding: 13px 8px;
  font-size: 19px;
}
.content-list li > img {
  width: 100%;
}
.content-list li .count {
  box-sizing: border-box;
  width: 100%;
  height: 43px;
  padding: 0 10px;
  font-size: 30px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -45px;
}
.content-list li .count p {
  display: flex;
}
.content-list li .count img {
  width: 25px;
  margin-right: 8px;
}
.content-list li .title {
  width: 100%;
  font-size: 30px;
  color: #212121;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>