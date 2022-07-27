<template>
  <div>
    <v-col
          cols="12"
        >
          <v-text-field
            v-model="task"
            label="Tarefa"
            outlined
            clearable
            @keyup.enter="onKeyEnter"
          ></v-text-field>
        </v-col>
    <v-list
      flat
      subheader
    >
      <v-list-item-group
        multiple
        active-class=""
      >
        <div
          v-for="tarefa, index in this.$store.state.tarefas"
          :key="index"
        >
          <tarefa
            :tarefa="tarefa"
          />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
  import Tarefa from '../components/tarefas/Tarefa.vue'

  export default {
    name: 'Tarefas',

    components: {
      Tarefa,
    },

    data() {
      return {
        task: null,
      }
    },
    
    methods: {
      onKeyEnter() {
        if (!this.task) return;

        this.$store.commit('adiconaTarefa', this.task)
        this.task = null;
      }
    }
  }
</script>
