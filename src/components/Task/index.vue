<template>
  <div>
    <v-row class="justify-center">
      <v-col cols="6">
        <v-card class="d-flex justify-center pa-2">
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
        <v-card outlined height="250" class="grow" @click="changeDescription">
          <v-card-title>{{ item.title }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text>{{ item.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <historic :dialog="dialogHistoric" :changeDialog="changeHistoric" />
    <taskDescription
      :dialog="dialogDescription"
      :changeDialog="changeDescription"
      :refreshTask="refreshCard"
    />
  </div>
</template>

<script>
import historic from "./historic/";
import taskDescription from "./taskDescription/";
export default {
  components: {
    historic,
    taskDescription,
  },
  data: () => ({
    dialogHistoric: Boolean(),
    dialogDescription: Boolean(),
    cards: Array(),
    task: {
      id: 1,
      title: "Adicione um Título",
      description: "Descreva sua tarefa",
    },
  }),
  methods: {
    changeHistoric() {
      this.dialogHistoric = !this.dialogHistoric;
    },
    changeDescription() {
      this.dialogDescription = !this.dialogDescription;
    },
    refreshCard(item) {
      let task = { ...item };
      this.cards[0] = task;

      console.log(this.cards);
      this.changeDescription();
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