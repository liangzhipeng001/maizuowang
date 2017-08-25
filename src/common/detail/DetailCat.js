
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import mallService from '../../services/MallServices.js'

import '../../css/detail.css'
export default class DetailCat extends Component{
    // 构造
    constructor() {

        super();
        // 初始状态
        this.state = {
            annex:[],
            price:[],
            skulist:[],
            banner:[],
            index:0,
            number:1,
            show:false
        };
    }
    render(){
        let showMen=this.props.show?{display:"block"}:{display:"none"}
        let showImg
        let showPrice
        let showItem
        if(this.props.show){
            showImg=this.state.skulist[this.state.index].images[this.state.index]
            console.log(showImg);
            if(showImg==undefined){
                showImg=this.state.skulist[this.state.index].images[0]
            }
            showPrice=this.state.price[this.state.index]
            showItem=this.state.annex.map((item,index)=>{
                return (
                    <span key={index}
                          onClick={this.detailIndex.bind(this,index)}
                    class={this.state.index==index?"pick":""}>
                        {item}
                    </span>
                )
            })
        }

        
        return (
            <div class="menu" style={showMen}>
                <div class="menu-pick">
                    <div class="menu-info">
                        <div class="img">
                            <img src={showImg} alt=""/>
                        </div>
                        <div class="price">
                            <div class="money">{"￥"+showPrice}</div>
                            <div class="name">选择 规格 数量</div>
                        </div>
                        <div class="close" onClick={this.closeAction.bind(this)}>X</div>
                    </div>
                    <div class="select">
                        <div class="select-title">款式</div>
                        <div class="select-item">
                            {showItem}
                        </div>
                    </div>
                    <div class="count">
                        <div class="count-title">选择数量</div>
                        <div class="count-type">
                            <span class="less" onClick={this.lessAction.bind(this)}>-</span>
                            <span class="number">{this.state.number}</span>
                            <span class="add" onClick={this.addAction.bind(this)}>+</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    closeAction(){
        this.props.closeAction(false)
    }

    componentWillReceiveProps() {
        //console.log("componentDidUpdate");
        //console.log(this.props.detail);
        this.setState({
            annex:this.props.detail.annex,
            price:this.props.detail.pirce,
            skulist:this.props.detail.skulist,
            banner:this.props.detail.banner
        })
    }
    detailIndex(index){
        console.log(index);
        this.setState({index:index})
    }

    lessAction(){
        this.state.number--
        if(this.state.number<=1){
            this.setState({number:1})

        }else{
            this.setState({number:this.state.number})

        }

    }
    addAction(){
        this.state.number++
        this.setState({number:this.state.number})
    }
}


