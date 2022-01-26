import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as apolloProvider from "./auth"
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(apolloProvider.apolloProvider)

app.mount('#app')
