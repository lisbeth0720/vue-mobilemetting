<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <!-- <template v-slot:left>
            <img slot="left" src="~/assets/img/common/back.svg" @click="back"/>
       </template> -->
      <template v-slot:center>
            <div slot="center">个人中心</div>
       </template>
       <template v-slot:right>
            <div slot="right" @click="logout" class="signOut">
              <svg width="16" height="16" viewBox="0 0 24 24" data-new-api="PowerFill24" data-old-api="Logout" class="Logout" fill="currentColor"><path d="M13.25 3.25a1.25 1.25 0 10-2.5 0V11a1.25 1.25 0 102.5 0V3.25zM4.84 13.372A7.276 7.276 0 017.735 6.36a1.25 1.25 0 00-1.472-2.02 9.776 9.776 0 00-.597 15.32 9.741 9.741 0 0012.666 0 9.776 9.776 0 00-.597-15.32 1.25 1.25 0 00-1.472 2.02 7.277 7.277 0 01.444 11.4 7.242 7.242 0 01-9.416 0 7.268 7.268 0 01-2.453-4.388z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>退出
            </div>
       </template>
    </nav-bar>
    <div class="content">
			<table id="barTop" border="0" cellpadding="0" cellspacing="0">
				<tbody>
          <tr>
            <td v-for="(item,index) in nav" 
                :key="index" class="index"
                @click="clickItem(index)"
                :datas="dataList">
                 <img :src="item.img" />
                 <br>
                 <span>{{item.title}}</span>
            </td>
				</tr>
			</tbody>
      </table>
		</div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';

	export default {
		name: "Profile",
    components: {
       NavBar
    },
    data: function () {
		  return {
		     nav:[
           {
             title:"我的预约",
             img:require("../../assets/img/common/mineyuyue.png")
           },
           {
             title:"我的会议",
             img:require("../../assets/img/common/minehuiyi.png")
           },
           {
             title:"常用会议室",
             img:require("../../assets/img/common/mineguanli.png")
           }
         ],
      }
    }, 
    mounted(){
        
    },
    created(){
        
    },
    methods: {
      //切换导航
      clickItem(index){
         switch (index){
           case 0:
             this.$router.push("/mineOrder"); 
             break;
           case 1:
            this.$router.push("/mineMeeting"); 
             break;
           case 2:
            this.$router.push("/commonRoom"); 
             break;
            default:
              this.$router.push("/mineOrder");
         }
      },
      //退出登录
      logout(){
      
          this.$router.push("/login");
      }
    }
	}
</script>

<style scoped>
  #profile {
    background-color: #f2f2f2;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #000;
    /* position:relative; */
  }
  /* .nav-bar img{
     height:18px;
     position:absolute;
     top:50%;
     left:4%;
     transform: translate(0,-50%)
  } */
  .signOut{
    box-sizing: border-box;
    min-width: 0px;
    color: rgb(133, 144, 166);
    font-size: 14px;
    margin-right:2px;
  }
  .Logout {
    margin-right: 4px;
    height:14px;
  }
  #barTop {
    width: 100%;
    margin: 0;
    background: #fff;
  }
  #barTop tr {
    width: 100%;
}
.index {
    height: 95px;
    width: 33.3%;
    border: 1px solid #dddddd;
    text-align: center;
    border-top: none;
    
}

.index img {
    width: 42px;
    margin-bottom: 10px;
    max-width: 32px;
    vertical-align: middle;
}
.index span{
    font-size: 15px;
    color: #000000;
}
</style>
