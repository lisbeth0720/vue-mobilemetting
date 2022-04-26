//放的是首页的一些请求
import { request } from "./request.js";

var indexUrl=window.location.search;
// var localTicket=localStorage.getItem("Ticket");
var localTicket="";
var localMaxTicket=localStorage.getItem("MaxTicket");
//以下程序为单点登录使用
var outerSearch="";
if(indexUrl.indexOf("ticket=")>=0){
	outerSearch=indexUrl.split("ticket=")[1];
	if(outerSearch.indexOf("&")>0){
		outerSearch=outerSearch.split("&")[0]
	}
	localStorage.setItem('Ticket',outerSearch);
}
localTicket=localStorage.getItem("Ticket");
var TicketStr="Bearer "+localTicket;

export function getTocken(){
    return request({
        url:'api/users/gettokenbyjwt/v2',
        params:{
            companyid:"CHRCHY",
			username:"administrator",
			password:"admin@123"
        }
    })
}

export function getMaxTicket(){
	//this.maxTicket="Bearer "+localStorage.getItem("MaxTicket");
    return request({
        url:'api/users/gettokenbyTicket/v2',
        params:{
            token:"Bearer "+localStorage.getItem("MaxTicket")
        }
    })
}

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
export function getRoomList(){
    return request({
        // url:'api/room/get?rnd='+Math.random(999)*1000,
        url:'api/room/get',
        //  params:{
        //      type,
        //      page
        //  },
         headers:{
            "Authorization":TicketStr
        },
    })
}
