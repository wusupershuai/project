<template>
  <div class="Mucic">
    <nav class="nav-box">
      <router-link class="lis" active-class="act" :to="{name:'nav1'}">推荐</router-link>
      <router-link class="lis" active-class="act" :to="{name:'nav2'}">原创音乐</router-link>
      <router-link class="lis" active-class="act" :to="{name:'nav3'}">翻唱</router-link>
      <router-link class="lis" active-class="act" :to="{name:'nav4'}">VOCALOID-UTAU</router-link>
      <router-link class="lis" active-class="act" :to="{name:'nav5'}">电音</router-link>
      <router-link class="lis" active-class="act" :to="{name:'nav6'}">演奏</router-link>
      <router-link class="lis" active-class="act" :to="{name:'nav7'}">MV</router-link>
      <router-link class="lis" active-class="act" :to="{name:'nav8'}">音乐现场</router-link>
      <router-link class="lis" active-class="act" :to="{name:'nav9'}">音乐综合</router-link>
    </nav>

    <div>
      <router-view />
    </div>
  </div>
</template>
<style scoped>
.Music {
  height: auto;
}
.act {
  color: deeppink;
  border-bottom: 2px solid deeppink;
}
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.nav-box {
  box-sizing: border-box;
  width: 100vw;
  height: 120px;
  padding-left: 30px;
  overflow: scroll;
  font-size: 36px;
  justify-content: space-between;
  display: flex;
  align-items: center;
}
.nav-box::-webkit-scrollbar {
  display: none;
}
.nav-box .lis {
  box-sizing: border-box;
  height: 100%;
  color: #505050;
  padding: 15px 25px 20px 25px;
  flex-shrink: 0;
  margin-right: 35px;
  display: flex;
  align-items: center;
}
</style>
<script>
export default {
  name: "MyMusic",
};
</script>
