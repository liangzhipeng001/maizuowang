
import React,{Component} from 'react'

import mallService from '../../services/MallServices.js'

import '../../css/detail.css'
export default class DetailInfo extends Component{
    // 构造
    constructor() {

        super();
        // 初始状态
        this.state = {

        };
    }
    render(){

        return (
            <div class="info">
                <div class="name">{this.props.detail.masterName}</div>
                <div class="name-data">{this.props.detail.slaveName}</div>
                <div class="price">
                    {"￥"+this.props.pirce[0]}
                </div>
                <div class="tips">
                    <div class="express-fee">快递：0.00 元</div>
                    <div class="sold-amount">{"销量:"+this.props.detail.count}</div>
                    <div class="location">全国</div>
                </div>
            </div>
        )
    }


}