<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Editar
        </v-card-title>
        <v-divider />
        <v-card-text class="pt-6">
          <v-text-field
            v-model="tarefa.title"
            label="Título"
            outlined
            clearable
            @keyup.enter="editTarefa"
          ></v-text-field>
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
            @click="editTarefa"
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
      editTarefa() {
        if (!this.tarefa.title || !this.tarefa.id) return;

        this.$store.dispatch('editaTarefa', this.tarefa);
        this.$emit('onCloseModal');
      }
    }
  }
</script>