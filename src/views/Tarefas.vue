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
            @onEdit="onEdit(tarefa)"
            @onDelete="onDelete(tarefa)"
          />
        </div>
      </v-list-item-group>
    </v-list>

    <modal-editar v-if="modalEdit" :tarefa="modalItem" @onCloseModal="modalEdit = false"/>
    <modal-excluir v-if="modalDelete" :tarefa="modalItem" @onCloseModal="modalDelete = false"/>
  </div>
</template>

<script>
  import Tarefa from '@/components/tarefas/Tarefa.vue'
  import ModalEditar from '@/components/modal/ModalEditar.vue'
  import ModalExcluir from '@/components/modal/ModalExcluir.vue'

  export default {
    name: 'Tarefas',

    components: {
      Tarefa,
      ModalEditar,
      ModalExcluir,
    },

    data() {
      return {
        task: null,
        modalEdit: false,
        modalDelete: false,
        modalItem: {
          id: '',
          title: '',
        },
      }
    },

    created() {
      this.$store.commit('carregaTarefas');
    },
    
    methods: {
      onEdit(tarefa) {
        this.modalItem = {
          ...tarefa
        }
        this.modalEdit = true;
      },
      onDelete(tarefa) {
        this.modalItem = {
          ...tarefa
        }
        this.modalDelete = true;
      },
      onKeyEnter() {
        if (!this.task) return;

        this.$store.dispatch('adiconaTarefa', this.task)
        this.task = null;
      }
    }
  }
</script>
