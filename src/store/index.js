
import {createStore} from  'redux'

//state 全局状态
//action  操作全局的事件

//多次调用，只有初始化时 state才为空
let reducer=function (state,action){

    if(state==null){
        state={
            name:"",
            i:""
        }
    }
    if(action.type==="title"){
        state.name=action.val
        state.i=action.i
    }
    return state

}

export default createStore(reducer)

