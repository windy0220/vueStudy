<template>
  <div class="rightbox">
    <div class="hi">{{msg}}</div>
    <div class="tit">{{ $route.params.newsTit }}</div>
    <div class="content">{{ $route.params.newsContent }}</div>
  </div>
  
</template>

<script>
export default {
  name: "right2",
  data() {
    return {
      msg: "This is my vue right2!"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rightbox{
  color: #fff;
}
.hi {
  font-size: 26px;
  color: #fff;
  margin-top: 240px;
}
</style>
