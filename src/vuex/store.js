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

const getters = {
    count:(state)=> state.count +=100
}

export default new Vuex.Store({
    state,mutations,getters
})
