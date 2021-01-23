<template>
    <div id="app">
        <BoardHeader></BoardHeader>
        <router-view></router-view>
    </div>
</template>

<script>
import BoardHeader from '../components/Board/BoardHeader.vue'

export default {
    components: {
        'BoardHeader' : BoardHeader
    }
}
</script>

<style>
    body {
        text-align:center;
        background-color: #F6F6F8;
    }
    button {
      border-style:groove;
    }
    .shadow {
      box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
    }
</style>