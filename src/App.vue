<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/todolocalstorage">Local Storage Todo</router-link>
    <router-link to="/todocookies">Cookies Todo</router-link> -->
    <router-link to="/boardlocalstorage/list">Local Storage Board</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
