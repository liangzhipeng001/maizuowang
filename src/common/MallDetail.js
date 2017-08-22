/**
 * Created by Administrator on 2017/8/22 0022.
 */

import React, {Component} from 'react'

import '../css/mallNavDetail.css'

import mallService from '../services/MallServices.js'

export  default class MallDetail extends Component{
    // 构造
    constructor({}) {
        super();

        this.state = {

        };
    }
    render(){

        return (
            <ul class="featured">
                {
                    this.props.dataArr.map((item,index)=>{
                        return (
                            <li class="item" key={index}>
                                <div class="img">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div class="name">{item.name}</div>
                                <div class="price">
                                    <span>{"￥"+item.price/100+".00"}</span>
                                    <span>{"已售"+item.salesCount}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }


}

