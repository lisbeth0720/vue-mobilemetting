<template>
  <div id="message">
     <nav-bar class="nav-bar">
        <template v-slot:center><div>消息中心</div></template>
        <template v-slot:right>
            <img slot="right" src="~/assets/img/common/icon_allRead.png" @click="readAll"/>
        </template>
      </nav-bar>
      <tab-control class="tab-control"
                   :titles="['全部消息', '未读消息', '已读消息']"
                   @itemClick="messageTabClick" 
                   ref="topTabControl"
                   v-show="isTabFixed" />
      <better-scroll class="content" 
                     ref="scroll" 
                     :probe-type="3" 
                     @scroll="contentScroll"
                     :pull-up-load="true"
                     @pulling-up="loadMore">
            <message-list :messages="showMessageList"></message-list>
      </better-scroll>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import BetterScroll from 'components/common/scroll/BetterScroll.vue'
  import {BACK_POSITION} from 'common/const.js'

  //2.子组件
  import MessageList from './childComps/MessageList.vue'

  //3.一些方法
  import {getMessages,getAllRead} from "network/message.js";

	export default {
		name: "Message",
    components: {
		  NavBar,
      TabControl,
      BetterScroll,
      MessageList
    },
    data(){
      return{
         isTabFixed: true,
         currentType:0,
         messages: {
          'all': {page: 0, list: []},
          'unread': {page: 0, list: []},
          'read':{page: 0, list: []}
        },
        currentType: "all",
      }
    },
    computed: {
      showMessageList() {
		    return this.messages[this.currentType].list
      }
    },
    created(){
      //1.请求消息数据
       this.getMessagesList("all","20")
       this.getMessagesList("unread","20")
       this.getMessagesList("read","20")
    },
    methods: {
      messageTabClick(index){//切换消息分类
         switch (index) {
          case 0:
            this.currentType = "all"//全部消息
            break
          case 1:
            this.currentType = "unread"//未读
            break
          case 2:
            this.currentType = "read"//已读
            break
        }
        this.showMessageList=this.messages[this.currentType].list
      },
       contentScroll(position){//监听滚动位置
         //1.判断BackTop是否显示
        // this.isShowBackTop=(-position.y)>BACK_POSITION;
      }, 
      getMessagesList(type, pageSize){
        let page=this.messages[type].page+1;
        getMessages(page, type, pageSize).then(res=>{
          if(res.code=="0"){
            this.messages[type].list.push(...res.data.data)
            this.messages[type].page += 1
            //执行下面这个方法才能加载更多数据-//better-scroll默认只能加载更多一次
            this.$refs.scroll.finishPullUp();
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
      //一键已读
			readAll(){
				getAllRead().then(res=>{
           let data=res.data;
						if(data.code=="0"){//刷新界面
							 //this.$router.push("/message"); 
               //this.$router.go(0)
               console.log(data)
               alert(data.message)
						}else if(res.code=="30001"){//无效token、无权限
							 this.$router.push("/login"); 
						}else if(data.code=="30006"){
							//getMaxTicket();
               this.$router.push("/login"); 
						}
				})
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
  .nav-bar img{
     height:18px;
     position:absolute;
     top:50%;
     right:4%;
     transform: translate(0,-50%)
  }
  .tab-control{
     border-bottom: 1px solid #eee;
    box-shadow: 0 1px 1px rgb(100 100 100 / 8%);
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
