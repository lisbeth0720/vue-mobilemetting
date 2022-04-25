//vue-cli4的写法
import {createRouter,createWebHashHistory} from 'vue-router'
const Home =() =>import('../views/home/Home.vue');
const Message =() =>import('../views/message/Message.vue');
const Profile =() =>import('../views/profile/Profile.vue');

//1.安装插件
//Vue.use(VueRouter);

//2.创建路由对象
const routes=[
   {
       path:'',
       redirect:'/home'
   },
   {
    path:'/home',
    component:Home,
    meta:{
      keepAlive:true//组件需要缓存
    }
  },
   {
    path:'/message',
    component:Message,
    meta:{
      keepAlive:true//组件需要缓存
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      keepAlive:true//组件需要缓存
    }
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes,
 // mode:'history',//将默认的hash值变成history
})

//3.将router对象传入到vue实例中
export default router