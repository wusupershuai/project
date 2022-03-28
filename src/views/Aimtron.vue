<template>
  <div class="Aimtron">
    <div class="Aimtron-nav">
      <router-link :to="{name:'recommend'}" active-class="active">推荐</router-link>
      <router-link :to="{name:'guoAnimation'}" active-class="active">国产动画</router-link>
      <router-link :to="{name:'guoAbout'}" active-class="active">国产原创相关</router-link>
      <router-link :to="{name:'potehi'}" active-class="active">布袋戏</router-link>
      <router-link :to="{name:'dynamicImage'}" active-class="active">动态漫.广播剧</router-link>
      <router-link :to="{name:'information'}" active-class="active">资讯</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"Aimtron"
}
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
.Aimtron-nav {
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  padding-left: 15px;
  overflow: scroll;
  display: flex;
}
.Aimtron-nav a {
  padding: 0 25px;
  font-size: 36px;
  color: #505050;
  margin-right: 36px;
  white-space: nowrap;
  display: flex;
  align-items: center;
}
.Aimtron-nav a.active {
  color: #fb7299;
  border-bottom: 2px solid #fb7299;
}
</style>