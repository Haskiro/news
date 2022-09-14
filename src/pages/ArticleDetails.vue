<template>
  <div class="article-details">
    <v-container>
      <menu-bar></menu-bar>
      <h1 class="article-details__name mb-5">Название: {{ articles.name }}</h1>
      <v-img
        class="white--text align-end rounded-lg mb-3"
        height="300px"
        max-width="400px"
        :src="`${articles.full_image}`"
        alt="image"
      />
      <p class="article-details__description mb-3">
        Описание: {{ articles.desc }}
      </p>
      <p class="article-datails__date">Дата: {{ articles.date }}</p>
      <h2>Комментарии</h2>
      <v-list>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-item>
              <v-card class="mx-auto" color="#26c6da" dark max-width="400">
                <v-card-text class="text-h5 font-weight-bold">
                  "Turns out semicolon-less style is easier and safer in TS
                  because most gotcha edge cases are type invalid as well."
                </v-card-text>

                <v-card-actions>
                  <v-list-item class="grow">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        class="elevation-6"
                        alt=""
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Evan You</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-card-actions>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-list>
      <h2>Оставить комментарий</h2>
      <form>
        <v-text-field
          v-model="comment"
          :error-messages="commentErrors"
          label="Текст комментария"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Do you agree?"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>

        <v-btn class="mr-4" @click="submit"> Отправить </v-btn>
        <v-btn @click="clear"> Очистить </v-btn>
      </form>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import MenuBar from "../components/MenuBar.vue";

export default {
  name: "ArticleDetails",
  components: { MenuBar },
  props: ["id"],
  data() {
    return {
      articles: [],
    };
  },
  async created() {
    await this.getArticlesById();
  },
  methods: {
    getArticlesById: async function () {
      await axios
        .get("/articles.json")
        .then((response) => {
          this.articles = response.data[this.id - 1];
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
