<template>
  <v-dialog max-width="400" persistent v-model="dialog">
    <v-card>
      <v-card-title>Descreva sua tarefa</v-card-title>
      <v-divider></v-divider>
      <v-container>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                filled
                v-model="taskDate.title"
                dense
                label="Título"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                auto-grow
                filled
                v-model="taskDate.description"
                label="Descrição da atividade"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="error" @click="changeDialog"> Cancelar</v-btn>
          <v-btn class="success" @click="submit">Confirmar</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    changeDialog: Function,
    refreshTask: Function,
  },
  data: () => ({
    taskDate: {
      title: String(),
      description: String(),
    },
  }),
  methods: {
    submit() {
      let data = this.taskDate;
      this.refreshTask(data);
    },
  },
};
</script>

<style>
</style>