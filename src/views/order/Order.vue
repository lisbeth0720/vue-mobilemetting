<template>
	<div id="order">
		<nav-bar class="order-nav">
			<template v-slot:center>
				<div>会议室</div>
			</template>
		</nav-bar>
		<better-scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pulling-up="loadMore">
			<room-list-item :room-item="roomItem" />
			<!-- <meeting-detail /> -->
			<ul id="meetingInfo">
				<li class="mt-li">
					<div class="mt-row">
						<label>会议主题</label>
						<input type="text" id="Title" placeholder="*会议主题必填" data-input-clear="3" v-model="title">
						<span></span>
						<b>*</b>
					</div>
				</li>
				<li>
					<div class="mt-row">
						<label>申请部门</label>
						<input type="text" id="deptname" readonly="readonly" v-model="deptname">
					</div>
				</li>
				<li>
					<div class="mt-row">
						<label>预约人</label>
						<input type="text" readonly="readonly" id="username" value="administrator">
						<p id="mineMeeting">
							<input name="notJoin" type="checkbox" id="notJoin" onchange="changeJoin()" value="true" checked="CHECKED">
							我要参会</p>
					</div>
				</li>
				<li>
					<div class="mt-row">
						<label>联系人</label>
						<input type="text" id="Linkman" class="input-clear" placeholder="*联系人为必填" data-input-clear="7" v-model="linkman">
						<span class="icon icon-clear hidden"></span>
						<b>*</b>
					</div>
				</li>
				<li>
					<div class="mt-row">
						<label>联系方式</label>
						<input type="text" id="LinkPhone" class="input-clear" placeholder="*联系方式为必填" data-input-clear="8" v-model="linkPhone">
						<span class="icon icon-clear hidden"></span>
						<b>*</b>
					</div>
				</li>
				<li>
					<div class="mt-row">
						<span class="selectTimeSpan">开始时间</span>
						<input id="time1" class="selectBtn" align="right" data-options="{}" v-model="startTime" />
					</div>
				</li>
				<li>
					<div class="mt-row">
						<span class="selectTimeSpan">结束时间</span>
						<input id="time2" class="selectBtn" align="right" data-options="{}" v-model="endTime" />
					</div>
				</li>
				<li>
					<div class="mt-content">
						<div class="mt-checkbox mt-left">
							<label>上午</label>
							<input checked="" name="checkbox" value="Item1" type="checkbox" id="selectMorning">
						</div>
						<div class="mt-checkbox mt-left">
							<label>下午</label>
							<input name="checkbox" value="Item2" type="checkbox" id="selectAftorn">
						</div>
					</div>
				</li>
				<li>
					<div class="mt-row">
						<label>参会人</label>
						<button type="button" class="orderMeetingCommon" id="selectMeetingMember" @click="clickSelectPeople">请选择参会人员</button>
						<span>(<i id="selectCount">1</i>)</span>
					</div>
				</li>
				<li>
					<div class="mt-row">
						<label>主持人</label>
						<input id="showUserPicker" class="btn btn-block input-clear" type="text" placeholder="请选择主持人" readonly="readonly"
						 data-input-clear="10" v-model="showUserPicker">
						<span class="icon icon-clear hidden"></span>
					</div>
				</li>
				<li>
					<div class="mt-row">
						<label>联系方式</label>
						<input id="hostPhone" type="text" class="input-clear" placeholder=" " data-input-clear="11" v-model="hostPhone">
						<span class="icon icon-clear hidden"></span>
					</div>
				</li>
				<li>
					<div class="mt-row">
						<label>设备</label>
						<button type="button" class="orderMeetingCommon" id="selectMeetingDevice" @click="clickSelectDevice">请选择设备</button>
					</div>
				</li>
				<li style="height:100px;border:none;">
					<div class="mt-row">
						<label>其他需求</label>
						<textarea id="specialText" type="text" class="input-clear" placeholder="定制化服务填写" v-model="specialText"></textarea>
					</div>
				</li>
			</ul>
			<meeting-time-table :order-list="orderList"
			                    :start-time="startTime"
								:end-time="endTime"/>
			<div id="submitBtn">
				<button type="button" class="commSubmitBtn activeBtn" id="submitOrderBtn" @click="submitOrder">确认</button>
				<button type="button" class="commSubmitBtn" id="backOrderBtn" @click="resetOrderPage">重置</button>
			</div>
		</better-scroll>
		<back-top @click.native="backTop" v-show="isShowBackTop" />
		<div class="m-navbar" v-if="nav" @click="nav=false"></div>
		<transition name="nav">
			<user-list v-if="nav" class="m-navba" @confirm-screen="getConfirmScreen" />
		</transition>
	</div>
