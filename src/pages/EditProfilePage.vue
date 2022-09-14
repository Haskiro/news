<template>
  <v-container>
    <menu-bar></menu-bar>
    <div class="edit-profile">
      <h1 class="text-center mb-5">Редактирование профиля</h1>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4" sm="6" offset-md="4" offset-sm="3">
              <v-text-field label="Имя"></v-text-field>
              <v-text-field label="Фамилия"></v-text-field>
              <v-text-field label="Почта"></v-text-field>
              <v-textarea color="teal">
                <template v-slot:label>
                  <div>Bio <small>(optional)</small></div>
                </template>
              </v-textarea>
              <v-text-field
                type="password"
                name="old-password"
                label="Старый пароль"
                hint="At least 8 characters"
                counter
              ></v-text-field>
              <v-text-field
                type="password"
                name="new-password"
                class="mb-5"
                label="Новый пароль"
                hint="At least 8 characters"
                counter
              ></v-text-field>
              <v-btn text color="primary" outlined> Сохранить </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </v-container>
</template>

<script>
import MenuBar from "../components/MenuBar.vue";

export default {
  components: { MenuBar },
  name: "EditProgilePage",
  data: () => ({}),
  props: {},
  async created() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
