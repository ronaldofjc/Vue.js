import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorldRouter from './components/HelloWorldRouter.vue'
import Buttons from './components/Buttons.vue'
import Card from './components/Card.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  linkActiveClass: 'active'
})
//A configuração do vue-router é feita pelo router.map
router.map({
  '/foo': {
    component: HelloWorldRouter,
  },
  '/card': {
    component: Card,
    auth: true //necessita que o usuario esteja logado para acessar a rota
  },
  '/buttons': {
    component: Buttons
  }
});

//Simulação para tratar as rotas cujo parametro auth for true
router.beforeEach(function (transition) {
    //SIMULAÇÃO:
    let authenticated = false;
    console.log(transition);
  if (transition.to.auth && !authenticated) {
    transition.redirect('/login')
  } else {
    transition.next()
  }
})

router.start(App, 'App')

new Vue({
  el: 'body',
  components: { App }
})
