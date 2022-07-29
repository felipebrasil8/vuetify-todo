<template>
  <div>
    <v-list-item
      :class="{'blue lighten-4':tarefa.status}"
      @click="tarefa.status = !tarefa.status"
    >
      <template v-slot:default="{}">
        <v-icon class="pr-2 grabbing">
          mdi-drag-vertical
        </v-icon>

        <v-list-item-action class="pr-2">
          <v-checkbox :input-value="tarefa.status"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{'text-decoration-line-through':tarefa.status}"
          >{{tarefa.title}}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <tarefa-menu @onAction="onDispathAction" />
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>

import TarefaMenu from '@/components/tarefas/TarefaMenu.vue';

export default {
  name: 'Tarefa',

  components: {
    TarefaMenu,
  },

  props: { 
    tarefa: {
      type: Object
    },
  },

  methods: {
    onDispathAction(action) {
      this.$emit(action);
    },
  }
}
</script>

<style scoped>
  .grabbing {
    cursor: -webkit-grabbing; 
    cursor: grabbing;
  }
</style>