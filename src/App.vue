<template>
  <v-app>
    <v-app-bar class="green darken-3" app>
      <v-btn color="blue lighten-2" icon @click="dialog = !dialog">
        <v-icon color="white" v-if="dialog">mdi-arrow-left-thick</v-icon>
        <v-icon color="white" v-else>mdi-arrow-right-thick</v-icon>
      </v-btn>
       <p class="tilte">Green To Do</p> 
    </v-app-bar>
  <NavBar :dialog="dialog"/>
    <v-main class="light-green lighten-5">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app class="green darken-3">
      <!-- -->
    </v-footer>
  </v-app>
</template>
<script>
import NavBar from "./components/NavBar/"
export default {
  components:{
    NavBar
  },
  data: () => ({
    dialog: Boolean()
  })
};
</script>

<style>
.tilte{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: white;
  margin-top: 0.5cm;
  size: 1cm;
}
</style>