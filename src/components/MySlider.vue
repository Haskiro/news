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
  props: {
    sliderList: Array,
  },
  data: () => ({}),
};
</script>
