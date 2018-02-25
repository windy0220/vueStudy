<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <div class="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/hi">page</router-link>
      <router-link :to="{ name:'hi1', params:{username:'windy'}}"> page1 </router-link>
      <router-link to="/hi/hi2">page2</router-link>
    </div>
    <div class="navinfo">this is navinfo: {{ $route.name }}</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
