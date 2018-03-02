
<template>
    <div>
        <h3>{{ msg }}</h3>
        <div>{{count}}</div>
        <button @click="add(10)">加</button>
        <button @click="cut">减</button>
        <div>
            <button @click="addAction(10)">加</button>
            <button @click="cutAction">减</button>
        </div>
    </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
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
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count"])
  },
  methods: {
      ...mapMutations(["add", "cut"]),
      ...mapActions(["addAction", "cutAction"])
  },
  store
};
</script>

<style scoped>

</style>
