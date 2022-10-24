import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
// import axios from '/src/axios/http.js';
import store from './store'
import App from './App.vue'

const app = createApp(App)
app.use(router).use(store)
app.use(ElementPlus)
app.mount('#app')
