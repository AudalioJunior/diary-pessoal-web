<template>
  <div>
    <v-row>
      <v-col v-for="card in header_cards" :key="card.message">
        <v-card class="sub_card"> {{ card.message }} </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="card in bootom_cards" :key="card.message">
        <v-card class="bootom_card"> {{ card.message }} </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { header_cards, bootom_cards } from "./script";
export default {
  data: () => ({
    header_cards,
    bootom_cards,
  }),
};
</script>
<style>
.sub_card {
  margin-left: 2mm;
  margin-right: 2mm;
}
.bootom_card {
  margin-left: 2mm;
  margin-right: 2mm;
}
</style>