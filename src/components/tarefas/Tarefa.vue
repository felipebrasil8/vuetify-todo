<template>
  <div>
    <v-list-item
      :class="{'blue lighten-4':tarefa.status}"
      @click="tarefa.status = !tarefa.status"
    >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="tarefa.status"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{'text-decoration-line-through':tarefa.status}"
          >{{tarefa.title}}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon @click.stop="onDeleteTarefa(tarefa.id)">
            <v-icon color="red lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'Tarefa',

  props: { 
    tarefa: {
      type: Object
    },
  },

  methods: {
    onDeleteTarefa(id) {
      this.$store.commit('removeTarefa', id);
    }
  }
}
</script>