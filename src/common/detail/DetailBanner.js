
import React,{Component} from 'react'

import mallService from '../../services/MallServices.js'

import '../../css/detail.css'
let bannerSwiper=null
export default class DetailBanner extends Component{
    // 构造
    constructor() {

        super();
        // 初始状态
        this.state = {
            banner:[]
        };
    }
    render(){

        return (
            <div class="swiper-container detail-banner" ref="detail">
                <div class="swiper-wrapper">
                    {
                        this.props.banner.map((item,index)=>{
                            return (
                                <div class="swiper-slide" key={index}>
                                    <img src={item} />
                                </div>
                            )
                        })
                    }
                </div>
                <div class="swiper-pagination"></div>
            </div>
        )
    }
    componentDidUpdate() {

        bannerSwiper=new Swiper(this.refs.detail,{
            loop:true,
            pagination: '.swiper-pagination'
        })

    }
}