<template>
<div>
  <div class="hi">{{msg}}</div>
</div>

</template>

<script>
export default {
  name: "Error",
  data() {
    return {
      msg: "Error 404"
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
