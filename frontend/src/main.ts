import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import '@/assets/base.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)

app.use(pinia)
app.mount('#app')