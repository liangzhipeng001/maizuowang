/**
 * Created by Administrator on 2017/8/21 0021.
 */

import React, {Component} from 'react'

import '../../css/mall.css'

export  default class MallNavBottom extends Component{

    render(){
        return (
            <div class="active-line">
                <div class="active-bg">
                {
                    this.props.navBottom.map((item,index)=>{
                        return (

                                <div key={index} class="item">
                                    <img src={item.imgPath} />
                                </div>

                        )
                    })
                }
                </div>
            </div>
        )
    }

}
