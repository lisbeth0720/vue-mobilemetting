<template>
  <div class="app">
    <!-- <keep-alive>的作用是不被销毁，切换到这个界面的时候保持切换前的状态  -->
      <!-- vue 2x的写法 -->
    <!-- <keep-alive>
       <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if=" !$route.meta.keepAlive" /> -->
      <!-- vue 3x的写法 -->
    
   <!-- <router-view v-slot="{Component}">
     <keep-alive :exclude="Detail">
       <component :is="Component" />
     </keep-alive>
   </router-view> -->
   <!-- 上面vue3x的写法有bug，详情页需要清空缓存，但是结果并没有清除，下面的代码正确 -->
   <router-view v-slot="{Component,route}">
     <keep-alive>
       <component :is="Component" :key="route.path" v-if="route.meta.keepAlive"/>
     </keep-alive>
     <component :is="Component" v-if="!route.meta.keepAlive"/>
   </router-view>
   <!-- 如何实现在登陆页不显示下班的tab-bar 我用的在tab-bar中,一开始不显示，只要检测到登陆成功了就显示tab-bar 但是这样有个bug 就是界面还没跳转 底部的导航就已经在登陆页显示了 -->
    <main-tab-bar v-if="tabType"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue';

export default {
  name: 'App',
  components: {//在components里注册组件后才能在模板里使用
   MainTabBar,
  },
  data(){
    return{
       tabType:true
    }
  },
  watch:{//为了检测路由$route的变化,可以获取跳转到的路由信息,通过 路由的name值进行判断即可
      $route(e){
        if(e.name=="login"){//登陆页不显示tab-bar
          this.tabType=false;
        }else{
          this.tabType=true;
        }
      }
  }
}
</script>

<style>
  @import "assets/css/base.css";

</style>
