
import React, {Component} from 'react'
import homeService from "../../services/homeServices.js"
import "../../css/app.css"
import store from '../../store/index.js'
let iScroll=null
export  default class City extends Component{
    // 构造
      constructor({history}) {

          super();
        // 初始状态
        this.state = {
            letter:["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"],
            newObj:[],
            disY:[],
            history:history
        };
      }
    render(){
        return (

                <div class="page" id="city" ref="city">
                    <div class="wrap">
                        <div class="gprs-city">
                            <div class="city-title">GPS定位你所在城市</div>
                            <ul class="city-title1">
                                <li class="address" >深圳</li>
                            </ul>
                        </div>
                        <div class="gprs-city">
                            <div class="city-title">GPS定位你所在城市</div>
                            <ul class="city-title1">
                                <li>北京</li>
                                <li>上海</li>
                                <li>广州</li>
                                <li>深圳</li>
                            </ul>
                        </div>
                        <div class="index-city">
                            <div class="city-title">按字母排序</div>
                            <ul class="city-title1">
                                {
                                    this.state.letter.map((item,index)=>{
                                        return (
                                            <li class="letter" key={index}
                                            onClick={this.Jump.bind(this,index)}>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div class="index-city">
                            <div class="city-title1" ref="cityList">
                                {
                                    this.state.newObj.map((item,index)=>{
                                        return (
                                            <div key={index} >
                                                <div class="city-title" key={index}>
                                                    {item.one}
                                                </div>
                                                {
                                                    item.map((val,i)=>{
                                                        return (
                                                            <li
                                                                key={i}
                                                                onClick={this.addressActive.bind(this,val.name)}>{val.name}</li>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

        )
    }

    componentWillMount() {
        homeService.getAddressData()
        .then((obj)=>{
            //console.log(obj);
            this.setState({newObj:obj})
        })
    }
    componentDidMount() {
        iScroll=new IScroll(this.refs.city,{
            probeType:3,
            bounce:false,
            mouseWheel: true
        })
        iScroll.on("scrollStart",function (){
            this.refresh();
        })

    }

    componentDidUpdate() {
        let arr=this.refs.cityList.children

        for(var i=0; i<arr.length; i++){
            this.state.disY.push(arr[i].offsetTop)
        }

    }
    Jump(i){
        if(i==this.state.disY.length-1){
            iScroll.scrollTo(0,-this.state.disY[i]+260)
        }else{
            iScroll.scrollTo(0,-this.state.disY[i])
        }

    }
    addressActive(val){
        store.dispatch({
            type:"title",
            address:val
        })
        this.props.history.push("/")
    }
}
