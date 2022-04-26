<template>
    <div class="RoomList">
         <!-- v-for后面添加:key='item' 不然报错 -->
        <div v-for="item in rooms" :key='item' class="roomList-item">
         <!-- 用变量里的属性需要加冒号 -->
            <!-- <a :href="item.link"> -->
             <div class="item-left">
                 <img src="~/assets/img/common/default.jpg" />
                <!-- <img v-if="item.Picture" :src="item.Picture" />
                <img else :src="pictureUrl"/> -->
             </div>
             <ul class="item-right">
                    <li>
                        <span class="roomName">{{item.RoomName}}</span>
                        <span class="count">&nbsp;坐席{{item.Contain}}人</span>
                    </li>
                    <li>
                        <span class="addressDesc">会议室地点:</span>
                        <span class="address">{{item.MeetingAddress}}</span>
                    </li>
                    <li>
                        <span class="device">
                            <!-- 设备多余5个的暂时就不显示 -->
                            <i v-for="deviceItem in item.deviceList" :key="deviceItem" v-if="item.deviceList.length<5">{{deviceItem.deviceName}}</i>
                            
                        </span>
                    </li>
                </ul>
           
             <!-- </a> -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'RoomList',
  props:{
     rooms:{
         type:Array,
         default(){
           return []
         }
     }
  },
  data(){
      return{
         
      }
  }
  
}
</script>

<style>
   .roomList{
       width:100%;
       /* display:flex; */
       padding:10px 0 20px;
       border-bottom: 8px solid #eee;
   }
   .roomList-item{
       /* flex:1; */
       font-size:12px;
       text-align: center;
       height:90px;
   }
   .item-left{
       width:36%;
       height:100%;
       float: left;
   }
   .item-left img{
       height:70px;
       width:70px;
       position:relative;
       top:10px;
   }
   .item-right{
       width:64%;
       height:90%;
       position:relative;
       top:10px;
       float: left;
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
       /* white-space: nowrap; */
       overflow: hidden;
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
