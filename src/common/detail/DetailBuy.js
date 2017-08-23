
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import mallService from '../../services/MallServices.js'

import '../../css/detail.css'
export default class DetailBuy extends Component{
    // 构造
    constructor() {

        super();
        // 初始状态
        this.state = {

        };
    }
    render(){

        return (
            <div class="buy">
                <Link to="/mall" class="buy-left">首页</Link>
                <div class="buy-right">立即购买</div>
            </div>
        )
    }
}

