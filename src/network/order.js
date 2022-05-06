//放的是首页的一些请求
import { request } from "./request.js";

//预约会议
export function submitOrder(roomid, title, startTime, endTime, linkman, linkPhone, showUserPicker, hostPhone, selectCount, specialText, userListArr, deviceListArrChecked){
    //为了能很好的实现其他界面，不用刷新就重新登录，先把信息存到localStorage
   // let Ticket2 = Ticket;
    //if (Ticket2 == "" || Ticket2 == undefined) {
       var Ticket2 = localStorage.getItem("Ticket");
    //}
    console.log(Ticket2)
    return request({
        url:'api/room/get',
        params: {
            "MeetingRoomID": roomid,
            "Title": title,
            "StartTime": startTime,
            "Endtime": endTime,
            "Linkman": linkman,
            "LinkPhone": linkPhone,
            "Hoster": showUserPicker,
            "HosterPhone": hostPhone,
            "Amount": selectCount,
            "Special": specialText,
            "userList": JSON.parse(JSON.stringify(userListArr)),
            "deviceList": JSON.parse(JSON.stringify(deviceListArrChecked))
        },
        dataType: 'json',
        type: 'post',
        async: true,
        timeout: 10000,
        headers: {
            "Authorization": "Bearer " +Ticket2
        },
    })
}
