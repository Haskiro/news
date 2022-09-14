<template>
  <div class="menu">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      absolute
      style="z-index: 100"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Павел Кондратьев</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <router-link :to="`${item.link}`"
              ><v-list-item-title>{{
                item.title
              }}</v-list-item-title></router-link
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  props: {
    sliderList: Array,
  },
  data: () => ({
    drawer: true,
    items: [
      { title: "Главная", icon: "mdi-home-city", link: "/" },
      { title: "Мой профиль", icon: "mdi-account", link: "/profile" },
      { title: "Галерея", icon: "mdi-wallpaper", link: "/gallery" },
      { title: "Новости", icon: "mdi-newspaper", link: "/articles" },
    ],
    mini: true,
  }),
};
</script>
