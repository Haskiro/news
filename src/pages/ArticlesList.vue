<template>
  <div class="articles">
    <h1>Новости</h1>
    <ul class="articles__list">
      <li class="articles__item" v-for="news in newList" :key="news.id">
        <router-link :to="{ name: 'ArticleDetails', params: { id: news.id } }">
          <img :src="`${news.preview_image}`" alt="preview image" />
          {{ news.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticlesList",
  props: {},
  data() {
    return {
      newList: [],
    };
  },
  async created() {
    await this.getNews();
  },
  methods: {
    getNews: async function () {
      await axios
        .get("/articles.json")
        .then((response) => {
          console.log(response);
          this.newList = response.data;
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
