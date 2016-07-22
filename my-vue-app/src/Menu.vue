<template lang="html">
  <h4>{{title}}</h4>
  <button @click="onButtonClick">click me</button>
  <div>
    <!--<slot> O conteúdo do novo componente Menu será inserido dentro
      desta tag slot -->
    <slot></slot>
  </div>
  <hr/>
  <slot name="footer"></slot>
</template>

<script>
  export default {
    // props: A propriedade title é repassada no componente App
    props: ['title'],
    methods:{
      onButtonClick: function(){
        this.$dispatch('button-click', "dispatch event from menu");
      }
    }
  }
</script>

<style lang="css">
</style>
