<template>
  <div class="pa-4">
    <v-row>
      <v-col cols="12">
        <lista-tarefas 
          @onEdit="onEdit"
          @onDelete="onDelete"
        />

        <div
          v-if="!$store.state.tarefas.length"
          class="mt-16 animate__animated animate__bounceInUp"
        >
          <center>
            <v-icon
              size="100"
              color="primary"
            >
              mdi-check
            </v-icon>

            <div class="text-h5 primary--text">
              Nenhuma tarefa
            </div>
          </center>
        </div>
      </v-col>
    </v-row>

    <modal-editar v-if="modalEdit" :tarefa="modalItem" @onCloseModal="modalEdit = false"/>
    <modal-excluir v-if="modalDelete" :tarefa="modalItem" @onCloseModal="modalDelete = false"/>
  </div>
</template>

<script>
  import ListaTarefas from '@/components/tarefas/ListaTarefas.vue'
  import ModalEditar from '@/components/modal/ModalEditar.vue'
  import ModalExcluir from '@/components/modal/ModalExcluir.vue'

  export default {
    name: 'TarefasConcluidas',

    components: {
      ListaTarefas,
      ModalEditar,
      ModalExcluir,
    },

    data() {
      return {
        done: true,
        modalEdit: false,
        modalDelete: false,
        modalItem: {
          id: '',
          title: '',
        },
      }
    },

    created() {
      this.$store.state.done = true;
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
    }
  }
</script>
