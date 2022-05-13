<template>
     <div class="meetingInfo">
         <ul v-if="meetingList.length>0">
               <li class="list-item"
                  v-for="(item,index) in meetingList" 
                  :key="index">
                 <img src="~assets/img/common/default.jpg">
                 <!-- <img src="~assets/img/common/default.jpg" :onerror="defaultPic(this)"> -->
                 <ul class="right">
                   <li class="size">主题：{{item.Title}}</li>
                   <li class="address">地点：{{item.MeetingAddress}}</li>
                   <li class="time">时间：
                      <span>{{getMeetingTime(item.StartTime,item.Endtime)}}</span>   
                   </li>
                   <li class="status">
                     <span>{{getMeetingStatus(item.Status)}}</span>
                     <span style="margin-left:15px;">{{getRoomStatus(item.RoomStatus)}}</span>
                     </li>
                  </ul>
                </li>
          </ul>
          <div v-else class="empty">
              <div>暂无</div>
          </div>
     </div>
</template>
<script>
  export default {
  name: 'MeetingInfo',
  props:{
     meetingList:{
         type:Array,
         default(){
           return []
         }
     },
  },
  data(){
    return {
      defaultImg:require("../../../assets/img/common/default.jpg")
    }
  },
  mounted(){
    //尝试在mounted生命周期里面执行方法获取refs的DOMd  
    this.$nextTick(() => {
      //this.defaultPic();
    });
  },
  methods: {
       getMeetingTime(start,end){//规范下会议时间
          let MeetTime="";
          // var startTime = start.replace('-', '/'); //开始时间
          // startTime = new Date(Date.parse(startTime));
          // var endTime = end.replace('-', '/'); //结束时间
          // endTime = new Date(Date.parse(endTime));
          // var hstart = addZero(startTime.getHours(), 2, 0);
          // var mstrat = addZero(startTime.getMinutes(), 2, 0);
          // var hend = addZero(endTime.getHours(), 2, 0);
          // var mend = addZero(endTime.getMinutes(), 2, 0);
          //MeetTime=start.split(" ")[0] +hstart + ":" + mstrat + "-" +hend + ":" + mend;
          var startTime=start.split(" ")[1].split(":")[0]+":00";
          var endTime=end.split(" ")[1].split(":")[0]+":00";
           MeetTime=start.split(" ")[0] +"  "+startTime + "-" +endTime;
          return MeetTime;
       },
       //得到会议审核状态
        getMeetingStatus(status){
          var meetStatus="";
           if (status == "0") {
                meetStatus = "会议未审核";
                //mtColorStr = "";
              } else if (status == "1") {
                meetStatus= "会议审核通过";
                //mtColorStr = "";
              } else if (status == "11") {
                meetStatus = "会议审核通过";
                //mtColorStr = "";
              } else if (status == "2") {
                meetStatus = "会议审核不通过";
                //mtColorStr = "red";
              } else if (status == "12") {
                meetStatus = "会议审核不通过";
                //mtColorStr = "red";
              } else if (status == "99") {
                meetStatus = "会议取消";
                //mtColorStr = "red";
              }
              return meetStatus;
        },
        //得到会议室审核状态
        getRoomStatus(status){
          var roomStatus="";
             if (status == "0") { //判断会议室状态
                  roomStatus = "未选择会议室";
                  //roomColorStr = "#a701f9";
                } else if (status == "1") {
                  roomStatus = "会议室待审批";
                  roomColorStr = "orange";
                } else if (status == "2") {
                  roomStatus = "会议室审批中";
                  //roomColorStr = "#f1ba54";
                } else if (status == "3") {
                  //不需要审批,预约审核通过
                  roomStatus = "会议室审批通过";
                  //roomColorStr = "";
                } else if (status == "4") {
                  roomStatus = "会议室审批未通过";
                  //roomColorStr = "red";
                } else if (status == "99") {
                  roomStatus = "会议取消"; //
                  //roomColorStr = "red";
                }
            return roomStatus;
        },
        // defaultPic(thisImg){
        //   thisImg.setAttribute("src", (require("../../../assets/img/common/default.jpg")));
        //   //vue中这样设置src报错-获取不到dom
        // }
        defaultPic(index){
          //thisImg.setAttribute("src", (require("../../../assets/img/common/default.jpg")));
        // console.log(this.$refs.meetingList.getElementsByClassName("roomImg"))
         // document.getElementsByClassName("roomImg")[0].setAttribute("src", (require("../../../assets/img/common/default.jpg")));
         // console.log(this.$refs.roomImg[index])
          console.log(this.$refs.room)

        }
  }
  
}
</script>

<style scoped>
  .meetingInfo{
      width:100%;
    }
    .list-item{
      height: 120px;
    width: 100%;
    border-bottom: 1px solid #E7E7E7;
    position: relative;
    background: #fff;
    }
    .list-item img{
    height: 70px;
    width: 80px;
    /* margin-top: 20px; */
    /* margin-left: 20px; */
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(0, -50%);
    }
    .list-item ul {
    /* margin-top: 20px; */
    position: absolute;
    left: 110px;
    top: 50%;
    transform: translate(0, -50%);
}
*{
  list-style: none;
}
.size {
    font-size: 14px;
    text-align: left;
    color: #333;
}
.time, .address {
    font-size: 14px;
    text-align: left;
    margin-left: 0px;
    color: #666666;
}
.status {
    font-size: 12px;
    color: #999;
}
.empty{
  text-align: center;
  font-size:24px;
  margin-top:50px;
}
</style>
