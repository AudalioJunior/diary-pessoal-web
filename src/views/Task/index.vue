<template>
  <v-container>
    <v-card>
      <v-container>
        <Task />
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import Task from "../../components/Task/";
export default {
  components: {
    Task,
  },
};
</script>

<style>
</style>