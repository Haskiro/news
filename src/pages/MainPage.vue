<template>
  <div class="main">
    <menu-bar></menu-bar>
    <v-container>
      <h1 class="mb-5">Главная страница</h1>
      <my-slider :sliderList="sliderList" />
    </v-container>
  </div>
</template>

<script>
import MySlider from "../components/MySlider.vue";
import MenuBar from "../components/MenuBar.vue";
import axios from "axios";

export default {
  components: { MySlider, MenuBar },
  name: "MainPage",
  data: () => ({
    articlesList: [],
    sliderList: [],
  }),
  props: {},
  async created() {
    await this.getArticles();
    this.getSliderList();
  },
  methods: {
    getArticles: async function () {
      await axios
        .get("/articles.json")
        .then((response) => {
          this.articlesList = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getSliderList: function () {
      this.articlesList.map((article) => {
        if (article.slider) {
          this.sliderList = [...this.sliderList, article];
        }
        return;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
