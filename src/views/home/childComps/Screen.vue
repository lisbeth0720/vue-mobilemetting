<template>
<div id="screen">
    <div class="selectDiv">
        <p class="commonP">
            <span>开始时间 : </span>
			<input id="startTime" 
                   ref="startTime" 
                   placeholder="开始时间"
                   v-model="startTime"/>
			<!-- <span id="time1" class="selectBtn" align="right" data-options="{}">选择开始时间<img src="~/assets/img/common/jinru3.png" class="icon" />	</span>	 -->
		</p>
        <p class="commonP">
            <span>结束时间 : </span>
			<input id="endTime" 
                   ref="endTime" 
                   placeholder="结束时间"
                   v-model="endTime"/>
			<!-- <span id="time2" class="selectBtn" align="right" data-options="{}">选择结束时间<img src="~/assets/img/common/jinru3.png" class="icon" /></span>		 -->
		</p>
        <p class="commonP">
            <span>参会人数 : </span>
			<input id="selectNumCount" 
                   type="text" 
                   placeholder="参会人数" 
                   ref="selectNumCount"
                   autocomplete="off" 
                   v-model="numCount"/>
		</p>
		<p class="commonP">
            <span>设备名 : </span>
				<input id="selectDevice"  
                       type="text" 
                       placeholder="多个设备用英文,分隔" 
                       autocomplete="off"
                       v-model="device" />
		</p>
    </div>
    <div class="bottomBtn">
		<button type="button" 
                class="commSubmitBtn" 
                @click="resetClick">重置</button>
		<button type="button" 
                 class="commSubmitBtn activeBtn"   
                 @click="confirmClick">确认</button>
	</div>
 </div>
</template>

<script>
import {getRoomList} from "network/home.js";
import { useStore } from 'vuex'

export default {
  name: 'Screen',
  props:{
     
  },
  components: {
      
  },
  data(){
      const store = useStore();
      return {
        Ticket:store.state.login.Ticket,
        MaxTicket:store.state.login.MaxTicket,

        startTime:"",
        endTime:"",
        numCount:"",
        device:"",
        screenRoomList:[],//筛选后的会议室数据
      }
  },
  created(){//组件被创建的时候就触发里面的事件，所以当input里的值发生改变的时候，下面的方法不会再被调用，目前需要处理的是如何更检测到input发生变化后，点击确认或重置按钮后重新发送请求-当点击确认的时候再发送请求
      //this.getScreenRoomList(this.Ticket,this.startTime,this.endTime,this.numCount,this.device)
  },
  methods:{
      //1.事件监听相关方法
     //1.1.点击确认；刷选数据后 更新会议室列表 事件发送给父组件-侧边栏隐藏
     confirmClick(){
         console.log(this.Ticket)
          this.getScreenRoomList(this.Ticket,this.startTime,this.endTime,this.numCount,this.device)
           //请求成功后再向父组件发出事件
          //this.$emit('confirmScreen',this.creenRoomList);
          //console.log("子组件发出事件")
           //this.$emit('confirmScreen');
     },
    //1.2.重置
    resetClick(){
        this.startTime=""
        this.endTime=""
        this.numCount=""
        this.device=""
        this.getScreenRoomList(this.Ticket,this.startTime,this.endTime,this.numCount,this.device)
    },
    //2.网络请求相关方法
    getScreenRoomList(Token,start,end,count,device){
        let page=1;
         getRoomList(Token,start,end,count,device,page).then(res=>{
           if(res.code=="0"){
              page+=1;
              this.creenRoomList = res.data.data
              //向父组件发出事件
              this.$emit('confirmScreen',this.creenRoomList);

              //执行下面这个方法才能加载更多数据-//better-scroll默认只能加载更多一次
              //this.$refs.scroll.finishPullUp();
            }else if(res.code=="30001"){//无效token、无权限//跳转到登陆页
					this.$router.push("/login"); 
            }else if(data.code=="30006"){
					//getMaxTicket();
		    }else{
					//alert(data.message);
			 }
          })
    }
  }
}
</script>

<style>
   #screen {
    /* position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background:#fff;
    z-index:999; */
    position:absolute;
    height:calc(100% - 93px); 
    top:44px;
    bottom:49px;
    right:0;
}
.selectDiv{
  position: absolute;
    z-index: 1;
    width: 100%;
}
.commonP{
    height: 44px;
    line-height: 44px;
    /* border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc; */
    margin-top: 10px;
    margin-bottom: 10px;
    font-size:14px;
    position:relative;
    display:flex;
}
.commonP span{
    font-size: 14px;
    color: #231815;
    width: 110px;
    display: inline-block;
    letter-spacing: 1.5px;
    text-align: right;
    margin-right: 8px;
}
.commonP input{
    flex:1;
    height:90%;
    /* position:absolute;
    top:5%; */
    padding: 0px 10px;
    line-height: 20px;
    font-size: 14px;
    display: block;
    box-sizing: border-box;
    margin-right:10px;
    border:none;
    border:1px solid #ccc;
}

/* .selectBtn {
    float: right;
    margin-right: 10px;
} */
/* .icon {
    width: 20px;
    float: right;
    margin: 0!important;
    margin-top: 10px!important;
} */
.selectDevice {
    color: #8f8f94;
    font-size: 14px;
}
#selectDevice {
    /* width: 150px;
    text-align: right;
    right:5%;
    border:none;
    border:1px solid #ccc; */
}
.bottomBtn {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: #f7f7f7;
}
.bottomBtn button {
    width: 50%;
    border: none;
    margin-left: 0;
    box-sizing: border-box;
    margin-right: 0px;
    float: left;
    height: 100%;
    border-radius: 0;
}
.activeBtn {
    background: #007aff;
    color: #fff;
    font-size: 14px;
}
</style>
