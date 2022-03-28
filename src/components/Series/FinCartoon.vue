<template>
  <div class="recommend">
    <p class="title">热门推荐</p>
    <div class="img-list">
      <li class="img-item" v-for="(item,index) in arrs" :key="index">
        <img :src="item.imgurl" alt />
        <div class="count clearfix">
          <p class="fl">
            <i class="iconfont biliicon-shipinbofangliang"></i>
            {{item.num[1]}}
          </p>
          <p class="fr">
            <i class="iconfont biliicon-danmushu"></i>
            {{item.num[2]}}
          </p>
        </div>
        <p class="title">{{item.title}}</p>
      </li>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"FinCartton",
    data(){
        return{
            img:require("@/assets/img/1.jpg"),
            arrs:null
        }
    },
    methods:{
        async getrec(){
            let {data} = await axios.get("/api/series")
            this.arrs = data.Finesh;
        }
    },
    created(){
        this.getrec()
    }
}
</script>
<style scoped>
.img-item {
  list-style: none;
}
.recommend {
  box-sizing: border-box;
  padding-left: 25px;
}
.recommend .title {
  font-size: 36px;
  margin-bottom: 25px;
}
.img-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.img-list li {
  width: 49%;
}
.img-list li img {
  width: 100%;
}
.img-list .count {
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  font-size: 30px;

  margin-top: -50px;
}
.img-list .count i {
  font-size: 30px;
}
.img-list .title {
  font-size: 30px;
  margin-top: 30px;
}
</style>