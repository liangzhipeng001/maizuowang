
import React,{Component} from 'react'

import mallService from '../../services/MallServices.js'

import '../../css/detail.css'
export default class DetailAnnex extends Component{
    // 构造
    constructor() {

        super();
        // 初始状态
        this.state = {
            show:true
        };
    }
    render(){

        return (
            <div>
                <div class="annex" onClick={this.menuAction.bind(this,this.state.show)}>选择 规格 数量 〉</div>
            </div>
        )
    }
    menuAction(i){
        this.props.menuAction(i)
    }
}
