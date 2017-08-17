/**
 * Created by Administrator on 2017/8/17 0017.
 */
import React, {Component} from 'react'

import '../css/header-style.css'

import nav from '../services/NavLeft.js'
export  default class Tabs extends Component{
    constructor(){
        super()

    }

    render(){

        let showStyle={
            transform:this.props.show?"none":"translateX(-100%)"
        }
        let bgStyle = {
            background: this.props.show?"rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
            display: this.props.show?"block" : "none"
        }
        let data=this.props.pathname==='/mall'?nav.shop:nav.data
        return (
            <div>
                <div class="bg" style={bgStyle} onClick={this.hide.bind(this)}></div>
                <div class="tabs" style={showStyle}>

                    {
                        data.map((item,index)=>{
                            return <a key={index} onClick={this.navAction.bind(this,item)}>{item.title}</a>
                        })
                    }
                </div>
            </div>
        )
    }
    navAction(item){
        this.props.history.push(item.path)
        console.log(this.props.pathname);
        this.props.menuAction(item.header)
    }
    hide(){
        this.props.menuAction()
    }
}