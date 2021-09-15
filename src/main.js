import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import "./styles.css"
import "tailwindcss/tailwind.css"
import './assets/tailwind.css'
import axios from 'axios'
// Import the functions you need from the SDKs you need

const app = createApp(App)

app.config.globalProperties.$axios = axios

app.use(router).mount('#app')
