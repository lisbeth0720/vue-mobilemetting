//vue-cli3的写法
// import Vue from 'vue'
// import App from './App.vue'
// import router from './router/index2.js'//导入路由

// Vue.config.productionTip = false
//  new Vue({
//    render: h => h(App),
//    router//这个忘记写 导致报错
//  }).$mount('#app')


 //vue-cli4的写法
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'//导入路由
import store from './store'//导入vuex

createApp(App).config.productionTip = false

createApp(App).use(router).use(store).mount("#app")
