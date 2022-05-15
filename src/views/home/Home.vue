<template>
  <div id="home">
      <nav-bar class="home-nav">
        <template v-slot:center><div>会议室</div></template>
      </nav-bar> 
  </div>
</template>

<script>
 //1.1公共组件或者常量
  import NavBar from 'components/common/navbar/NavBar.vue' 

 //2.子组件
 // import HomeSwiper from './childComps/HomeSwiper.vue'
  
  //3.一些方法
  //import {getHomeMultidata,getHomeGoods} from "network/home.js";
  //import {debounce} from "common/utils.js";
 //import {itemListenerMixin} from "common/mixin.js";

  //4.一些插件-下面的进行了封装
  //import emitter from "assets/utils/mitt.js"

  export default {
     name: "Home",
     components: {
	NavBar
     },
    data() {
		  return {
		    banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell':{page: 0, list: []}
        },
        currentType: "pop",
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        
      }
    },
    computed: {
		  
    },
    activated(){
     
    },
    deactivated(){
     
    },
    created() {
      
    },
    mounted(){
      
    },
    
    destroyed(){
       
    },
    methods: {

    }
	}
</script>

<style scoped>
/* scoped作用域的意思 下面设置的样式只对本界面中的元素起作用*/
  #home {
    /*position: relative;*/
    height: 100vh;
  }

  /* .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  } */

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
   
   .home-nav{
     background-color: var(--color-tint);
     font-weight: 700;
     color: #fff;
     /*下面的代码是用浏览器原生滚动时防止顶部导航随着滚动而滚动设置的，现在用了better-scroll所以不用设置了 */
     /* position:fixed;
     top:0;
     left:0;
     z-index:9; */
   }

   .content {
     /* 上下两部分高度已定，计算中间部分的高度，两种方式，1.用calc属性；2，使用定位 top,bottom给个值,left,right=0*/
      /* position: absolute;
      top: 44px; 
      bottom: 49px;
      left: 0;
      right: 0; */
       /* margin-top:44px;  */
       /* calc(100%-93px)不加空格无效 */ 
       height:calc(100% - 93px); 
      overflow:hidden;
    }
   .tab-control{
     /* position:sticky;
     top:44px; */
     position:relative;
     z-index:9;
   }
   
</style>
