<template>
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
              <div>首页</div>
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
import TabBar from 'components/common/tabbar/TabBar.vue';
import TabBarItem from 'components/common/tabbar/TabBarItem.vue';

export default {
  name: '',
  components: {//在components里注册组件后才能在模板里使用
   TabBar,
   TabBarItem
  }
}
</script>
<style>
 

</style>
