import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { DefaultApolloClient } from '@vue/apollo-composable'
import * as apolloClient from "./auth"
import VeeValidate from './includes/validation'
import './assets/main.css'

const app = createApp({
    setup(){
        provide(DefaultApolloClient, apolloClient.apolloclient)
    },
    render: () => h(App),
})
app.use(router)
app.use(store)
app.use(VeeValidate)
// app.use(apolloProvider.apolloProvider)

app.mount('#app')
