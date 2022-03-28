<template>
  <div class="recom">
    <div v-for="(item, index) in datas" :key="index">
      <p>
        {{ item.title
        }}
        <i :class="item.icon">
          {{ item.more }}
          <i class="el-icon-arrow-right"></i>
        </i>
      </p>
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
  name: "RecomMovies",
  data() {
    return {
      datas: null,
    };
  },
  methods: {
    async getdata() {
      let { data } = await instance.get("/movies");
      this.datas = data.recom;
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
.recom {
  margin-top: -20px;
}
.recom div {
  width: 95%;
  margin: 30px auto;
}
.recom div > p {
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.recom div > p i {
  color: gray;
  font-style: normal;
}
.recom div:first-child > p i {
  color: orange;
}
.recom div ol {
  font-size: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
.recom div ol li {
  width: 49%;
  text-align: left;
  margin-bottom: 30px;
  position: relative;
}
.recom div ol li img {
  width: 100%;
  height: 262px;
}
.recom div ol li i {
  position: absolute;
}
.recom div ol li .el-icon-video-play {
  top: 220px;
  left: 10px;
  color: #fff;
}
.recom div ol li .el-icon-chat-line-round {
  top: 220px;
  right: 10px;
  color: #fff;
}
.recom div ol li .name {
  margin: 20px 0;
}
</style>