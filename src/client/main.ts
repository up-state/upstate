import 'vite/dynamic-import-polyfill'
import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Another from './components/another/Another.vue'
import { ADD_TODO, store } from './store'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/another', component: Another },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

store.commit(ADD_TODO, { title: 'Type-safe Vuex mutations' })
store.commit(ADD_TODO, { title: 'Data model' })

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
