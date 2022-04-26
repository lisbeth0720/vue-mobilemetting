<template>
  <div id="message">
     <nav-bar class="nav-bar">
        <template v-slot:center><div>消息</div></template>
      </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  //import CartList from './childComps/CartList'
	export default {
		name: "Message",
    components: {
		  NavBar
    },
    computed: {
      
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
  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;

    /* height:calc(100% - 93px);
    overflow: hidden; */
    /* 不加overflow: hidden;的话会在顶部导航上显示滚动 */
    overflow: hidden;
  }
</style>
