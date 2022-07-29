<template>
  <v-app id="inspire">

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-img src="https://picsum.photos/1920/1080?random"
        gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        dark
        class="pt-5 text-center"
      >
        <v-avatar size="100">
          <v-img src="https://avatars.githubusercontent.com/u/46094319?v=4" lazy-src="https://avatars.githubusercontent.com/u/46094319?v=4"/>
        </v-avatar>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Vue.js
            </v-list-item-title>
            <v-list-item-subtitle>
              Lista de tarefas
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-img>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#43a047"
      dark
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Vuetify - To Do</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y v-model="menuInfo">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            icon
          >
            <v-icon>
              mdi-dots-vertical
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <h4 class="pb-4">Ações da aplicação:</h4>
              <p>- Cadastrar uma <strong>tarefa</strong></p>
              <p>- Visualizar uma <strong>tarefa</strong></p>
              <p>- Editar uma <strong>tarefa</strong></p>
              <p>- Deletar uma <strong>tarefa</strong></p>
              <p>- Alterar a order das <strong>tarefas</strong></p>
              <p>- Todas as ações são salvas com <strong>LocalBase</strong><br /> (incluvise ordenação)</p>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: true,
      items: [
        { title: 'Tarefas', icon: 'mdi-view-dashboard', to: '/'},
        { title: 'Sobre', icon: 'mdi-help-box', to: '/sobre' },
      ],
      right: null,
      menuInfo: false
    }),

    created(){
      setTimeout(() => {this.menuInfo = true}, 500);
    },
  }
</script>