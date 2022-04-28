export default {
    //表示 更改 state的方法集合 只能是同步更新 不能写ajax等异步请求
    //1.登陆信息
    toLogin(state, payload){
        state.login.Ticket=payload.Ticket;
        state.login.MaxTicket=payload.MaxTicket;
        state.login.username=payload.username;
    },
   
}