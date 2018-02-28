
<template>
    <div>
        <h3>{{ msg }}</h3>
        <div>{{ $store.state.count }}</div>
        <button @click="$store.commit('add')">加</button>
        <button @click="$store.commit('cut')">减</button>
    </div>
</template>

<script>
    import store from '@/vuex/store'
    export default {
        data() {
            return {
                msg: 'Hello Vuex'
            }
        },
        store
    }
</script>

<style scoped>
    
</style>