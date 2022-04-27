//如果需要做异步请求 可以在actions中发起 然后提交给 mutations mutation再做同步更新
export default {
    submitScreen(context, payload) {
        //如果你在vuex里做了某些操作，想让外界知道，就需要用到peomise
        return new Promise((resolve,reject)=>{
                context.commit('toSubmitScreen', payload)
                //resolve("添加成功")
        })
    }
}