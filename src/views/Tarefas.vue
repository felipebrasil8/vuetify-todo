<template>
  <div class="pa-4">
    <v-row>
      <v-col cols="12" class="mt-2">
        <v-text-field
          v-model="task"
          label="Adicione uma tarefa"
          outlined
          clearable
          hide-details
          @keyup.enter="onKeyEnter"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row v-if="loaderLayout">
      <v-col cols="12" class="text-center">
        <v-progress-circular v-if="loaderLayout" indeterminate :size="50" color="green" />
      </v-col>
    </v-row>
    <v-row v-else>
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
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Tarefas',

    components: {
      ListaTarefas,
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
      this.changeLoaderLayout(true);
      this.$store.state.done = false;
      this.$store.commit('carregaTarefas');
      setTimeout(() => {
        this.changeLoaderLayout(false);
      }, 500)
    },

    computed: {
      ...mapGetters({
        loaderLayout: 'loaderLayout',
      }),
    },
    
    methods: {
      ...mapActions({
        changeLoaderLayout: 'changeLoaderLayout',
      }),
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