</template>
<script>
	//1.1公共组件或者常量
	import NavBar from 'components/common/navbar/NavBar.vue'
	import BetterScroll from 'components/common/scroll/BetterScroll.vue'
	import BackTop from 'components/content/backTop/BackTop.vue'
	import RoomListItem from 'components/content/rooms/RoomListItem.vue'
	import {BACK_POSITION} from 'common/const.js'

	//2.子组件
	//import MeetingDetail from './childComps/MeetingDetail.vue'
	import MeetingTimeTable from './childComps/MeetingTimeTable.vue'
	import UserList from './childComps/UserList.vue'

	//3.一些方法
	import {submitOrder,getThisRoom} from "network/order.js";

	export default {
		name: "Order",
		components: {
			NavBar,
			BetterScroll,
			BackTop,
			RoomListItem,
			//MeetingDetail,
			MeetingTimeTable,
			UserList,
		},
		data() {
			return {
				roomItem: {},
				isShowBackTop: false,
				userListArr: [],
				mineJoinObj: [],
                orderList: [],

				nav: false,

				roomid: null,
				title: "测试会议",
				deptname: "研发部",
				startTime: "2022-05-14 15:00",
				endTime: "2022-05-14 19:00",
				linkman: "单位超级管理员",
				linkPhone: "15210872345",
				showUserPicker: "",
				hostPhone: "",
				selectCount: "1",
				specialText: "",
				userListArr: {
					SeatCode: "0",
                    UserLevel: 0,
                    fullname: "单位超级管理员",
                    tel: "1652428800",
                    userID: 1,
				},
				deviceListArrChecked: [],
			}
		},
		computed: {

		},
		watch: {

		},
		activated() {

		},
		deactivated() {

		},
		created() {
			//1.保存传入的id
			this.roomid = this.$route.params.id;
            this.getRoomDetails(this.roomid,this.startTime, this.endTime)

			// this.mineJoinObj.userID = loginInfo.data.userid;
			// this.mineJoinObj.fullname = decodeURI(escape(loginInfo.data.name));
			// this.mineJoinObj.UserLevel = 0;
			// this.mineJoinObj.SeatCode = "0";
			// this.mineJoinObj.tel = decodeURI(escape(loginInfo.exp));
            //单独刷新界面，下面的方法不执行，放到mounted里才执行，从会议室跳到这个界面会执行
			//this.getNowDate()
		},
		mounted() {
          console.log(this.orderList)
		},

		destroyed() {

		},
		methods: {
			// 1.事件监听方法
			contentScroll(position) {
				//console.log(position)
				//1.判断BackTop是否显示
				this.isShowBackTop = (-position.y) > BACK_POSITION;
				//2.判断tabControl是否吸顶（position:fixed)
				//this.isTabFixed=(-position.y)>this.tabOffsetTop;
			},
			//判断是否回到顶部是否显示
			backTop() {
				this.$refs.scroll.scrollToTop(0, 0);
			},
			//点击-选择参会人
			clickSelectPeople() {
				this.nav = true;
			},
			//子组件传过来的事件-点击"确定"按钮隐藏侧边栏,并且会议室列表发生改变重新渲染数据
			getConfirmScreen(data) { //val是子组件传过来的参数值
				this.nav = false;
				console.log("父组件接收事件")
				//console.log(data) //data是子组件传过来的值
				//更新筛选后的会议室列表
				this.rooms = data
			},

			//提交预约
			submitOrder() {
				this.checkFiled()
			},
			//重置
			resetOrderPage() {

			},
			//判断必填元素是否全部填写
			checkFiled() {
				if (document.getElementById("Title").value == "") {
					alert("会议主题为必填项")
					return false;
				} else if (document.getElementById("Linkman").value == "") {
					alert("联系人为必填项")
					return false;

				} else if (document.getElementById("LinkPhone").value == "") {
					alert("联系电话为必填项")
					return false;

				} else {
					this.submitCheckOrder(this.roomid, this.title, this.startTime, this.endTime, this.linkman, this.linkPhone, this.showUserPicker,
						this.hostPhone, this.selectCount, this.specialText, this.userListArr, this.deviceListArrChecked);
				}
			},
			//更改参会/不参会按钮，更新参会人员列表
			changeJoin() {
				var notJoin = document.getElementById("notJoin").checked;
				var newArr = [];

				if (notJoin) {
					selfJoinStr = "";
					if (userListArr.length > 0) {
						var count = 0;
						for (var i = 0; i < userListArr.length; i++) {
							newArr.push({
								value: userListArr[i],
								text: userListArr[i].fullname
							})
							if (userListArr[i].userID == mineJoinObj.userID) {
								count++;
								break;

							} else {

							}
						}
						//userPicker.setData(newArr);
						if (count == 0) {
							document.getElementById("selectCount").innerHTML = parseInt(document.getElementById("selectCount").innerHTML) +
								1;
							//如果数组中没有预约人，并且预约人选中了我要参会，则将预约人也加入到选择主持人的列表中
							userListArr.push(mineJoinObj);
							newArr.push({
								value: mineJoinObj,
								text: mineJoinObj.fullname
							})
							userPicker.setData(newArr);
						} else {

						}
					} else {
						document.getElementById("selectCount").innerHTML = parseInt(document.getElementById("selectCount").innerHTML) + 1;
						userListArr.push(mineJoinObj);
						newArr.push({
							value: mineJoinObj,
							text: mineJoinObj.fullname
						})
						userPicker.setData(newArr);
					}

				} else {
					selfJoinStr = selfLoginUserId;
					if (userListArr.length > 0) {
						var count = 0;
						for (var i = 0; i < userListArr.length; i++) {

							if (userListArr[i].userID == mineJoinObj.userID) {
								count++;
								userListArr.remove(userListArr[i]);
								break;

							} else {
								newArr.push({
									value: userListArr[i],
									text: userListArr[i].fullname
								})
							}
						}
						if (count > 0) {
							document.getElementById("selectCount").innerHTML = parseInt(document.getElementById("selectCount").innerHTML) -
								1;
						}
					} else {
						document.getElementById("selectCount").innerHTML = parseInt(document.getElementById("selectCount").innerHTML) - 1;
					}
					userPicker.setData(newArr);
				}
			},

			// 2.网络请求相关方法
			//得到会议室信息
			getRoomDetails(roomid,startTime, endTime) {
               getThisRoom(roomid,startTime, endTime).then(res=>{
				  if(res.code=="0"){
					  this.roomItem=res.data.data[0];
                         //var dataList=res.data.data[0];
						// var RoomName=dataList.RoomName;
						// var Status=dataList.Status;
						// var roomContain=dataList.Contain;
						// var RoomArea=dataList.RoomArea;
						// var Owner=dataList.Owner;
						// var OwnerPhone=dataList.OwnerPhone;
						// var MeetingAddress=dataList.MeetingAddress;
						// var ID=dataList.ID;
						// var DeviceCount=dataList.DeviceCount;
						// var deviceList=dataList.deviceList;
						// var deviceStr="";
						//console.log(this.roomItem.OrderList)
						 this.orderList=this.roomItem.OrderList;
						// var roomPic=dataList.Picture;
						//addOrderTime(orderList);

				  }else if(res.code=="30001"){//无效token、无权限
                     this.$router.push("/login");
					 
				  }else if(res.code=="30006"){
				    //getMaxTicket();
				  }
				})
			},
			//提交预约会议信息
			submitCheckOrder(roomid, title, startTime, endTime, linkman, linkPhone, showUserPicker, hostPhone, selectCount,
				specialText, userListArr, deviceListArrChecked) {
				submitOrder(roomid, title, startTime, endTime, linkman, linkPhone, showUserPicker, hostPhone, selectCount,
					specialText, userListArr, deviceListArrChecked).then(res => {
					//如果没有选择任何人，则判断预约人是否参会
					// if (userListArr.length == 0) {
					// 	if (document.getElementById("notJoin").checked) {
					// 		if (userListArr.indexOf(mineJoinObj) >= 0) {

					// 		} else {
					// 			userListArr.push(mineJoinObj);
					// 		}
					// 	}
					// }
					// deviceListArrChecked = [];
					// var selectContent = document.getElementById("middlePopover");
					// var checkBoxDevice = selectContent.querySelectorAll("li");
					// for (var i = 0; i < checkBoxDevice.length; i++) {
					// 	if (checkBoxDevice[i].querySelector("input").checked) {
					// 		var str222 = new Object();
					// 		str222.deviceid = checkBoxDevice[i].getAttribute("deviceid");
					// 		str222.deviceName = checkBoxDevice[i].getAttribute("deviceName");
					// 		str222.remark = checkBoxDevice[i].getAttribute("remark");
					// 		deviceListArrChecked.push(str222);
					// 	}
					// }
					//document.getElementsByClassName("loadingPage")[0].style.display = "block";
					//alert(res.message);
					//document.getElementsByClassName("loadingPage")[0].style.display = "none";
					let data = res.data;
					alert(data.message)
					if (data.code == "0") {
						setTimeout(function() {
							//this.$router.push("/home");
							//这里执行跳转路由怎么报错
						}, 2000);
						this.$router.push("/home");
					} else if (data.code == "30001") { //无效token、无权限
						this.$router.push("/login");
						//top.location.href="../login.html";
					} else if (data.code == "30006") {
						//getMaxTicket();
						this.$router.push("/login");
					}
				})
		// 		var Ticket2 = localStorage.getItem("Ticket");
		// 		axios({
        //            methods: 'post',
        //            url: '/user',
        //            data: {
        //               "MeetingRoomID": roomid,
        //               "Title": title,
        //               "StartTime": startTime,
        //                "Endtime": endTime,
        //                "Linkman": linkman,
        //               "LinkPhone": linkPhone,
        //              "Hoster": showUserPicker,
        //              "HosterPhone": hostPhone,
        //              "Amount": selectCount,
        //              "Special": specialText,
        //              "userList": JSON.parse(JSON.stringify(userListArr)),
        //              "deviceList": JSON.parse(JSON.stringify(deviceListArrChecked))
        //         },
        //          headers: {
        //                "Authorization": "Bearer " +Ticket2
        //         },
        //         })
        //     .then( (response) => {
        //    console.log(response);
        //     })
        //  .catch( (error) => {
        //      console.log(error);
        //   });
		 	},
			 //获取当前时间
			getNowDate(){
				var str="";
				var date=new Date();
				var year=date.getFullYear();
				var month=date.getMonth()+1;
				var day=date.getDate();
				var hours=date.getHours();
				var minutes=date.getMinutes();
				str='{"beginYear":'+year+',"beginMonth":'+month+',"beginDay":'+day+',"beginHours":'+hours+',"beginMinutes":'+minutes+'}';
				console.log(str)
				return str;
			}
		}
	}
