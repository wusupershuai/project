<template>
  <div class="header">
    <div class="header-nav">
      <div class="navbar-left">
        <img src="@/assets/Navbar_logo.png" alt />
      </div>
      <div class="navbar-right">
        <img src="@/assets/search.png" alt />
        <img src="https://s1.hdslb.com/bfs/static/jinkela/long/images/login.png@48w_48h_1c.png" alt />
        <img src="https://s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/navOpenApp.png" alt />
      </div>
    </div>
    <ul class="header-navList">
      <li>
        <router-link to="/homepage" active-class="active">首页</router-link>
      </li>
      <li>
        <router-link to="/animation" active-class="active">动画</router-link>
      </li>
      <li>
        <router-link to="/series" active-class="active">番剧</router-link>
      </li>
      <li>
        <router-link to="/aimtron" active-class="active">国创</router-link>
      </li>
      <li>
        <router-link to="/music" active-class="active">音乐</router-link>
      </li>
      <li>
        <router-link to="/dance" active-class="active">舞蹈</router-link>
      </li>
      <li>
        <router-link to="/movie" active-class="active">电影</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
.header {
  width: 100vw;
  background: #fff;
  z-index: 9999;
  position: fixed;
  top: 0;
}
.header-nav {
  box-sizing: border-box;
  width: 100%;
  height: 75px;
  padding: 0 21px 0 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-left img {
  height: 48px;
}
.navbar-right {
  width: 273px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-right img {
  height: 41px;
}
.navbar-right img:first-child {
  height: 38px;
}
.header-navList {
  box-sizing: border-box;
  width: 100%;
  height: 68px;
  padding-left: 15px;
  overflow: scroll;
  display: flex;
}

.header-navList li a {
  width: 173px;
  height: 66px;
  color: #505050;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-navList li a.active {
  color: #fb7299;
  border-bottom: 2px solid #fb7299;
}
</style>