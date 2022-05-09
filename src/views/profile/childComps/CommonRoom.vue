<template>
     <div id="mineRooms">
         <nav-bar class="nav-bar">
           <template v-slot:left>
            <img slot="left" src="~/assets/img/common/back.svg" @click="back"/>
           </template>
           <template v-slot:center>
              <div slot="center">常用会议室</div>
           </template>
          </nav-bar>
     </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
  import {getOftenroom} from "network/profile.js";

	export default {
		name: "MineOrder",
    components: {
      NavBar
    },
    data(){
      return{
        rooms: {
              num:5, 
              list: []
         },
      }
    },
    created(){
        this.getMineCommonRoom()
    },
    methods: {
      getMineCommonRoom(){//我的常用会议室
        let num=this.rooms.num;
        getOftenroom(num).then(res=>{
          if(res.code=="0"){
             this.rooms.list.push(...res.data.list)
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
  #mineRooms {
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
