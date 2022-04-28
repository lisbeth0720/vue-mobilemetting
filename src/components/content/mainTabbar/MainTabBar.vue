<template>
<!-- 如何实现在登陆页不显示下面的tab-bar 我用的在tab-bar中,一开始不显示，只要检测到登陆成功了就显示tab-bar 但是这样有个bug 就是界面还没跳转 底部的导航就已经在登陆页显示了 v-show="store.state.login.MaxTicket!=''"-->
    <tab-bar>
      <!-- <tab-bar-item path="/profile" activeColor="red">
         <img slot="item-icon" src="~/assets/img/tabbar/profile.svg" alt="" />
         <img slot="item-icon-active" src="~/assets/img/tabbar/profile_active.svg" alt="" />
         <div slot="item-text">我的</div>
      </tab-bar-item>  -->    
      <tab-bar-item path="/home" activeColor="#007aff">
         <template v-slot:item-icon>
           <img src="~/assets/img/tabbar/home.png" alt="" />
         </template>
         <template v-slot:item-icon-active>
            <img src="~/assets/img/tabbar/home_active.png" alt="" />
         </template>
         <template v-slot:item-text>
              <div>会议室</div>
         </template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#007aff">
         <template v-slot:item-icon>
             <img src="~/assets/img/tabbar/message.png" alt="" />
         </template>
         <template v-slot:item-icon-active>
             <img src="~/assets/img/tabbar/message_active.png" alt="" />
         </template>
         <template v-slot:item-text>
             <div>消息</div>
         </template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#007aff">
         <template v-slot:item-icon>
            <img src="~/assets/img/tabbar/profile.png" alt="" />
         </template>
         <template v-slot:item-icon-active>
            <img src="~/assets/img/tabbar/profile_active.png" alt="" />
         </template>
         <template v-slot:item-text>
             <div>我的</div>
         </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
//需要加判断，当已登陆的时候就显示整个组件，未登录不显示
import TabBar from 'components/common/tabbar/TabBar.vue';
import TabBarItem from 'components/common/tabbar/TabBarItem.vue';

//import { useStore } from 'vuex'

export default {
  name: '',
  components: {//在components里注册组件后才能在模板里使用
   TabBar,
   TabBarItem
  },
  data() {
     return {
      
     }
  },
  //setup(){
     //const store = useStore();
     //const state = computed(()=>{
      //  return store.state
    // })
    //返回出去供template模板使用
    // return {
       // store
     //}
  //}
}
</script>
<style>
 

</style>
