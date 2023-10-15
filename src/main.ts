// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createSSRApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export const createApp = () => {
    const app = createSSRApp(App);
    app.use(ElementPlus)
    return { app };
};

