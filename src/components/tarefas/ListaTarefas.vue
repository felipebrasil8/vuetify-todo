<template>
  <drop-list :items="tarefasComputadas" @reorder="onChangePosition($event)">
    <template v-slot:item="{item, reorder}">
      <drag :key="item.id" :data="item">
        <tarefa
          :tarefa="item"
          style="background-color: white"
          :style="reorder ? {borderLeft: '2px solid #1976D2', marginLeft:'-2px'} : {}"
          @onEdit="$emit('onEdit', item)"
          @onDelete="$emit('onDelete', item)"
        />
        <v-divider />
      </drag>
    </template>
  </drop-list>
</template>

<script>
import Tarefa from '@/components/tarefas/Tarefa.vue'
import {Drag,DropList} from "vue-easy-dnd";

export default {
  components: {
    Tarefa,
    Drag,
    DropList,
  },
  data: function () {
    return {
    };
  },
  computed: {
    tarefasComputadas() {
      return this.$store.state.tarefas;
    }
  },
  methods: {
    onChangePosition($event) {
      $event.apply(this.tarefasComputadas);
      this.$store.commit('reordenaTarefas', [ ...this.tarefasComputadas]);
    }
  }
};
</script>

<style scoped>

</style>
