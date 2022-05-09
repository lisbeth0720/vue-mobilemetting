//放的是首页的一些请求
import { request } from "./request.js";

//我的预约
export function getOrder(roomName, status, pageSize,page){
    //为了能很好的实现其他界面，不用刷新就重新登录，先把信息存到localStorage
    let Ticket = localStorage.getItem("Ticket");
    return request({
        url:'api/order/getorder',
         params:{
             roomName: roomName,
             status: status, //0=未结束的，=1一结束的
             pageSize: pageSize, //默认是20条
             page: page
         },
         headers:{
            "Authorization":"Bearer "+Ticket
        },
    })
}

//我的会议
export function getMeeting(roomName, status, pageSize, page) {
    //为了能很好的实现其他界面，不用刷新就重新登录，先把信息存到localStorage
    let Ticket = localStorage.getItem("Ticket");
    return request({
        url: 'api/order/getmeeting',
        params: {
            roomName: roomName,
            status: status, //0=未结束的，=1一结束的
            pageSize: pageSize, //默认是20条
            page: page
        },
        headers: {
            "Authorization": "Bearer " + Ticket
        },
    })
}
//我的常用会议室
export function getOftenroom(num) {
    //为了能很好的实现其他界面，不用刷新就重新登录，先把信息存到localStorage
    let Ticket = localStorage.getItem("Ticket");
    return request({
        url: 'api/room/getoftenroom',
        params: {
            num: num,//显示常用会议室的前几名
        },
        headers: {
            "Authorization": "Bearer " + Ticket
        },
    })
}
