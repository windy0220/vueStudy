<template>
  <div>
    <div class="hi">{{msg}}</div>
  </div>
  
</template>

<script>
export default {
  name: "right1",
  data() {
    return {
      msg: "This is my vue right1!"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  font-size: 26px;
  color: #fff;
  margin-top: 230px;
}
</style>
