import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.min.css'
import axios from './api/api'
import Vueaxios from 'vue-axios'

createApp(App).use(store).use(router).use(Vueaxios,axios).mount('#app')
