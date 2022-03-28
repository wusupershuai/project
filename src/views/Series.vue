<template>
  <div>
    <div id="contianer">
      <div class="nav-child">
        <router-link :to="{name:'hotlists'}" active-class="active">推荐</router-link>
        <router-link :to="{name:'cartoon'}" active-class="active">连载动画</router-link>
        <router-link :to="{name:'zixun'}" active-class="active">资讯</router-link>
        <router-link :to="{name:'fcartoon'}" active-class="active">完结动画</router-link>
        <router-link :to="{name:'offcial'}" active-class="active">官方延伸</router-link>
      </div>
    </div>
    <router-view></router-view>
    <!-- <My-footer></My-footer> -->
  </div>
</template>
<script>

export default {
  name: "SeriesView",
};
</script>
<style scoped>
#contianer {
  width: 100%;
  height: 120px;
}
.nav-child {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-left: 25px;
  display: flex;
  align-items: center;
}
.nav-child a {
  white-space: nowrap;
  font-size: 36px;
  color: #505050;
  padding: 0 25px 20px 25px;
  margin-right: 36px;
}
.nav-child a.active {
  color: #fb7299;
  border-bottom: 3px solid #fb7299;
}
/* .nav-child a span {
  padding: 10px 0;
}
.nav-child a:hover span {
  color: #fb7299;
  border-bottom: 3px solid #fb7299;
}
.nav-child a span.active {
  color: #fb7299;
  border-bottom: 3px solid #fb7299;
} */
</style>
