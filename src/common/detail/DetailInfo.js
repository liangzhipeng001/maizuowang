
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

                </div>
            </div>
        )
    }

    componentWillMount() {
        console.log(this.props.detail);
    }
}