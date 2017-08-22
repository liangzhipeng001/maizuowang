/**
 * Created by Administrator on 2017/8/18 0018.
 */

import React, {Component} from 'react'

import homeService from "../../services/homeServices.js"

let bannerSwiper=null
export  default class HomeBanner extends Component{

    constructor(){
        super()

        this.state={
            banner:[]
        }
    }
    render(){
        //console.log(this.state.banner);

        return (
            <div class="swiper-container home-banner" ref="in">
                <div class="swiper-wrapper">
                    {
                        this.state.banner.map((item,index)=>{
                            return (
                                <div class="swiper-slide" key={index}>
                                    <img src={item.imageUrl} />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
    componentWillMount(){
        homeService.getHomeBannerDate()
        .then((val)=>{
            val.splice(0, 0, val[val.length-1]);

            val.push(val[1]);
            this.setState({banner:val})
            bannerSwiper.update();
            bannerSwiper.slideTo(1,0)
        })
    }

    componentDidMount() {
        //console.log(this.state.banner.length);
        bannerSwiper=new Swiper(this.refs.in,{
            loop:true
        })
    }
}