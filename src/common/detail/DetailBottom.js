
import React,{Component} from 'react'

import mallService from '../../services/MallServices.js'

import '../../css/detail.css'
export default class DetailBottom extends Component{
    // 构造
    constructor() {

        super();
        // 初始状态
        this.state = {

        };
    }
    render(){

        return (
            <div class="detail-bottom">
                <div class="const" ref="const">
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        if(this.props.detailImg.desc!=undefined){
            this.refs.const.innerHTML=this.props.detailImg.desc
        }

    }
}

