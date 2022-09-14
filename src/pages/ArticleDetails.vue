<template>
  <div class="article-details">
    <p class="article-details__name">Название: {{ news.name }}</p>
    <img :src="`${news.full_image}`" alt="image" />
    <p class="article-details__description">Описание: {{ news.desc }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleDetails",
  props: ["id"],
  data() {
    return {
      news: [],
    };
  },
  async created() {
    await this.getNewsById();
  },
  methods: {
    getNewsById: async function () {
      await axios
        .get("/articles.json")
        .then((response) => {
          console.log(response);
          this.news = response.data[this.id - 1];
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
