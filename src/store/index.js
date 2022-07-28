import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      {
        id: Math.random().toString(16).slice(2).toUpperCase(),
        title: 'Ir ao mercado',
        status: false
      },
      {
        id: Math.random().toString(16).slice(2).toUpperCase(),
        title: 'Abastecer o carro',
        status: true
      },
    ]
  },
  mutations: {
    adiconaTarefa(state, task) {
      const tarefa = {
        id: Math.random().toString(16).slice(2).toUpperCase(),
        title: task,
        status: false,
      }

      state.tarefas.push(tarefa);
    },

    editaTarefa(state, task) {
      let tarefa = state.tarefas.filter(filtring => filtring.id === task.id).find(() => true);
      tarefa.title = task.title;
    },

    removeTarefa(state, id) {
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id);
    }
  },
  actions: {
  },
  modules: {
  }
})
