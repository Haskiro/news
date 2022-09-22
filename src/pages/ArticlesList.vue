<template>
  <div class="articles">
    <v-container>
      <menu-bar></menu-bar>
      <h1 class="mb-5">Новости</h1>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="article in articlesList"
          :key="article.id"
        >
          <v-card class="fill-height mx-3">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="`${article.preview_image}`"
              alt="image"
            />

            <v-card-subtitle class="pb-0">
              {{ article.data }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ article.name }}</div>

              <div>{{ article.shortDesc }}</div>
            </v-card-text>

            <v-card-actions>
              <router-link
                color="orange"
                text
                :to="{
                  name: 'ArticleDetails',
                  params: { id: article.id },
                }"
              >
                <v-btn color="orange" text> Подробности </v-btn>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MenuBar from "../components/MenuBar.vue";

export default {
  name: "ArticlesList",
  components: { MenuBar },
  props: {},
  data() {
    return {};
  },
  async created() {
    await this.$store.dispatch("getArticles");
  },
  methods: {},
  computed: {
    articlesList() {
      return this.$store.state.articlesList;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
