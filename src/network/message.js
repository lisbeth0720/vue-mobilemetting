//放的是首页的一些请求
import { request } from "./request.js";

//请求本地json数据
var url = window.location.href; //网页地址
var serverUrl = "http://" + (url.split("//")[1]).split("/")[0] + "/" + (url.split("//")[1]).split("/")[1]; //服务器地址
if (serverUrl.indexOf("#") >= 0) {
    serverUrl = serverUrl.split("#")[0]
}

if (serverUrl.indexOf("localhost") >= 0) {
    //serverUrl = "http://localhost:8080"
} else {
    serverUrl = serverUrl + "/dist/";
}

let newUrl = serverUrl + "data/message/message.json"; //全部消息

//得到会议消息-
// export function getMessages(type) { //type=all.全部，=unread未读，=read已读
//     if (type == "unread") {
//         newUrl = serverUrl + "data/message/message1.json"; //未读消息
//     } else if (type == "read") {
//         newUrl = serverUrl + "data/message/message2.json"; //已读消息
//     }
//     return request({
//         url: newUrl,
//     })
// }
let Ticket2 = localStorage.getItem("Ticket");
//得到会议消息
export function getMessages(pageIndex, type, pageSize) { //type=2全部，=0未读，=1已读
    var type2=2;
    if (type =="all"){
        type2 = 2;
    } else if (type =="unread"){
        type2 = 0;
    }else if(type=="read"){
        type2 = 1;
    }
    return request({
        url: 'api/infrom/getlist',
        params: {
            page: pageIndex,
            status: type2,
            pageSize: pageSize
        },
        headers: {
            "Authorization": "Bearer " + Ticket2
        },
    })
}
//得到会议消息详细信息
export function getDetails(id) { //type=all.全部，=unread未读，=read已读
    return request({
        url: 'api/infrom/getone',
        params: {
            id: id,
        },
        headers: {
            "Authorization": "Bearer " + Ticket2
        },
    })
}

//一键全读-这个接口不支持get方式，需要用post
// export function getAllRead() { 
//     return request({
//         url: 'api/infrom/read?rnd=' + Math.random(999) * 1000,
//         headers: {
//             "Authorization": "Bearer " + Ticket2
//         },
//     })
// }
import axios from 'axios'
export function getAllRead() {
    return axios.post('http://192.168.1.145:3344/api/infrom/read',
        {
          rnd: Math.random(999) * 1000
       },
        {
        headers: {
            "Authorization": "Bearer " + Ticket2
        },
    })
}



