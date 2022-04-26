<template>
<div id="screen">
    <div class="selectDiv">
        <p id="selectStartTime" class="commonTime">
			<span id="startTime" align="left" class="commonSelectTime">开始时间</span>
			<span id="time1" class="selectBtn" align="right" data-options="{}">选择开始时间<img src="~/assets/img/common/jinru3.png" class="icon" />	</span>	
		</p>
        <p id="selectEndTime" class="commonTime">
			<span id="endTime" align="left" class="commonSelectTime">结束时间</span>
			<span id="time2" class="selectBtn" align="right" data-options="{}">选择结束时间<img src="~/assets/img/common/jinru3.png" class="icon" /></span>		
		</p>
        <p class="commonTime">
			<span class="commonSelectTime">参会人数</span>
			<input id="selectNumCount" class="commonInput" type="text" value="" placeholder="容纳人数" autocomplete="off">
		</p>
        <div class="selectDevice">
			<p class="commonTime">
				<span style="margin-left: 10px;">设备名</span>
				<input id="selectDevice" class="commonInput" type="text" value="" placeholder="多个设备用英文,分隔 " autocomplete="off">
			</p>
		</div>
    </div>
    <div class="bottomBtn">
		<button type="button" class="commSubmitBtn" id="resetBtn">重置</button>
		<button type="button" class="commSubmitBtn activeBtn" id="submitBtn">确认</button>
	</div>
    <!-- <calendar ref="calendar1"
                :events="calendar1.events" 
                :lunar="calendar1.lunar" 
                :value="calendar1.value" 
                :begin="calendar1.begin" 
                :end="calendar1.end" 
                :weeks="calendar1.weeks" 
                :months="calendar1.months" 
                @select="calendar1.select"
                @selectMonth="calendar1.selectMonth"
                @selectYear="calendar1.selectYear"></calendar> -->
 </div>
</template>

<script>
import Calendar from 'components/common/calendar/Calendar.vue'

export default {
  name: 'Screen',
  props:{
     
  },
  components: {
      Calendar
  },
  data(){
      return {
         calendar1:{
                value:[2017,7,20], //默认日期
                // lunar:true, //显示农历
                weeks:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                events:{
                    '2017-7-7':'$408',
                    '2017-7-20':'$408',
                    '2017-7-21':'$460',
                    '2017-7-22':'$500',
                },
                select(value){
                    console.log(value.toString());
                },
                selectMonth(month,year){
                    console.log(year,month)
                },
                selectYear(year){
                    console.log(year)
                },
                timestamp:Date.now()
            },
            calendar2:{
                range:true,
                value:[[2017,12,1],[2019,2,16]], //默认日期
                lunar:true, //显示农历
                begin:[2017,2,16], //可选开始日期
                end:[2019,2,16], //可选结束日期
                select(begin,end){
                    // console.log(begin.toString(),end.toString());
                }
            },
            calendar3:{
                display:"2018/02/16",
                show:false,
                zero:true,
                value:[2018,2,16], //默认日期
                lunar:true, //显示农历
                select:(value)=>{
                    this.calendar3.show=false;
                    this.calendar3.value=value;
                    this.calendar3.display=value.join("/");
                }
            },
            calendar4:{
                display:"2018/02/16 ~ 2019/02/16",
                show:false,
                range:true,
                zero:true,
                value:[[2018,2,16],[2019,2,16]], //默认日期
                lunar:true, //显示农历
                select:(begin,end)=>{
                    console.log(begin,end)
                    this.calendar4.show=false;
                    this.calendar4.value=[begin,end];
                    this.calendar4.display=begin.join("/")+" ~ "+end.join("/");
                }
            },
            // 多选
            calendar5:{
                display:"2017/11/2,2017/12/2",
                multi:true,
                show:false,
                zero:true,
                value:[[2017,11,1],[2017,11,2]], //默认日期
                disabled:[[2017,12,24],[2017,12,25]], //默认日期
                lunar:true, //显示农历
                select:(value)=>{
                    let displayValue=[]
                    value.forEach(v=>{
                        displayValue.push(v[0]+"/"+(v[1])+"/"+v[2])
                    })
                    console.log(displayValue);
                    this.calendar5.display=displayValue.join(",");
                    // this.calendar5.show=false;
                    this.calendar5.value=value;
                    
                }
            },
      }
  },
  
  methods:{
     imageLoad(){
        //只需要发出一次就好
        if(!this.isLoad){
          this.$emit('swiperImageLoad');
          this.isLoade=true;
        }
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
.commonTime {
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size:14px;
}
.commonSelectTime {
    float: left;
    margin-left: 10px;
}
.selectBtn {
    float: right;
    margin-right: 10px;
}
.icon {
    width: 20px;
    float: right;
    margin: 0!important;
    margin-top: 10px!important;
}
#selectNumCount {
    margin: 0;
    padding: 0px 10px;
    line-height: 20px;
    font-size: 14px;
    display: block;
    height: 100%;
    float: right;
    margin-right: 10px;
    width: 100px;
    border: none;
    text-align: right;
}
.selectDevice {
    color: #8f8f94;
    font-size: 14px;
}
#selectDevice {
    margin: 0;
    padding: 0px 10px;
    line-height: 20px;
    font-size: 14px;
    display: block;
    height: 100%;
    float: right;
    margin-right: 10px;
    width: 150px;
    border: none;
    text-align: right;
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
