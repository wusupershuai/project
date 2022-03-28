<template>
  <div class="west">
    <div v-for="(item, index) in datas" :key="index">
      <p>{{ item.title }}</p>
      <ol>
        <li v-for="(i, n) in item.list" :key="n">
          <img :src="i.img" />
          <i class="el-icon-video-play">{{ i.number }}</i>
          <i class="el-icon-chat-line-round">{{ i.comment }}</i>
          <p class="name">{{ i.name }}</p>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
import instance from "../../api/index.js";
export default {
  name: "WestMovies",
  data() {
    return {
      datas: null,
    };
  },
  methods: {
    async getdata() {
      let { data } = await instance.get("/movies");
      this.datas = data.esa;
    },
  },
  created() {
    this.getdata();
  },
};
</script>
<style scoped>
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.west {
  margin-top: -20px;
}
.west div {
  width: 95%;
  margin: 30px auto;
}
.west div > p {
  display: flex;
  justify-content: space-between;
  font-size: 30px;
}
.west div > p i {
  color: gray;
  font-style: normal;
}
.west div:first-child > p i {
  color: orange;
}
.west div ol {
  font-size: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
.west div ol li {
  width: 49%;
  text-align: left;
  margin-bottom: 30px;
  position: relative;
}
.west div ol li img {
  width: 100%;
  height: 262px;
}
.west div ol li i {
  position: absolute;
}
.west div ol li .el-icon-video-play {
  top: 220px;
  left: 10px;
  color: #fff;
}
.west div ol li .el-icon-chat-line-round {
  top: 220px;
  right: 10px;
  color: #fff;
}
.west div ol li .name {
  margin: 20px 0;
}
</style>