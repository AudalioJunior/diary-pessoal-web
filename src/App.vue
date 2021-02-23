<template>
  <v-app>
    <NavBar :component="this" />
    <v-app-bar color="#132743" app>
      <div>
        <v-img src="./assets/foguete.png" width="50"></v-img>
      </div>
      <p class="mt-4 ml-2 white--text">To infinity and beyond</p>
      <v-spacer></v-spacer> <v-icon color="white">mdi-logout</v-icon>
    </v-app-bar>
    <v-main app class="yellow lighten-3">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app color="#132743"> </v-footer>
  </v-app>
</template>
<script>
import NavBar from "./components/NavBar/";
export default {
  components: {
    NavBar,
  },
  data: () => ({
    dialog: Boolean(),
  }),
};
</script>

<style>
.tilte {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: white;
  margin-top: 0.5cm;
  size: 1cm;
}
</style>