<template>
     <div id="mineOder">
         <nav-bar class="nav-bar">
           <template v-slot:left>
            <img slot="left" src="~/assets/img/common/back.svg" @click="back"/>
           </template>
           <template v-slot:center>
              <div slot="center">我的会议</div>
           </template>
          </nav-bar>
          <tab-control :titles="['未开','已开']" 
                       @itemClick="tabClick" 
                       ref="tabControl" />
          <better-scroll class="content" 
                     ref="scroll" 
                     :probe-type="3" 
                     @scroll="contentScroll"
                     :pull-up-load="true"
                     @pulling-up="loadMore">
          <meeting-info :meetingList="showOrdersList"></meeting-info>
      </better-scroll>
     </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
  import BetterScroll from 'components/common/scroll/BetterScroll.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue';
  import {getMeeting} from "network/profile.js";
  import MeetingInfo from './MeetingInfo.vue'

	export default {
		name: "MineOrder",
    components: {
      NavBar,
      BetterScroll,
      TabControl,
      MeetingInfo
    },
    data(){
      return{
        order: {
              page: 0, 
              status:0,
              list: []
         },
         status:0,//0已预约，=1已结束
         orders: {
          'noOver': {page: 0, list: []},//已预约
          'over': {page: 0, list: []},//已结束
        },
        currentType: "noOver",
      }
    },
    computed:{
       showOrdersList(){
         return this.orders[this.currentType].list
       }
    },
    created(){
      //请求我的预约数据
        this.getMineMeeting("noOver","", "0", "20")
        this.getMineMeeting("over","", "1", "20")
    },
    mounted () {
      //this.getMineMeeting("", this.order.status, "20")
    },
    methods: {
      // 1.事件监听方法
		  tabClick(index) { //分类导航
		    switch (index) {
          case 0:
            this.currentType = "noOver"
            this.status=0;
            break
          case 1:
            this.status=1;
            this.currentType = "over"
            break
        }
        this.showOrdersList=this.orders[this.currentType].list
      },
      getMineMeeting(type,roomName, status, pageSize){//我的预约
        let page=this.orders[type].page+1;
        getMeeting(roomName, status, pageSize,page).then(res=>{
          if(res.code=="0"){
               this.orders[type].list.push(...res.data.data)
               this.orders[type].page += 1
             //执行下面这个方法才能加载更多数据-//better-scroll默认只能加载更多一次
            // this.$refs.scroll.finishPullUp();
           }else if(res.code=="30001"){//无效token、无权限//跳转到登陆页
					    this.$router.push("/login"); 
           }else if(res.code=="30006"){//授权到期，重新得到MaxToken
               //this.homeGetMaxTicket(this.MaxTicket)
               this.$router.push("/login"); 
						}else{
							//alert(data.message);
						} 
        })
      },
      
      //返回上一级
      back(){
        this.$router.push("/profile"); 
      },
      
    }
	}
</script>

<style scoped>
#mineOder {
   background-color: #efeff4;
   height:100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #000;
    position:relative;
  }
  .nav-bar img{
     height:18px;
     position:absolute;
     top:50%;
     left:4%;
     transform: translate(0,-50%)
  }
  .content {
      position: absolute;
      top: 84px; 
      bottom: 49px;
      left: 0;
      right: 0;
       overflow:hidden;
    }
</style>
