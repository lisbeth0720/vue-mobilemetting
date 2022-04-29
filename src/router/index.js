//vue-cli4的写法
import {createRouter,createWebHashHistory} from 'vue-router'

const Login =() =>import('../views/login/Login.vue');
const Home =() =>import('../views/home/Home.vue');
const Order =() =>import('../views/order/Order.vue');
const Message =() =>import('../views/message/Message.vue');
const Profile =() =>import('../views/profile/Profile.vue');

//2.创建路由对象
const routes=[
   {
       path:'',
       redirect:'/login'
   },
   {
       path:'/login',
       component:Login,
       meta:{
         keepAlive:true//组件需要缓存
       },
       name:"login"
   },
   {
    path:'/home',
    component:Home,
    meta:{
      keepAlive:true//组件需要缓存
    },
    name:"home"
  },
  {
    path:'/order',
    component:Order,
    meta:{
      keepAlive:true//组件需要缓存
    },
    name:"order"
  },
   {
    path:'/message',
    component:Message,
    meta:{
      keepAlive:true//组件需要缓存
    },
    name:"message"
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      keepAlive:true//组件需要缓存
    },
    name:"profile"
  }
 
]

const router = createRouter({
  history:createWebHashHistory(),
  routes,
 // mode:'history',//将默认的hash值变成history
})


//3.将router对象传入到vue实例中
export default router


//vue-cli3写法
// import Vue from 'vue'
// import VueRouter from 'vue-router'

// const Home =() =>import('../views/home/Home.vue');
// const Message =() =>import('../views/message/Message.vue');
// const Profile =() =>import('../views/profile/Profile.vue');

// //1.安装插件
// Vue.use(VueRouter);

// //2.创建路由对象
// const routes=[
//    {
//        path:'',
//        redirect:'/home'
//    },
//    {
//     path:'/home',
//     component:Home,
//     meta:{
//       keepAlive:true//组件需要缓存
//     }
//   },
//    {
//     path:'/message',
//     component:Message,
//     meta:{
//       keepAlive:true//组件需要缓存
//     }
//   },
//   {
//     path:'/profile',
//     component:Profile,
//     meta:{
//       keepAlive:true//组件需要缓存
//     }
//   }
// ]

// const router = new VueRouter({
//   routes,
//   mode:'history',//将默认的hash值变成history
// })

// 3.将router对象传入到vue实例中
// export default router

// 当vue-cli安装的是4版本的时候，一直按照vue-cli4的写法安装路由报错报错 - 解决vue3报错：export ‘createApp‘ was not found in ‘vue‘
// 报错 - 解决vue3报错：export ‘createRouter‘ was not found in ‘vue-router‘
// 出现这样的报错是因为我们使用的vue-router包不对，安装了2.x版本的，因为我们现在开发使用的是vue3，所以也要对应安装vue3版本的vue-router包。我们只需要将之前安装的 vue-router包卸载，然后重新安装vue3的vue-router包。

//vue2要安装对应版本的vue-router3;vue3要安装对应版本的vue-router4

//"vue": "^2.6.14",
//"vue-router": "^3.5.3"

//"vue": "^3.2.25",
// "vue-router": "^4.0.14",