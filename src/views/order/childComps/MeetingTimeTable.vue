<template>
	<div id="employMeeting">
		<div id="topTime">
			<ul id="startTimeBlockUl">
				
			</ul>
		</div>
		<div id="meetingContent">
			<ul id="meetingContentBlockUl">
				
			</ul>
		</div>
		<div id="bottomTime">
			<ul id="endTimeBlockUl">
				
			</ul>

		</div>
	</div>
</template>
<script>
   import {addZero} from 'common/utils.js'

   export default {
		name: "MeetingTimeTable",
		components: {
			
		},
		props:{
		  orderList:{
			  type:Array,
			  default(){
                return []
              }
		  },
		  startTime:{
			  type:String,
			  default(){
                return ""
              }
		  },
		  endTime:{
			  type:String,
			  default(){
                return ""
              }
		  }
		},
		created() {
          //this.addOrderTime();
		},
		mounted() {
            this.addOrderTime();
		},
		updated () {
			
		},
		methods: {
			//动态创建时间表格
			addOrderTime(){
				let list = this.orderList;
				console.log(this.orderList)
				var table1=document.getElementById("startTimeBlockUl");
				var table2=document.getElementById("meetingContentBlockUl");
				var table3=document.getElementById("endTimeBlockUl");
				table1.innerHTML="";
				table2.innerHTML="";
				table3.innerHTML="";
				for(let j=0;j<15;j++){
					//动态创建时间表格
					var li1=document.createElement("li");
					li1.className='time'+(j+8);
					var str1=(j+8);
					li1.innerHTML=addZero(str1,2,'0')+":00";;
					
					table1.appendChild(li1);
					
					var li2=document.createElement("li");
					li2.className='timeBlock';
					li2.innerHTML='<b time="">&nbsp;</b><b>&nbsp;</b><b>&nbsp;</b><b>&nbsp;</b>';
					table2.appendChild(li2);
					
					var li3=document.createElement("li");
					li3.className='time'+(j+9);
					var str3=(j+9);
					li3.innerHTML=addZero(str3,2,'0')+":00";
					table3.appendChild(li3);
				}
				if(list.length!=0){
					for(var i=0;i<list.length;i++){
						//向时间表格中填写是否有会信息
						var stratTime=list[i].StartTime;
						var endTime=list[i].Endtime;
						//if(stratTime.split(" ")[0]==defaultDate("day")){
						if(stratTime.split(" ")[0]==(this.stratTime).split(" ")[0]){
							var startInfo=stratTime.split(" ")[1];
							var endInfo=endTime.split(" ")[1];
							var startH=startInfo.split(":")[0];
							var startM=startInfo.split(":")[1];
							var startS=startInfo.split(":")[2];
							var endH=endInfo.split(":")[0];
							var endM=endInfo.split(":")[1];
							var endS=endInfo.split(":")[2];
							var querystartId=document.querySelector("#startTimeBlockUl");
							var queryStartTime=querystartId.querySelectorAll('li');
							var meetingIndex=0;
							var endIndex=0;
							for(var m=0;m<queryStartTime.length;m++){
								if(queryStartTime[m].innerHTML.split(":")[0]==startH){
									meetingIndex=m;
									break;
								}
							}
							var timeSec=(getTimeSec(stratTime,endTime))/(1000*60);//开会总用时
							var spanIndex=0;
							//开始时间所占用的第几块
							if(startM!="00"){
								spanIndex=Math.ceil(parseInt(startM)/15)
							}else{
								spanIndex=Math.ceil(parseInt(startM)/15)+1;
							}
							//结束时间所占用的第几块
							endIndex=Math.ceil(parseInt(endM)/15);
							var totalBlock=((parseInt(endH)-parseInt(startH))-1)*4+(4-spanIndex+1)+endIndex;//会议用时占用的所有块数
							
							var startBlock=((parseInt(startH)-8)*4)+spanIndex;
							//开始会议所占用的第几块
							var blockul=document.querySelector("#meetingContentBlockUl");
							var lengthb=blockul.querySelectorAll("b");
							for(var k=startBlock;k<totalBlock+startBlock;k++){
								lengthb[k-1].innerHTML="有会";
							}
							console.log(lengthb)
						}
					}
				}	
			},
			
			// 2.网络请求相关方法
		}
	}
	// 在开发项目中遇到在组件中添加样式不生效的情况--将去掉style的scoped属性。
</script>
<style>
	#employMeeting {
		width: 100%;
		overflow: auto;
		white-space: nowrap;
	}

	#topTime {
		width: 100%;
	}

	#startTimeBlockUl {
		width: 100%;
	}

	#startTimeBlockUl li {
		display: inline-block;
		width: 80px;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}

	#meetingContentBlockUl li {
		display: inline-block;
		width: 80px;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}

	#meetingContentBlockUl li b {
		display: block;
		width: 80%;
		height: 100%;
		line-height: 40px;
		text-align: center;
		margin: 0 auto;
		background: #cbc8c8;
		margin-top: 10px;
	}

	#endTimeBlockUl li {
		display: inline-block;
		width: 80px;
		height: 40px;
		text-align: center;
		line-height: 40px;
	}
</style>
