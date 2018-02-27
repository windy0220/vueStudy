<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <div class="nav">
      <div>
        <button @click="goBack">后退</button>
        <button @click="goNext">前进</button>
        <button @click="goHome">首页</button>
      </div>
      <router-link to="/">首页</router-link> |
      <router-link to="/r1/新闻标题/新闻内容">page1</router-link> |
      <router-link to="/redi">重定向</router-link> |
      <router-link to="/redip/重定向tit/重定向内容">带参数重定向</router-link> |
      <router-link to="/aliaslink/别名tit/别名内容">别名</router-link> |
      <router-link to="/newHome">新首页</router-link> |
      <router-link to="/hook">钩子函数</router-link> |
      <router-link to="/com_hook">组件中的钩子函数</router-link> |
      <router-link to="/errorpage">404</router-link>
    </div>
    <div class="box"> 
      
      <router-view></router-view>
      <router-view name="left" class="leftbox"></router-view>
      <transition name="ani" mode="out-in">
        <router-view name="right" class="rightbox"></router-view>
      </transition>
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: "App",
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    goNext(){
      this.$router.go(1)
    },
    goHome(){
      this.$router.push('/')
    }
  }
};
</script>

<style>
.ani-enter{
  opacity:0;
}
.ani-leave{
  opacity: 1;
}
.ani-enter-active{
  transition: opacity .5s;
}
.ani-leave-active{
  opacity: 0;
  transition:opacity .5s;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  width: 1200px;
  margin: 0 auto;
}
.leftbox {
  float: left;
  width: 200px;
  background: #ccc;
  height: 500px;
}
.rightbox {
  float: right;
  width: 1000px;
  background: #2c3e50;
  height: 500px;
}
</style>
