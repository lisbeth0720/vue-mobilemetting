//vue-cli4的导入写法
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'//导入路由

createApp(App).config.productionTip = false

createApp(App).use(router).mount("#app")

//createApp(App).use(router).use(store).mount("#app")