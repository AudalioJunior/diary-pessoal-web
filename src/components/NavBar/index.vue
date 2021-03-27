<template>
  <v-navigation-drawer color="#132743" app permanent v-model="component.dialog">
    <v-list>
      <v-list-item link>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title white--text">
            Alfredo
          </v-list-item-title>
          <v-list-item-subtitle class="white--text"
            >john@vuetifyjs.com</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav shaped>
      <v-list-item-group color="white">
        <v-list-item v-for="(item, i) in links" :key="i" :to="item.link" link>
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="menu"
              v-text="item.text"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { links } from "./script";
export default {
  props: {
    dialog: Boolean(),
    component: Object(),
  },
  data: () => ({
    links,
  }),
};
</script>

<style>
.menu {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  font-size: 5mm;
}
</style>