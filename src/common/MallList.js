
import React, {Component} from 'react'

import '../css/mallNavDetail.css'

import mallService from '../services/MallServices.js'
import MallDetail from './MallDetail.js'
let iScroll=null
export  default class MallList extends Component{
    // 构造
    constructor({location}) {
        super();

        this.state = {
            val:location.pathname.split("/")[1],
            id:location.pathname.split("/")[2],
            data:{},
            dataArr:[],
            top:{}
        };
    }
    render(){
        let topDom=""
        if(this.state.id==23){
            topDom= <div class="mall-top"><img src={this.state.data.imageSrc} alt=""/></div>

        }else{
            topDom=<div class="detail-top">
                <img src={this.state.top.image} alt=""/>
                <p class="name">{this.state.top.name}</p>
            </div>
        }

        return (
            <div class="mall page" ref="mallList">
                <div class="wrap">
                    {topDom}
                    <MallDetail dataArr={this.state.dataArr}/>
                </div>
            </div>
        )
    }

    componentWillMount() {
        if(this.state.id==23){
            mallService.getPerformanceData(this.state.val,this.state.id)
            .then((data)=>{

                this.setState({data:data,dataArr:data.products})
            })
        }else{
            mallService.getNavAllData(this.state.val,this.state.id)
            .then((data)=>{

                this.setState({dataArr:data})
            })
            mallService.getNavTop(this.state.val,this.state.id)
            .then((val)=>{

                this.setState({top:val})
            })
        }
    }
    componentDidMount() {
        iScroll=new IScroll(this.refs.mallList,{
            probeType:3,
            bounce:false
        })
        iScroll.on("scrollStart",function (){
            this.refresh();
        })

    }
}

