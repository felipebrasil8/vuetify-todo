import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

Vue.use(Vuex)

let db = new Localbase('db');

export default new Vuex.Store({
  state: {
    done: false,
    tarefas: [],
  },
  mutations: {
    carregaTarefas(state) {
      db.collection('tarefas')
        .orderBy('position')
        .get()
        .then(tarefasDB => {
          state.tarefas = tarefasDB.filter(tarefa => tarefa.status === state.done);
        });
    },

    async reordenaTarefas(state, tarefas) {
      let tarefasParaReordenar = tarefas || [];
      
      if (!tarefas) {
        tarefasParaReordenar = await db.collection('tarefas').orderBy('position').get();
      }

      tarefasParaReordenar.forEach((tarefa, index) => {
        db.collection('tarefas')
          .doc({
            id: tarefa.id
          })
          .update({
            position: (index + 1)
          })
      });
    },

    atualizaStatus(state, task) {
      db.collection('tarefas')
        .doc({
          id: task.id
        })
        .update({
          status: task.status
        });
    },
  },
  actions: {
    async adiconaTarefa({ commit }, task) {
      const tarefas = await db.collection('tarefas').get();
      const position = tarefas.length + 1;

      const tarefa = {
        id: Math.random().toString(16).slice(2).toUpperCase(),
        title: task,
        status: false,
        position: position,
      }

      db.collection('tarefas').add(tarefa).then(() => {
        commit('carregaTarefas');
      });
    },

    editaTarefa({ commit }, task) {
      db.collection('tarefas')
        .doc({
          id: task.id
        })
        .update({
          title: task.title
        })
        .then(() => {
          commit('carregaTarefas');
        });
    },

    removeTarefa({ commit }, id) {
      db.collection('tarefas')
        .doc({
          id: id
        })
        .delete()
        .then(() => {
          commit('reordenaTarefas');
          commit('carregaTarefas');
        });
    },
  },
  modules: {
  }
})
