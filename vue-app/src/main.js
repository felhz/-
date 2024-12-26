import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import Index from './Index.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/home', component: HomeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
