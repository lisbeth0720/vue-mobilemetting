<template>
  <div class="messageInfo">
      <nav-bar class="nav-bar">
        <template v-slot:left>
          <img slot="left" src="~/assets/img/common/back.svg" @click="back"/>
        </template>
        <template v-slot:center><div>消息中心</div></template>
      </nav-bar>
      <ul class="messageUl">	
	    	<li>【会议通知】
          <br>{{meetTime}}
        </li>
        <li>{{meetTitle}}</li>
        <li>{{dept}}</li>
        <li>{{host}}</li>
        <li>{{address}}</li>
        <li>请您及时参会！</li>
  </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  //3.一些方法
  import {getDetails} from "network/message.js";

  export default {
 	  name: "MessageInfo",
    components: {
      NavBar
    },
    data(){
      return {
        id:"",
        meetTime:"",
        meetTitle:"",
        dept:"",
        host:"",
        address:"",
      }
    },
    computed: {
     
    }, 
    created(){
        //1.保存传入的id
			  this.id = this.$route.params.id;
        this.getMessagesDetails(this.id)
    },
    methods: {
      getMessagesDetails(id){
        getDetails(id).then(res=>{
          if(res.code=="0"){
            let details=JSON.stringify(res.data.Title).split("@")[1].split("；");
             this.meetTime=details[0].split("【会议通知】")[1];
             this.meetTitle=details[1];
             this.dept=details[2];
             this.host=details[3];
             this.address=details[4];
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
        this.$router.push("/message"); 
      },
    }
}
</script>

<style scoped>
 .nav-bar img{
     height:18px;
     position:absolute;
     top:50%;
     left:4%;
     transform: translate(0,-50%)
  }
.messageInfo {
    position: relative;
    height: 100vh;
    background-color:#fff;
  }
  .messageUl{
    border: none;
    padding: 20px 0;
    width: 90%;
    margin: auto;
  }
  .messageInfo li{
     line-height: 40px;
      list-style:none;
  }
</style>
