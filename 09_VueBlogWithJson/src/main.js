
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) // 전역스토어 추가 pinia 젤 위에 설정해줘야함. 
app.use(router)

app.mount('#app')
