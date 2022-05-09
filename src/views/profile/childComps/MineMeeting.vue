<template>
     <div id="mineMeeting">
         <nav-bar class="nav-bar">
           <template v-slot:left>
            <img slot="left" src="~/assets/img/common/back.svg" @click="back"/>
           </template>
           <template v-slot:center>
              <div slot="center">我的会议</div>
           </template>
          </nav-bar>
     </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
  import {getMeeting} from "network/profile.js";

	export default {
		name: "MineOrder",
    components: {
      NavBar
    },
    data(){
      return{
        meeting: {
              page: 0, 
              status:0,
              list: []
         },
      }
    },
    created(){
        this.getMineMeeting("", this.meeting.status, "20")
    },
    methods: {
       getMineMeeting(roomName, status, pageSize){//我的会议
        let page2=this.meeting.page+1;
        getMeeting(roomName, status, pageSize,page2).then(res=>{
          if(res.code=="0"){
              //this.meeting.list.push(...res.data.list)
             this.meeting.page += 1
             //执行下面这个方法才能加载更多数据-//better-scroll默认只能加载更多一次
             //this.$refs.scroll.finishPullUp();
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
      }
    }
	}
</script>

<style scoped>
  #mineMeeting {
    background-color: #f2f2f2;
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
</style>
