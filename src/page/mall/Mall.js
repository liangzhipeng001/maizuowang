/**
 * Created by Administrator on 2017/8/17 0017.
 */
/**
 * Created by Administrator on 2017/8/17 0017.
 */
import React, {Component} from 'react'

import '../../css/mall.css'
import MallBanner from './MallBanner.js'
import MallNav from './MallNav.js'
import MallNavBottom from './MallNavBottom.js'
import MallDetail from './MallDetail.js'
import MallFeatured from './MallFeatured.js'

import mallServices from '../../services/MallServices.js'

let iScroll=null
export  default class Mall extends Component{

    // 构造
      constructor({history}) {

          super();
        // 初始状态
        this.state = {
            banner:[],
            nav:[],
            navBottom:[],
            detail:[],
            featured:[],
            history:history
        };
      }
    render(){
        return (
            <div class="page" id="mall" ref="mall">
                <div class="wrap">
                    <MallBanner banner={this.state.banner}/>
                    <MallNav nav={this.state.nav} history={this.state.history}/>
                    <MallNavBottom navBottom={this.state.navBottom}/>
                    <MallDetail detail={this.state.detail} history={this.state.history}/>
                    <MallFeatured featured={this.state.featured}/>
                </div>
            </div>
        )
    }


    componentWillMount() {
        mallServices.getMallNavData()
            .then((obj)=>{
                this.setState({
                    banner:obj.banner,
                    detail:obj.detail,
                    nav:obj.nav,
                    navBottom:obj.navBottom})
            })
        mallServices.getMallFeaturedData()
        .then((val)=>{
            this.setState({featured:val})
        })

    }
    componentDidMount() {
        iScroll=new IScroll(this.refs.mall,{
            probeType:3,
            bounce:false
        })
        iScroll.on("scrollStart",function (){
            this.refresh();
        })

    }
}