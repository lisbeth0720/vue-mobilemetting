//如果需要做异步请求 可以在actions中发起 然后提交给 mutations mutation再做同步更新
export default {
    //提交登陆信息
    submitLogin(context, payload){
        return new Promise((resolve,reject)=>{
            console.log(payload)
            context.commit('toLogin', payload)
            
        })
    },
    
}