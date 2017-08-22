/**
 * Created by Administrator on 2017/8/21 0021.
 */

import React, {Component} from 'react'

import '../../css/mall.css'

export  default class Detail extends Component{

    render(){
        return (
            <div class="detail-wrap">
                {
                    this.props.detail.map((item,index)=>{
                        return (
                            <div key={index} class="item">
                                <div class="img">
                                    <img src={item.imgPath} alt=""/>
                                </div>
                                <ul class="detail-list">
                                    {
                                        item.products.map((val,i)=>{
                                            return (
                                                <li class="list" key={i}>
                                                    <div class="minImg">
                                                        <img src={val.image} alt=""/>
                                                    </div>
                                                    <p>{val.name}</p>
                                                    <p>{"￥"+parseInt(val.price/100)+".00"}</p>
                                                </li>
                                            )
                                        })
                                    }
                                    <div class="list-all">
                                        <span class="all">全部</span>
                                    </div>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }


}
