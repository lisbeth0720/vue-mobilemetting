//放的是首页的一些请求
import { request } from "./request.js";
import axios from 'axios'

//预约会议-//不知道为何不能用post方式
export function submitOrder(roomid, title, startTime, endTime, linkman, linkPhone, showUserPicker, hostPhone, selectCount, specialText, userListArr, deviceListArrChecked){
    //为了能很好的实现其他界面，不用刷新就重新登录，先把信息存到localStorage
   // let Ticket2 = Ticket;
    //if (Ticket2 == "" || Ticket2 == undefined) {
       var Ticket2 = localStorage.getItem("Ticket");
    //}
    // Get方式，params;post用data
    // post里面的数据放在params里面，这样是有问题的，在使用axios时，要注意到配置选项中包含params和data两者，以为他们是相同的，实则不然。
    // 因为params是添加到url的请求字符串中的，用于get请求。
    // 而data是添加到请求体（body）中的， 用于post请求。

    // 然后我把params改为了data，后台还是接收不到，查了很多资料，需要把Content-Type为application/ x -www-form-urlencoded，
    // jquery在执行post请求时，会设置Content-Type为application/x-www-form-urlencoded，所以服务器能够正确解析，而使用原生ajax、axios请求时，如果不显示的设置Content-Type那么默认是text/plain，这时服务器就不知道怎么解析数据了，所以才只能通过获取原始数据流的方式来进行解析请求数据。
    //需要应post方法 因为这个不支持get方法
    // return request({
    //     url:'api/order/insert',
    //     methods:"post",
    //     data: {
    //         "MeetingRoomID": roomid,
    //         "Title": title,
    //         "StartTime": startTime,
    //         "Endtime": endTime,
    //         "Linkman": linkman,
    //         "LinkPhone": linkPhone,
    //         "Hoster": showUserPicker,
    //         "HosterPhone": hostPhone,
    //         "Amount": selectCount,
    //         "Special": specialText,
    //         "userList": JSON.parse(JSON.stringify(userListArr)),
    //         "deviceList": JSON.parse(JSON.stringify(deviceListArrChecked))
    //     },
    //     headers: {
    //         "Authorization": "Bearer " +Ticket2
    //     },
    // })

    // return axios({
    //     methods: 'post',
    //     url: 'http://192.168.1.145:3344/api/order/insert',
    //     data: {
    //         "MeetingRoomID": roomid,
    //         "Title": title,
    //         "StartTime": startTime,
    //         "Endtime": endTime,
    //         "Linkman": linkman,
    //         "LinkPhone": linkPhone,
    //         "Hoster": showUserPicker,
    //         "HosterPhone": hostPhone,
    //         "Amount": selectCount,
    //         "Special": specialText,
    //         "userList": JSON.parse(JSON.stringify(userListArr)),
    //         "deviceList": JSON.parse(JSON.stringify(deviceListArrChecked))
    //     },
    //     headers: {
    //         "Authorization": "Bearer " + Ticket2
    //     },
    // })
        // .then((response) => {
        //     console.log(response);
        // })
        // .catch((error) => {
        //     console.log(error);
        // });

    return axios.post('http://192.168.1.145:3344/api/order/insert',
        {
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
        },{
        headers: {
            "Authorization": "Bearer " + Ticket2
        },
    })
}

//获取会议室信息
export function getThisRoom(roomid, startTime, endTime) {
    var Ticket2 = localStorage.getItem("Ticket");
    return request({
        url: 'api/room/get/v2',
        params: {
            roomID: roomid,
            startTime: startTime == undefined ? "" : startTime,
            endTime: endTime == undefined ? "" : endTime,
        },
        headers: {
            "Authorization": "Bearer " + Ticket2
        },
    })
}
