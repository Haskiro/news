<template>
  <div class="gallery">
    <v-container>
      <menu-bar></menu-bar>
      <h1 class="mb-5">Галерея</h1>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="image in imagesList"
          :key="image.id"
        >
          <v-img :src="`${image.src}`" aspect-ratio="1.2" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import MenuBar from "../components/MenuBar.vue";

export default {
  components: { MenuBar },
  name: "GalleryPage",
  data: () => ({
    imagesList: [],
  }),
  props: {},
  async created() {
    await this.getImages();
  },
  methods: {
    getImages: async function () {
      await axios
        .get("/articles.json")
        .then((response) => {
          response.data.map((article) => {
            this.imagesList = [
              ...this.imagesList,
              { src: article.full_image, id: article.id },
            ];
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
