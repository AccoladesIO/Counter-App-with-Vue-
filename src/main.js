import { createApp } from 'vue';
// import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import CounterApp from './components/CounterApp.vue';
import NotFound from './components/NotFound.vue';
import counter from '../src/composables/counter'

const routes = [
  {
    path: '/',
    component: CounterApp
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(CounterApp);
app.use(counter);
app.use(router);
app.mount('#app');
