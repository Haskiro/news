<template>
  <div class="main">
    <menu-bar></menu-bar>
    <v-container>
      <h1 class="mb-5">Главная страница</h1>
      <my-slider />
    </v-container>
  </div>
</template>

<script>
import MySlider from "../components/MySlider.vue";
import MenuBar from "../components/MenuBar.vue";

export default {
  components: { MySlider, MenuBar },
  name: "MainPage",
  data: () => ({}),
  props: {},
  created() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
