
import React, {Component} from 'react'

import '../../css/mall.css'


let bannerSwiper=null
export  default class MallBanner extends Component{

    render(){
        return (
            <div class="swiper-container mall-banner" ref="mall">
                <div class="swiper-wrapper">
                    {
                        this.props.banner.map((item,index)=>{
                            return (
                                <div class="swiper-slide" key={index}>
                                    <img src={item.imgPath} />
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
        bannerSwiper=new Swiper(this.refs.mall,{
            pagination: '.swiper-pagination',
            autoplay:2000,
            loop:true
        })

    }
}
