/**
 * Created by Administrator on 2017/8/17 0017.
 */
import React, {Component} from 'react'

import '../css/header-style.css'
export  default class Header extends Component{
    constructor(){
        super()

        this.state={

            address:"深圳"
        }
    }

    render(){
        return (
            <div class="header">
                <div>
                    <span class="iconfont icon-menu" onClick={this.menuAction.bind(this)}></span>
                    <span class="title">{this.props.title}</span>
                </div>
                <div >
                    <span class="address iconfont icon-arrow-down">{this.state.address}</span>
                    <span class="iconfont icon-person"></span>
                </div>
            </div>
        )
    }
    menuAction(){
        this.props.menuAction()
    }
}