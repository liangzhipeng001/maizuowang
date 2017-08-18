/**
 * Created by Administrator on 2017/8/17 0017.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import store from "../store/index.js"

import '../css/header-style.css'

let unsubscribe=null
export  default class Header extends Component{
    constructor(){
        super()

        this.state={
            titleMove:"",
            address:"深圳"
        }
    }

    render(){
        let title=this.state.titleMove?this.state.titleMove:this.props.title
        return (
            <div class="header">
                <div>
                    <span class="iconfont icon-menu" onClick={this.menuAction.bind(this)}></span>
                    <span class="title">{title}</span>
                </div>
                <div >
                    <Link to="/city" class="address iconfont icon-arrow-down">
                        {this.state.address}
                    </Link>
                    <Link to="/me" class="iconfont icon-person"></Link>
                </div>
            </div>
        )
    }
    menuAction(){
        this.props.menuAction()
    }

    componentWillMount() {
      unsubscribe=store.subscribe(()=>{

            this.setState({titleMove:store.getState().name})
        })

    }

    componentWillUnmount() {
        unsubscribe()
    }
}