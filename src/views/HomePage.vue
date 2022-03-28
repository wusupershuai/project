<template>
  <div class="homepage">
    <ul class="homepage-list">
      <li v-for="item in homeData" :key="item.id">
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
  </div>
</template>

<script>
import axios from "axios"
export default {
  name:"HomePage",
  data(){
    return {
      homeData:null
    }
  },
  methods:{
    async getHomePage(){
      let {data} = await axios.get("/api/homepage")
      this.homeData = data.homeData
    }
  },
  created(){
    this.getHomePage()
  }
}
</script>

<style scoped>
.homepage-list {
  box-sizing: border-box;
  width: 100%;
  padding: 0 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.homepage-list li {
  box-sizing: border-box;
  width: 50%;
  padding: 13px 8px;
  font-size: 19px;
}
.homepage-list li > img {
  width: 100%;
}
.homepage-list li .count {
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
.homepage-list li .count p {
  display: flex;
}
.homepage-list li .count img {
  width: 25px;
  margin-right: 8px;
}
.homepage-list li .title {
  width: 100%;
  /* height: 50px; */
  color: #212121;
  font-size: 30px;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>