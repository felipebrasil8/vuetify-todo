import Vue from 'vue'
import Vuex from 'vuex'
import Localbase from 'localbase'

Vue.use(Vuex)

let db = new Localbase('db');

export default new Vuex.Store({
  state: {
    tarefas: [],
  },
  mutations: {
    carregaTarefas(state) {
      db.collection('tarefas').get().then(tarefasDB => {
        state.tarefas = tarefasDB;
      });
    },

    adiconaTarefa(state, task) {
      const tarefa = {
        id: Math.random().toString(16).slice(2).toUpperCase(),
        title: task,
        status: false,
      }

      db.collection('tarefas').add(tarefa);
    },
  },
  actions: {
    async adiconaTarefa({ commit }, task) {
      await commit('adiconaTarefa', task);
      await commit('carregaTarefas');
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
          commit('carregaTarefas');
        });
    }
  },
  modules: {
  }
})
