/**
 * Created by Administrator on 2017/8/21 0021.
 */

import React, {Component} from 'react'

import '../../css/mall.css'
import store from '../../store'
export  default class MallFeatured extends Component{

    render(){
        return (
            <div class="featured-wrap">
                <div class="title">—&nbsp;好货精选&nbsp;—</div>
                <ul class="featured">
                    {
                        this.props.featured.map((item,index)=>{
                            return (
                                <li class="item" key={index}
                                    onClick={this.detailAction.bind(this,item.id)}>
                                    <div class="img">
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <div class="name">{item.name}</div>
                                    <div class="price">
                                        <span>{"￥"+item.price}</span>
                                        <span>{item.displaySalesCount}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    detailAction(id){
        store.dispatch({
            type:"detail",
            id:id
        })
        this.props.history.push('/detail/id='+id)
    }
}

