<template>
  <div class="room-item" @click="roomItemClick">
    <div class="room-item-div">
         <div class="item-left">
            <img src="~/assets/img/common/default.jpg" />
            <span class="roomStatus">{{getRoomStatus(roomItem.Status)}}</span>
             <!-- <img v-if="roomItem.Picture" :src="roomItem.Picture" />
            <img else :src="pictureUrl"/> -->
        </div>
        <ul class="item-right">
             <li>
                <span class="roomName">{{roomItem.RoomName}}</span>
                 <span class="count">&nbsp;坐席{{roomItem.Contain}}人</span>
            </li>
            <li>
                <span class="addressDesc">会议室地点:</span>
                <span class="address">{{roomItem.MeetingAddress}}</span>
            </li>
             <li>
                <span class="device">
                     <i v-for="deviceItem in roomItem.deviceList" :key="deviceItem">{{deviceItem.deviceName}}</i>
                        <!-- 设备多余5个的暂时就不显示 -->
                         <!-- <i v-for="deviceItem in roomsItem.deviceList" :key="deviceItem" v-if="roomsItem.deviceList.length<5">{{deviceItem.deviceName}}</i> -->            
                </span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomItem',
  props:{
     roomItem:{
         type:Object,
         default(){
           return {}
         }
     }
  },
  data(){
      return{
         //roomStatus:"启用"
      }
  },
  computed(){
    
  },
  methods:{
      //得到会议室状态
      getRoomStatus(Status){
        let roomStatus="启用"
        if (Status == "0") {
            roomStatus = "启用";
        } else if (Status == "1") {
            roomStatus = "审核";
        } else if (Status == "2") {
            roomStatus = "禁用";
        } else if (Status == "3") {
            roomStatus = "维修";
        } else if (Status == "4") {
            roomStatus = "预留";
        }
        return roomStatus;
     },
     //点击会议室跳转到预约会议界面，进行预约会议
     roomItemClick(){
        //跳转到预约会议页
		this.$router.push("/order");
     } 
  }
}
</script>

<style>
   .room-item{
       height:90px;
       border-bottom:1px solid #c8c7cc;
   }
   .room-item-div{
       width:100%;
       height:100%;
       display:flex;
       font-size:12px;
       text-align: center;
   }
   .item-left{
       width:70px;
       height:100%;
       position:relative;
   }
   .item-left img{
       height:42px;
       width:42px;
       position: relative;
       top:10px;
   }
   .roomStatus{
       display: block;
       width:42px;
       height: 20px;
       text-align: center;
       overflow: hidden;
       background: rgba(67,152,246,0.9);
       color: #fff;
       line-height: 20px;
       position: absolute;
       bottom:10px;
       left:50%;
       transform: translate(-50%,0);
       border-radius: 4px;
   }
   .item-right{
       flex:1;
       width:64%;
       height:90%;
       position:relative;
       top:10px;
       /* float: left; */
       list-style: none;
   }
   .item-right li{
       width:100%;
       text-align: left;
       margin-bottom:8px;
   }

   .roomName{
       font-size:18px;
   }
   .addressDesc,.address{
        font-size:14px;
   }
   .device{
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
   }
   .device i{
       font-style: normal;
       font-size: 4px;
       border: 1px solid #888;
       margin-right: 5px;
       padding: 2px;
       transform: scale(0.5);
   }
</style>
