<template>
  <div class="animation">
    <div class="header">
      <van-tabs
        v-model:active="active"
        line-width="100px"
        title-inactive-color="#505050"
        title-active-color="#fb7299"
      >
        <van-tab v-for="(item, index) in animationData" :title="item.info" :key="index">
          <div class="recommend" v-for="(rItem, rIndex) in item.recommendData" :key="rIndex">
            <div class="hot-recommend">
              <h2 class="title">{{ rItem.text }}</h2>
              <div :class="rItem.ranking ? 'ranking' : 'ranking more'" v-show="item.info == '推荐'">
                <van-icon v-show="rItem.ranking" name="bar-chart-o" />
                <span class="text">
                  {{
                  rItem.ranking ? "排行榜" : "查看更多"
                  }}
                </span>
                <van-icon name="arrow" />
              </div>
            </div>
            <van-grid :gutter="10" :column-num="2">
              <van-grid-item v-for="(dItem, dIndex) in rItem.data" :key="dIndex">
                <div class="content">
                  <img :src="dItem.imgsrc" />
                  <div class="preson-num">
                    <div class="watch-num">
                      <van-icon name="play-circle-o" />
                      <span>{{ dItem.play }}</span>
                    </div>
                    <div class="comments-num">
                      <van-icon name="comment-o" />
                      <span>{{ dItem.number }}万</span>
                    </div>
                  </div>
                </div>
                <h3 class="recommend-title">
                  {{
                  dItem.title.length > 20 ? dItem.title.slice(0,28) + "..." : dItem.title
                  }}
                </h3>
              </van-grid-item>
            </van-grid>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import instance from "@/request/api";
export default {
  data() {
    return {
      active: 0,
      animationData: null,
    };
  },
  methods: {
    async getAnimation() {
      let { data } = await instance.get("/animation");
      this.animationData = data;
    },
  },
  created() {
    this.getAnimation();
  },
};
</script>

<style scoped>
.animation {
  font-size: 36px;
}
.animation >>> span {
  font-size: 36px;
}
.animation >>> a {
  font-size: 36px;
}
.animation >>> .van-tabs__line {
  background: #fb7299;
}
.animation >>> .van-tab__text {
  padding: 32px;
}
.animation >>> .van-tabs--line .van-tabs__wrap {
  height: 80px;
}
.animation .recommend {
  padding: 0 10px;
  padding-top: 20px;
}
.hot-recommend {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
}
.hot-recommend .title {
  font-size: 38px;
  font-weight: normal;
}
.recommend .ranking {
  color: #ffa726;
}
.recommend .ranking.more {
  color: #999;
}
.recommend .ranking .text {
  margin: 0 10px;
}
.recommend-title {
  font-weight: normal;
  font-size: 30px;
  margin-top: 12px;
}
.content {
  position: relative;
}
.content img {
  width: 100%;
  height: 100%;
}
.preson-num {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  padding: 0 12px;
  justify-content: space-between;
  box-sizing: border-box;
  color: #fff;
}
.watch-num span,
.animation >>> .comments-num span {
  font-size: 30px;
  margin: 0 10px;
}
</style>