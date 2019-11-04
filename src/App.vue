<template>
  <div class="App">
    <div>Hello {{msg}}</div>
    <div>
      <router-link to="/page1">go page1</router-link>
      <router-link to="/page2">go page2</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Tang"
    };
  }
};
</script>
<style lang='sass' scoped>
.App {
  color: skyblue;
}
</style>