<template>
  <div class="movies">
    <div class="nav">
      <router-link :to="{name:'recom'}" active-class="pitch">推荐</router-link>
      <router-link :to="{name:'chinese'}" active-class="pitch">华语电影</router-link>
      <router-link :to="{name:'west'}" active-class="pitch">欧美电影</router-link>
      <router-link :to="{name:'japanese'}" active-class="pitch">日本电影</router-link>
      <router-link :to="{name:'elses'}" active-class="pitch">其他国家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
    name:"MoviesView",
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.movies {
  width: 100vw;
}
.movies .nav {
  box-sizing: border-box;
  overflow: scroll;
  white-space: nowrap;
  height: 120px;
  padding-left: 30px;
  display: flex;
  align-items: center;
}
::-webkit-scrollbar {
  display: none;
}
.movies .nav a {
  font-size: 36px;
  color: #505050;
  padding: 0 25px 20px 25px;
  margin-right: 35px;
}
.movies .nav .pitch {
  color: pink;
  border-bottom: 3px solid pink;
}
</style>