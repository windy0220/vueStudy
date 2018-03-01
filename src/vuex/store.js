import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state={
    count: 3
}

const mutations = {
    add(state, n){
        state.count +=n
    },
    cut(state){
        state.count --
    }
}

export default new Vuex.Store({
    state,mutations
})
