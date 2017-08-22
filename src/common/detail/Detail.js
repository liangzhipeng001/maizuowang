/**
 * Created by Administrator on 2017/8/22 0022.
 */
import React,{Component} from 'react'

import mallService from '../../services/MallServices.js'

import DetailBanner from './DetailBanner.js'
import DetailInfo from './DetailInfo.js'
export default class Detail extends Component{
    // 构造
      constructor({location}) {

          super();
        // 初始状态
        this.state = {
            id:location.pathname.split("=")[1],
            detail:{},
            detailImg:{},
            banner:[]
        };
      }
    render(){
        return (
            <div class="page" id="detail">
                <DetailBanner banner={this.state.banner}/>
                <DetailInfo detail={this.state.detail}/>
            </div>
        )
    }

    componentWillMount() {
        mallService.getDetailData(this.state.id)
        .then((val)=>{
            //console.log(val);
            this.setState({detail:val,banner:val.banner})
        })
        mallService.getDetailImgData(this.state.id)
        .then((val)=>{
            //console.log(val);
            this.setState({detailImg:val})
        })
    }
}