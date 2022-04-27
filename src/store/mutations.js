export default {
    //表示 更改 state的方法集合 只能是同步更新 不能写ajax等异步请求
    toSubmitScreen(state, payload) {
        state.screenObj.startTime=payload.startTime;
        state.screenObj.endTime=payload.endTime;
        state.screenObj.numCount=payload.numCount;
        state.screenObj.device=payload.device;
        //console.log(state)
    }
}