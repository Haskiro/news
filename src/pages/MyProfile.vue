<template>
  <v-container>
    <menu-bar></menu-bar>
    <div class="profile">
      <h1 class="mb-5">Мой профиль</h1>
      <div class="d-inline-flex align-center mb-3">
        <v-avatar color="red me-3">
          <span class="white--text text-h5">PK</span>
        </v-avatar>
        <h2>{{ user.name + " " + user.surname }}</h2>
      </div>
      <p class="mb-3">Дата рождения: {{ user.dateOfBirth }}</p>
      <p class="mb-5" style="max-width: 70ch">{{ user.desc }}</p>
      <router-link to="/edit-profile"
        ><v-btn text color="primary" outlined class="text-decoration-none">
          Редактировать профиль
        </v-btn></router-link
      >
    </div>
  </v-container>
</template>

<script>
import MenuBar from "../components/MenuBar.vue";

export default {
  components: { MenuBar },
  name: "MyProfile",
  data: () => ({
    user: {
      name: "Павел",
      surname: "Кондратьев",
      dateOfBirth: "01.01.01",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sapiente itaque nesciunt hic totam cumque, aliquam vitae nihil suscipit aperiam?",
    },
  }),
  props: {},
  async created() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
