import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '../src/router/index'
import App from './App.vue';

const app = createApp(App)

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes: routes
})

app.use(router).mount('#app')
