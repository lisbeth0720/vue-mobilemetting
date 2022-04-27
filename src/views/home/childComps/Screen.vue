<template>
<div id="screen">
    <div class="selectDiv">
        <p class="commonP p1">
			<input id="startTime" 
                   ref="startTime" 
                   placeholder="开始时间"
                   v-model="startTime"/>
			<!-- <span id="time1" class="selectBtn" align="right" data-options="{}">选择开始时间<img src="~/assets/img/common/jinru3.png" class="icon" />	</span>	 -->
		</p>
        <p class="commonP p1">
			<input id="endTime" 
                   ref="endTime" 
                   placeholder="结束时间"
                   v-model="endTime"/>
			<!-- <span id="time2" class="selectBtn" align="right" data-options="{}">选择结束时间<img src="~/assets/img/common/jinru3.png" class="icon" /></span>		 -->
		</p>
        <p class="commonP p1">
			<input id="selectNumCount" 
                   type="text" 
                   placeholder="参会人数" 
                   ref="selectNumCount"
                   autocomplete="off" 
                   v-model="numCount"/>
		</p>
		<p class="commonP">
				<span style="margin-left: 10px;">设备名</span>
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
                id="resetBtn">重置</button>
		<button type="button" 
                 class="commSubmitBtn activeBtn" 
                 id="submitBtn"       
                 @click="getScreen">确认</button>
	</div>
 </div>
</template>

<script>
import { useStore } from 'vuex'
import {mapActions} from 'vuex'


export default {
  name: 'Screen',
  props:{
     
  },
  components: {
      
  },
  data(){
      const store = useStore()
      return {
        //  startTime:"2021/10/01",
        //  endTime:"2022/04/26",
        //  numCount:"",
        //  device:"",
        startTime:store.state.screenObj.startTime,
        endTime:store.state.screenObj.endTime,
        numCount:store.state.screenObj.numCount,
        device:store.state.screenObj.device,
      }
  },
  
  methods:{
      //映射出vuex中的actions里submitScreen方法
       ...mapActions(['submitScreen']),//在这里用这个后，可以在下面方法getScreen里直接调用
       //this.submitScreen(obj).then(res=>{console.log(res) })了,不写这个的话需要// this.$store.dispatch('submitScreen',obj).then(res=>{
        //   console.log(res)
        // })

    //得到筛选后的数据
     getScreen(){
         // 1.创建对象
        const obj = {}
        // 2.对象信息
        obj.startTime = this.startTime;
        obj.endTime = this.endTime;
        obj.numCount = this.numCount;
        obj.device = this.device;
        //将信息提交到vuex里
        this.submitScreen(obj).then(res=>{
            //console.log(res)
        })
       this.hideScreen();
     },
     //刷选数据后 更新会议室列表 事件发送给父组件-侧边栏隐藏
     hideScreen(){
          this.$emit('homeHideScreen');
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
    height: 50px;
    line-height: 50px;
    /* border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc; */
    margin-top: 10px;
    margin-bottom: 10px;
    font-size:14px;
    position:relative;
}
.commonP input{
    height:90%;
    position:absolute;
    top:5%;
    padding: 0px 10px;
    line-height: 20px;
    font-size: 14px;
    display: block;
    box-sizing: border-box
}
.p1 input{
    width:90%;
    left:5%;
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
    width: 150px;
    text-align: right;
    right:5%;
    border:none;
    border:1px solid #ccc;
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
