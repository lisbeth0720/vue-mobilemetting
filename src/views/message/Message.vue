<template>
  <div id="message">
     <nav-bar class="nav-bar">
        <template v-slot:center><div>消息</div></template>
      </nav-bar>
      <better-scroll class="content" 
                     ref="scroll" 
                     :probe-type="3" 
                     @scroll="contentScroll"
                     :pull-up-load="true"
                     @pulling-up="loadMore">
                     <ul>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li><li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li><li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                       <li>2222222222</li>
                     </ul>
          
      </better-scroll>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  //import CartList from './childComps/CartList'
  import BetterScroll from 'components/common/scroll/BetterScroll.vue'
  import {BACK_POSITION} from 'common/const.js'
  
	export default {
		name: "Message",
    components: {
		  NavBar,
      BetterScroll,
    },
    computed: {
      
    },
    methods: {
       contentScroll(position){
         console.log(position)
         //1.判断BackTop是否显示
         this.isShowBackTop=(-position.y)>BACK_POSITION;

         //2.判断tabControl是否吸顶（position:fixed)
         //this.isTabFixed=(-position.y)>this.tabOffsetTop;
      },   
    }
	}
</script>

<style scoped>
  #message {
    position: relative;
    height: 100vh;
    background-color:#fff;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #000;
  }
  .content {
      position: absolute;
      top: 44px; 
      bottom: 49px;
      left: 0;
      right: 0;
       overflow:hidden;
    }
</style>
