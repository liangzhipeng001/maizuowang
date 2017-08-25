
import React, {Component} from 'react'

import '../../css/cards.css'


export  default class CardsContent extends Component{

    render(){
        let showOne=this.props.index==0?{display:"block"}:{display:"none"}

        let showTwo=(this.props.index==1)?{display:"block"}:{display:"none"}
        return (
            <div class="cards-content">
                <ul class="choosing" style={showOne}>
                    <li>
                        <label>卡号:</label>
                        <input type="text" placeholder="请输入卡号"/>
                        <div class="line"></div>
                    </li>
                    <li>
                        <label>密码:</label>
                        <input type="password" placeholder="请输入卡号"/>
                        <div class="line"></div>
                    </li>
                    <li class="btn">
                        <button>查询</button>
                    </li>
                </ul>
                <ul class="coming-soon" style={showTwo}>
                    <li>
                        <label>卡号:</label>
                        <input type="text" placeholder="请输入15位电子卖座卡号"/>
                        <div class="line"></div>
                    </li>
                    <li class="btn">
                        <button>查询</button>
                    </li>
                </ul>
            </div>
        )
    }



}