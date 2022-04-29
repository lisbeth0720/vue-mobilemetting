//放的是登陆页的一些请求
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

//1.得到单位号
export function getCompanyId(){
    return request({
        url:'api/users/getcompanyList',
    })
}
//2.登陆-得到短Token
export function getTocken(companyid,username,password){
    return request({
        url:'api/users/gettokenbyjwt/v2',
        params:{
            companyid:companyid,
 			username:username,
 			password:password
        }
    })
}

//2.得到短Tocken
// export function getTocken(){
//     return request({
//         url:'api/users/gettokenbyjwt/v2',
//         params:{
//             companyid:"CHRCHY",
// 			username:"administrator",
// 			password:"admin@123"
//         }
//     })
// }
//3.得到长Tocken
export function getMaxTicket(MaxTicket){
	//this.maxTicket="Bearer "+localStorage.getItem("MaxTicket");
    return request({
        url:'api/users/gettokenbyTicket/v2',
        params:{
            //token:"Bearer "+localStorage.getItem("MaxTicket")
            token:"Bearer "+MaxTicket
        }
    })
}