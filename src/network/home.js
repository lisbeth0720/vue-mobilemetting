//放的是首页的一些请求
import { request } from "./request.js";

   //请求本地json数据
   var url = window.location.href;//网页地址
    var serverUrl = "http://"+(url.split("//")[1]).split("/")[0]+"/"+(url.split("//")[1]).split("/")[1];//服务器地址
    if(serverUrl.indexOf("#")>=0){
        serverUrl=serverUrl.split("#")[0]
    }
   
    if (serverUrl.indexOf("localhost") >= 0) {
          //serverUrl = "http://localhost:8080"
     }else{
          serverUrl=serverUrl+"/dist/";
     }
   
    let newUrl=serverUrl+"data/home/swiper.json";

//得到首页轮播数据
export function getHomeSwiper(){
    return request({
        url:newUrl,
    })
}

//得到会议室列表
export function getRoomList(Ticket,start,end,count,device,page){
    //console.log(Ticket)
    //为了能很好的实现其他界面，不用刷新就重新登录，先把信息存到localStorage
    let Ticket2 = Ticket;
    if (Ticket2 == "" || Ticket2 == undefined) {
        Ticket2 = localStorage.getItem("Ticket");
    }
    return request({
        // url:'api/room/get?rnd='+Math.random(999)*1000,
        url:'api/room/get',
         params:{
            roomName:"",
            //startTime:start==undefined?"":start,
            startTime:start,
            endTime:end,
            sort:"",
            pageSize:"10",
            page:page,
            deviceName:device,
            contain:count
         },
         headers:{
            "Authorization":"Bearer "+Ticket2
        },
    })
}
