<template>
  <div class="hi">{{msg}}</div>
</template>

<script>
export default {
  name: "hi2",
  data() {
    return {
      msg: "This is my vue page2!"
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
