import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    count: 3
}

const mutations = {
    add(state, n) {
        state.count += n
    },
    cut(state) {
        state.count--
    }
}

const getters = {
    count: (state) => state.count += 100
}

const actions = {
    addAction(context) {
        context.commit('add', 10),
        setTimeout(()=>context.commit('add',10), 5000),
        console.log("我比add先执行")
    },
    cutAction({commit }) {
        commit('cut')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
