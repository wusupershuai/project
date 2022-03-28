<template>
  <div class="japan">
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
  name: "JapanMovies",
  data() {
    return {
      datas: null,
    };
  },
  methods: {
    async getdata() {
      let { data } = await instance.get("/movies");
      this.datas = data.japan;
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
.japan {
  margin-top: -20px;
}
.japan div {
  width: 95%;
  margin: 30px auto;
}
.japan div > p {
  display: flex;
  justify-content: space-between;
  font-size: 30px;
}
.japan div > p i {
  color: gray;
  font-style: normal;
}
.japan div:first-child > p i {
  color: orange;
}
.japan div ol {
  font-size: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
.japan div ol li {
  width: 49%;
  text-align: left;
  margin-bottom: 30px;
  position: relative;
}
.japan div ol li img {
  width: 100%;
  height: 262px;
}
.japan div ol li i {
  position: absolute;
}
.japan div ol li .el-icon-video-play {
  top: 220px;
  left: 10px;
  color: #fff;
}
.japan div ol li .el-icon-chat-line-round {
  top: 220px;
  right: 10px;
  color: #fff;
}
.japan div ol li .name {
  margin: 20px 0;
}
</style>