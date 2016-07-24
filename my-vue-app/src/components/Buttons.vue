<template lang="html">
  <a @click="callUsers" class="waves-effect waves-light btn">Call Users</a>
  <a @click="countUsers" class="wavess-effect waves-light btn">
    <i class="material-icons left">cloud</i>
    Count Users
  </a>
  <a class="waves-effect waves-light btn">
    <i class="material-icons right">cloud</i>
    Buttons
  </a>
  <a @click="resourceGet" class="wavess-effect waves-light btn">resource.get</a>
  <hr>
  <pre>
    {{ users | json }}
  </pre>

</template>

<script>
  export default {
    data(){
      return {
        users: null,
        resourceUser: this.$resource('user{/id}')
      }
    },
    methods: {
      //método para listar os usuários cadastrados no users.json e mostrar na tag <pre>{{}}
      callUsers: function(){
        this.$http({url: '/users.json', method: 'GET'}).then(function(response){
          this.users = response.data
        }, function(response){
          Materialize.toast('Erro!', 1000)
        });
      },
      //função para contar a quantidade de usuários cadastrados e mostrar
      countUsers: function(){
        Materialize.toast(this.users.length, 1000)
      },
      resourceGet: function(){
        this.resourceUser.get({id:1}).then(function(response){
          console.log(response)
        });
      }
    }
  }
</script>

<style lang="css">

</style>
