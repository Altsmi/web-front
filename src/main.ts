import './style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