</script>
<style scoped>
	#meetingInfo {
		background: #fff;
	}

	#meetingInfo li {
		border-bottom: 1px solid #c8c7cc;
		height: 44px;
		line-height: 44px;
	}

	.mt-row {
		position: relative;
	}

	.mt-row label {
		padding: 11px 10px;
		width: 27%;
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		line-height: 1.1;
		float: left;
	}

	#meetingInfo li input[type="text"] {
		font-size: 14px;
		height: 40px;
		padding: 10px 15px;
		border-radius: 3px;
		outline: 0;
		/* -webkit-user-select: text; */
		-webkit-appearance: none;
		margin-bottom: 0;
		padding-left: 0;
		border: 0;
		box-sizing: border-box
	}

	.mt-row #mineMeeting {
		color: #ababab;
		width: 35%;
		position: absolute;
		right: 0;
		top: 0;
	}

	.mt-row .input-clear~.icon-clear,
	.mt-row .input-password~.icon-eye,
	.mt-row .input-speech~.icon-speech {
		font-size: 20px;
		position: absolute;
		z-index: 1;
		top: 10px;
		right: 0;
		width: 38px;
		height: 38px;
		text-align: center;
		color: #999;
	}

	#meetingInfo b {
		color: red;
		font-size: 20px;
		float: right;
		margin-right: 10px;
	}

	.selectTimeSpan {
		width: 27%;
		display: block;
		float: left;
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		line-height: 1;
		float: left;
		width: 35%;
		padding: 0 15px;
		line-height: 40px;
	}

	.selectBtn {
		float: right;
		margin-right: 10px;
		width: 78%;
		display: block;
		float: left;
		font-family: 'Helvetica Neue', Helvetica, sans-serif;
		line-height: 1.1;
		float: left;
		width: 60%;
		/* padding: 11px 15px; */
		border: none;
		margin-top: 7px;
		height: 30px;
		line-height: 30px;
		text-align: right;
	}

	.mt-checkbox,
	.mt-radio {
		width: 50%;
		float: left;
	}

	.mt-checkbox.mt-left label,
	.mt-radio.mt-left label {
		padding-right: 15px;
		padding-left: 58px;
	}

	.mt-checkbox.mt-left input[type=checkbox],
	.mt-radio.mt-left input[type=radio] {
		left: 20px;
	}

	#selectMeetingMember {
		color: #fff;
		background: #0075ff;
		margin-top: 5px;
		height: 30px;
		box-sizing: border-box;
		/* width: 100px; */
		padding: 2px 8px;
		margin-right: 20px;
		border: none;
	}

	#selectMeetingDevice {
		color: #fff;
		background: #0075ff;
		margin-top: 5px;
		height: 30px;
		box-sizing: border-box;
		padding: 2px 8px;
		border: none;
		margin-right: 20px;
	}

	.mt-row textarea {
		width: 100%;
		font-size: 14px;
		padding: 10px;
		box-sizing: border-box;
		border: 0;
	}

	#submitBtn {
		text-align: center;
	}

	.content {
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		overflow: hidden;
	}

	.commSubmitBtn {
		font-size: 14px;
		font-weight: 400;
		line-height: 1.42;
		position: relative;
		display: inline-block;
		margin-bottom: 0;
		padding: 6px 12px;
		cursor: pointer;
		-webkit-transition: all;
		transition: all;
		-webkit-transition-timing-function: linear;
		transition-timing-function: linear;
		-webkit-transition-duration: .2s;
		transition-duration: .2s;
		text-align: center;
		vertical-align: top;
		white-space: nowrap;
		color: #333;
		border: 1px solid #ccc;
		border-radius: 3px;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
		border-bottom-left-radius: 3px;
		background-color: #fff;
		background-clip: padding-box;
		margin-left: 5px;
	}

	.m-navbar {
		position: fixed;
		left: -3px;
		top: 44px;
		bottom: 49px;
		bottom: 0;
		right: 0;
		background-color: #000;
		opacity: 0.5;
		z-index: 2;
		height: calc(100% - 93px);
	}

	/*存放弹框内容*/
	.m-navba {
		position: absolute;
		left: 100px;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: #fff;
		z-index: 1000;
	}

	.nav-Leave {
		/*定义出场动画的起始状态*/
		/*只停留一帧*/
		transform: translateX(0px);
	}

	.nav-leave-active {
		/*定义出场动画过程*/
		transition: all 0.8s ease;
	}

	.nav-leave-to {
		transform: translateX(600px)
	}

	.nav-enter {
		transform: translateX(600px)
	}

	.nav-enter-active {
		/*定义入场动画过程*/
		transition: all 0.8s ease;
	}

	.nav-enter-to {
		transform: translateX(0px)
	}
</style>
