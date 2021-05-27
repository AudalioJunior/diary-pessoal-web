<template>
  <v-dialog v-model="dialog" max-width="250" height="300">
    <v-card height="200">
      <v-card-title>Montando Histórico</v-card-title>
      <div class="body">
        <div class="spinner"></div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    changeDialog: Function,
  },
};
</script>

<style>
.body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
}
.spinner {
  margin-top: 15px;
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: red;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>