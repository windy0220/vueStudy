<template>
  <div>
    <div class="hi">{{msg}}</div>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: "hi",
  data() {
    return {
      msg: "This is my vue page!"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  font-size: 26px;
}
</style>
