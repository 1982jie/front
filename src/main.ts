
import { createApp } from 'vue'
import Login from './Login.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(Login)
app.use(ElementPlus)
app.mount("#app")
