<template>
  <div>
    <div class="hi">{{msg}}</div>
  </div>
  
</template>

<script>
export default {
  name: "Com_Hook",
  data() {
    return {
      msg: "This is my vue Hook 请查看控制台"
    };
  },
  beforeRouteEnter: (to, from, next) => {
    console.log("准备进入模板")
    next()
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开模板")
    next()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hi {
  font-size: 26px;
  color: #ccc;
  margin-top: 230px;
}
</style>
