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

html, body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

h1 {
  color:#43b984;
}

h2 {
  text-align: left;
}

table {
  width: 100%;
  border-collapse: collapse;
}

a {
  text-decoration: none;
  color: #333;
}

.btn {
  padding: 10px;
  background: #34445c;
  color: #fff;
}

</style>
