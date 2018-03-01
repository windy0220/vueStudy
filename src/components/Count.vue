
<template>
    <div>
        <h3>{{ msg }}</h3>
        <div>{{ $store.state.count }}-{{count}}</div>
        <button @click="$store.commit('add')">加</button>
        <button @click="$store.commit('cut')">减</button>
    </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState } from "vuex";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
//   computed: {
//     count() {
//       return this.$store.state.count;
//     }
//   },
//   computed:mapState({
//       count:state=>state.count
//   }),
  computed: mapState(["count"]),
  store
};
</script>

<style scoped>

</style>
