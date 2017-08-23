/**
 * Created by Administrator on 2017/8/22 0022.
 */
import React,{Component} from 'react'

import mallService from '../../services/MallServices.js'

import DetailBanner from './DetailBanner.js'
import DetailInfo from './DetailInfo.js'
import DetailAnnex from './DetailAnnex.js'
import DetailBottom from './DetailBottom.js'
import DetailBuy from './DetailBuy.js'
import DetailCat from './DetailCat.js'
let iScroll=null
export default class Detail extends Component{
    // 构造
      constructor({location}) {

          super();
        // 初始状态
        this.state = {
            id:location.pathname.split("=")[1],
            detail:{},
            detailImg:{},
            banner:[],
            pirce:[],
            annex:[],
            skulist:[],
            show:false
        };
      }
    render(){
        return (
            <div>
                <div class="page" id="detail" ref="detail">
                    <div class="wrap">
                        <DetailBanner banner={this.state.banner}/>
                        <DetailInfo detail={this.state.detail} pirce={this.state.pirce}/>
                        <DetailAnnex menuAction={this.menuAction.bind(this)}/>
                        <DetailBottom detailImg={this.state.detailImg}/>
                    </div>

                </div>
                <DetailCat detail={this.state.detail} closeAction={this.closeAction.bind(this)} show={this.state.show}/>
                <DetailBuy/>
            </div>
        )
    }

    componentWillMount() {
        mallService.getDetailData(this.state.id)
        .then((val)=>{
            //console.log(val);
            this.setState({
                detail:val,
                banner:val.banner,
                pirce:val.pirce,
                annex:val.annex,
                price:val.pirce,
                skulist:val.skulist

            },()=>{
                //console.log(this.state.detail);
            })
        })
        mallService.getDetailImgData(this.state.id)
        .then((val)=>{
            //console.log(val);
            this.setState({detailImg:val})
        })
    }
    componentDidMount() {
        iScroll=new IScroll(this.refs.detail,{
            probeType:3,
            bounce:false,
            mouseWheel: true
        })
        iScroll.on("scrollStart",function (){
            this.refresh();
        })

    }
    menuAction(val){
        //console.log(val);
        this.setState({show:val})
    }
    closeAction(val){
        this.setState({show:val})
    }
}