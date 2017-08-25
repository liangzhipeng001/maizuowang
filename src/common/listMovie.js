/**
 * Created by Administrator on 2017/8/17 0017.
 */

import React, {Component} from 'react'

import store from "../store/index.js"


import movieServices from '../services/MovieServices.js'
import '../css/app.css'
export default class ListMovie extends Component {

    // 构造
    constructor({location}) {
        super();
        // 初始状态
        this.state = {
            index: location.pathname.split("/")[2],
            info: {}
        };
    }

    render() {
        let actors
        if(this.state.info.actors!=undefined){

            actors=this.state.info.actors.map((item,index)=>{
                return (

                    <span key={index}>{item.name+"|"}</span>
                )
            })
        }
        return (
            <div>
                <div class="page list-movie">
                    <div class="img">
                        <img src={this.state.info.imgPath}alt=""/>
                    </div>
                    <div class="content">
                        <div class="title">影片简介</div>
                        <div class="director common">
                            <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</span>
                            <span>&nbsp;{this.state.info.director}</span>
                        </div>
                        <div class="star common">
                            <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</span>
                            {actors}
                        </div>
                        <div class="language common">

                            <span>地区语言:</span>
                            <span>{this.state.info.language}</span>

                        </div>
                        <div class="type common">

                            <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</span>
                            <span>{this.state.info.category}</span>

                        </div>
                        <div class="release common">

                            <span>上映日期:</span>
                            <span>{this.state.info.premiereAt}</span>


                        </div>
                        <div class="cont">
                            {this.state.info.synopsis}
                        </div>
                    </div>
                </div>
                <div class="primary-button">
                    <button>立即购票</button>
                </div>
            </div>

        )

    }


    componentWillMount() {
        movieServices.getMoviesData(this.state.index)
            .then((val)=> {
                this.setState({info: val}, ()=> {
                })
            })
    }

}