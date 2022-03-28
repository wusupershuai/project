<template>
  <div class="wrap">
    <div class="remen-box">
      <div class="txt-box">
        <span>热门推荐</span>
        <span class="paihang">
          <i class="iconfont biliicon-paixingbang"></i>
          排行榜
          <i class="iconfont biliicon-youjiantou"></i>
        </span>
      </div>
      <ul class="main-ul">
        <li v-for="(item, index) in arr1" :key="index">
          <div class="li-box">
            <img :src="item.imgUrl" alt />
            <p class="nums">
              <span>
                <i class="iconfont biliicon-danmushu"></i>
                {{item.bfnum}}
              </span>
              <span>
                <i class="iconfont biliicon-shipinbofangliang"></i>
                {{item.plnum}}
              </span>
            </p>
          </div>
          <p class="txt">{{ item.txt }}</p>
        </li>
      </ul>
    </div>
    <div class="remen-box">
      <div class="txt-box">
        <span>热门推荐</span>
        <span class="paihang">
          查看更多
          <i class="iconfont biliicon-youjiantou"></i>
        </span>
      </div>
      <ul class="main-ul">
        <li v-for="(item, index) in arr1" :key="index">
          <div class="li-box">
            <img :src="item.imgUrl" alt />
            <p class="nums">
              <span>
                <i class="iconfont biliicon-danmushu"></i>
                {{item.bfnum}}
              </span>
              <span>
                <i class="iconfont biliicon-shipinbofangliang"></i>
                {{item.plnum}}
              </span>
            </p>
          </div>
          <p class="txt">{{ item.txt }}</p>
        </li>
      </ul>
    </div>
    <div class="remen-box">
      <div class="txt-box">
        <span>热门推荐</span>
        <span class="paihang">
          查看更多
          <i class="iconfont biliicon-youjiantou"></i>
        </span>
      </div>
      <ul class="main-ul">
        <li v-for="(item, index) in arr1" :key="index">
          <div class="li-box">
            <img :src="item.imgUrl" alt />
            <p class="nums">
              <span>
                <i class="iconfont biliicon-danmushu"></i>
                {{item.bfnum}}
              </span>
              <span>
                <i class="iconfont biliicon-shipinbofangliang"></i>
                {{item.plnum}}
              </span>
            </p>
          </div>
          <p class="txt">{{ item.txt }}</p>
        </li>
      </ul>
    </div>
    <div class="remen-box">
      <div class="txt-box">
        <span>热门推荐</span>
        <span class="paihang">
          查看更多
          <i class="iconfont biliicon-youjiantou"></i>
        </span>
      </div>
      <ul class="main-ul">
        <li v-for="(item, index) in arr1" :key="index">
          <div class="li-box">
            <img :src="item.imgUrl" alt />
            <p class="nums">
              <span>
                <i class="iconfont biliicon-danmushu"></i>
                {{item.bfnum}}
              </span>
              <span>
                <i class="iconfont biliicon-shipinbofangliang"></i>
                {{item.plnum}}
              </span>
            </p>
          </div>
          <p class="txt">{{ item.txt }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
img {
  vertical-align: middle;
}

.li-box {
  position: relative;
  width: 100%;
}
.li-box i {
  font-size: 30px;
}
.li-box .nums {
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
  color: white;
  font-size: 30px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0px;
  left: 0;
}
.li-box .nums span:last-child {
  position: absolute;
  right: 10px;
  bottom: 0;
}

.txt {
  width: 100%;
  font-size: 30px;
  margin: 25px 0;
}

.wrap {
  width: 100vw;
  /* height: 100vh; */
  font-size: 36px;
}
.wrap .remen-box {
  width: 100%;
  margin-top: 10px;
}
.wrap .remen-box .txt-box {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px 25px;
}
.paihang {
  color: orange;
}
ul,
li {
  list-style: none;
}
img {
  width: 100%;
}
.main-ul {
  position: relative;
  margin-top: 15px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.main-ul li {
  width: 47.5%;
  font-size: 36px;
}
</style>
<script>
import instance from "@/api/index";
export default {
  name: "nav1",
  data() {
    return {
      arr1: null,
    };
  },
  methods: {
    async getTui() {
      let { data } = await instance.get("/music");
      this.arr1 = data.dianyin;
    },
  },
  created() {
    this.getTui();
  },
};
</script>
<style scoped>
.txt-box i {
  font-size: 36px;
}
.wrap .remen-box:first-child .paihang {
  color: #ffa726;
}
.paihang {
  color: #999;
}
</style>