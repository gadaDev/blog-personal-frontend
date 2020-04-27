<template>
  <div id="app">
    <div class="main">
      <headerbar></headerbar>
    </div>
    <router-view></router-view>
    <div class="footer"></div>
  </div>
</template>
<script>
import header from "./components/main/header";
export default {
  components: {
    headerbar: header
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
