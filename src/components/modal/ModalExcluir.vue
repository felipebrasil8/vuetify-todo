<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Excluir
        </v-card-title>
        <v-divider />
        <v-card-text class="pt-6">
          Deseja realmente excluir a tarefa: <strong>{{ this.tarefa.title }}</strong>?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="dark darken-1"
            text
            @click="$emit('onCloseModal')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            @click="onDeleteTarefa"
          >
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: {
      tarefa: {
        type: Object
      },
    },

    data () {
      return {
        dialog: true,
      }
    },
    
    methods: {
      onDeleteTarefa() {
        this.$store.commit('removeTarefa', this.tarefa.id);
        this.$emit('onCloseModal');
      },
    }
  }
</script>