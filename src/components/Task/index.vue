<template>
  <div>
    <v-row class="justify-center">
      <v-col cols="6">
        <v-card shaped class="d-flex justify-center pa-2">
          <v-btn small class="teal ma-2 white--text" @click="addCards()">
            Adicionar</v-btn
          >
          <v-btn
            small
            @click="changeHistoric"
            class="indigo darken-4 ma-2 white--text"
          >
            Histórico</v-btn
          >
          <v-btn small class="success ma-2 white--text"> Salvar </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" v-for="item in cards" :key="item.text">
        <v-card outlined height="250" class="grow">
          <v-card-title>{{ item.title }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text>{{ item.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <historic :dialog="dialogHistoric" :changeDialog="changeHistoric" />
  </div>
</template>

<script>
import historic from "./historic/";
export default {
  components: {
    historic,
  },
  data: () => ({
    dialogHistoric: Boolean(),
    cards: Array(),
    task: {
      title: "Adicione um Título",
      description: "Descreva sua tarefa",
    },
  }),
  methods: {
    changeHistoric() {
      this.dialogHistoric = !this.dialogHistoric;
    },
    addCards() {
      let task = { ...this.task };
      this.cards.push(task);
    },
  },
};
</script>

<style>
.header {
  align-self: center;
}
.grow:hover {
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.1);
}
</style>