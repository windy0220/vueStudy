<template>
  <div>
    <div>
      <ul>
        <li class="list">menu1</li>
        <li class="list">menu2</li>
        <li class="list">menu3</li>
        <li class="list">menu4</li>
        <li class="list">menu5</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: "left",
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
