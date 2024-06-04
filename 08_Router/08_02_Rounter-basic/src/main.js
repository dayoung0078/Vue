import { createApp } from 'vue';
import App from './App.vue'
import router from './router/01_router';
import nestedRoute from './router/02_nestedRoute';

const app = createApp(App)

app.use(nestedRoute)
// 라우트는 중복해서 쓰지 않는다

app.mount('#app')
