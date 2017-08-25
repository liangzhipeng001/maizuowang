
import {createStore} from  'redux'

//state 全局状态
//action  操作全局的事件

//多次调用，只有初始化时 state才为空
let reducer=function (state,action){

    if(state==null){
        state={
            name:"",
            i:"",
            address:"深圳",
            mallName:"",
            mallId:"",
            id:"",
            show:'',
            ticketId:''
        }
    }
    if(action.type==="title"){
        state.name=action.val
        state.i=action.i
        state.address=action.address ? action.address : state.address

    }
    if(action.type=="mall"){
        state.mallName=action.mallName
        state.mallId=action.mallId
    }
    if(action.type=="detail"){
        state.id=action.id
    }
    if(action.type=='ticketId'){
        state.ticketId=action.ticketId
    }
    return state

}

export default createStore(reducer)

