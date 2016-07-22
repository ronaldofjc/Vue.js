<template>
  <div id="app">
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
  /* o import diz ao browserify para carregar o componente e
    adicioná-lo no arquivo build.js */
  import AppHeader from './layout/AppHeader.vue'
  import AppContent from './layout/AppContent.vue'
  import AppFooter from './layout/AppFooter.vue'

  export default {
    //components: Dizendo ao componente App que usaremos os componentes
    //AppHeader, AppContent e AppFooter
    components:{
      AppHeader, AppContent, AppFooter
    }
  }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
