import 'vite/dynamic-import-polyfill'
import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Another from './components/Another.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/another', component: Another },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
