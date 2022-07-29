<template>
  <div class="pa-3">
    <h1>Sobre</h1>
      <p>
        Essa é uma lista de tarefas desenvolvida para fins didáticos
        com Vue.js. Você pode acompanhar o passo a passo para a criação desse 
        projeto em uma playlist gratúita que está no YouTube:
      </p>
      <center>
        <iframe 
        min-width="100%"
        max-height="315"
        
        style="border-radius: 10px"
        src="https://www.youtube.com/embed/fL2BAYzCIZs" 
        title="Playlist do YouTube" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      </center>
      <p>  
        Utilizamos diversas ferramentas
        atuais(contexto de 2021) e muito utilizadas no mercado de trabalho.

        Algumas ferramentas utilizadas aqui foram:
      </p>
      <v-list>
      <template v-for="(item) in tacnologias">

        <v-list-item
          :key="item.titulo"
        >
          <v-list-item-avatar>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title><a :href="item.link" target="_blank">{{ item.titulo }}</a></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    <hr>
    <section>
      <p>
        <v-card-title>Obrigado por prestigiar o projeto!!!</v-card-title>
        <v-card-subtitle >Contato:</v-card-subtitle>
        <v-card-text>
        <strong>📨E-mail:</strong> felipebrga@hotmail.com<br>
        <strong>🧑‍💻 Felipe Brasil</strong><br>
        <img src="../assets/octocat.png" height="20px" alt="imagem octocat" /> <a target="_blank" href="https://github.com/felipebrasil8">/felipebrasil8</a>
        </v-card-text>
      </p>
    </section>
      
  </div>
</template>

<script>
export default {
  data() {
    return{
      tacnologias:[
        {
          titulo: "HTML",
          icon: "mdi-language-html5",
          link: "",
        },
        {
          titulo: "Vue.js",
          icon: "mdi-vuejs",
          link: "",
        },
        {
          titulo: "Vuetify",
          icon: "mdi-vuetify",
          link: "https://vuetifyjs.com/en/getting-started/installation/",
        },
        {
          titulo: "Material Design Icons",
          icon: "mdi-material-design",
          link: "https://materialdesignicons.com/",
        },
        {
          titulo: "VUEX",
          icon: "mdi-vuejs",
          link: "",
        },
        {
          titulo: "VueRouter",
          icon: "mdi-vuejs",
          link: "",
        },
        {
          titulo: "Localbase DB",
          icon: "mdi-database",
          link: "https://www.npmjs.com/package/localbase",
        },
        {
          titulo: "Animate.css",
          icon: "mdi-transition",
          link: "https://animate.style/",
        },
        {
          titulo: "Drag and Drop",
          icon: "mdi-drag-variant",
          link: "https://github.com/rlemaigre/Easy-DnD",
        },
        {
          titulo: "Git",
          icon: "mdi-git",
          link: "",
        },
        {
          titulo: "GitHub",
          icon: "mdi-github",
          link: "",
        },
        {
          titulo: "Netlify",
          icon: "mdi-web",
          link: "https://app.netlify.com/teams/felipebrasil8/overview",
        },
      ]
    }
  }
}
</script>