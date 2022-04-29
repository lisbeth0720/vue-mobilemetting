<template>
  <div id="order">
      <nav-bar class="order-nav">
        <template v-slot:center><div>会议室</div></template>
      </nav-bar> 
      <better-scroll class="content" 
                     ref="scroll" 
                     :probe-type="3" 
                     @scroll="contentScroll"
                     :pull-up-load="true"
                     @pulling-up="loadMore">
			<room-list-item :room-item="roomItem"/>
			<meeting-detail />
			<meeting-time-table />
			<div id="submitBtn">
		         <button type="button" 
                         class="commSubmitBtn activeBtn" 
                         id="submitOrderBtn" 
                         @click="submitOrder()">确认</button>
		         <button type="button" 
                         class="commSubmitBtn" 
                         id="backOrderBtn" 
                         @click="resetOrderPage()">重置</button>
	         </div>
			 <ul>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
				 <li>111111111111111111111</li>
			 </ul>
	  </better-scroll>
  </div>
</template>
<script>
   //1.1公共组件或者常量
  import NavBar from 'components/common/navbar/NavBar.vue'
  import BetterScroll from 'components/common/scroll/BetterScroll.vue'
  import BackTop from 'components/content/backTop/BackTop.vue'
  import RoomListItem from 'components/content/rooms/RoomListItem.vue'
  import {BACK_POSITION} from 'common/const.js'
   
   //2.子组件
  import MeetingDetail from './childComps/MeetingDetail.vue'
  import MeetingTimeTable from './childComps/MeetingTimeTable.vue'
  
  //3.一些方法
  //import {getHomeSwiper,getRoomList} from "network/home.js";
  
  export default {
		name: "Order",
        components: {
		 NavBar,
         BetterScroll,
         BackTop,
		 RoomListItem,
		 MeetingDetail,
		 MeetingTimeTable 
    },
    data() {
          return{
			  roomItem:{}
		  }
    },
    computed: {
		   
    },
    watch:{
     
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
       // 1.事件监听方法
       contentScroll(position){
         //console.log(position)
         //1.判断BackTop是否显示
         this.isShowBackTop=(-position.y)>BACK_POSITION;

         //2.判断tabControl是否吸顶（position:fixed)
         //this.isTabFixed=(-position.y)>this.tabOffsetTop;
       },
          //判断是否回到顶部是否显示
        backTop(){
            this.$refs.scroll.scrollToTop(0,0);
         },
       // 2.网络请求相关方法
    
     
    }
}
</script>
<style scoped>
   #submitBtn {
    text-align: center;
  }
   .commSubmitBtn {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    padding: 6px 12px;
    cursor: pointer;
    -webkit-transition: all;
    transition: all;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
    text-align: center;
    vertical-align: top;
    white-space: nowrap;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #fff;
    background-clip: padding-box;
	margin-left:5px;
}
</style>