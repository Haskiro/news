<template>
  <v-carousel>
    <v-carousel-item
      v-for="article in sliderList"
      :key="article.id"
      :src="article.full_image"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "MySlider",
  data: () => ({
    sliderList: [],
  }),

  computed: {},

  async created() {
    await this.$store.dispatch("getArticles");
    this.sliderList = this.$store.getters.getSliderList;
  },
};
</script>
