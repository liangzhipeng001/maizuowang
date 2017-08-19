
/**
 * Created by Administrator on 2017/8/17 0017.
 */

import React, {Component} from 'react'

import store from "../store/index.js"
import data from '../services/Data.js'
console.log(store.getState());
import '../css/app.css'
export default class ListMovie extends Component{

    // 构造
      constructor ({location}){
          super();
        // 初始状态
        this.state = {
            index:location.pathname.split("/")[2]
        };
      }
    render(){
        let info=data.info[this.state.index]
        return (
                <div>
                    <div class="page list-movie">
                        <div class="img">
                            <img src={info.imgPath} alt=""/>
                        </div>
                        <div class="content">
                            <div class="title">{info.title}</div>
                            <div class="director common">
                                <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</span>
                                <span>&nbsp;{info.director}</span>
                            </div>
                            <div class="star common">
                                <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:</span>
                                <span>&nbsp;{info.starring}</span>

                            </div>
                            <div class="language common">

                                <span>地区语言:</span>
                                <span>&nbsp;{info.language}</span>

                            </div>
                            <div class="type common">

                                <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:</span>
                                <span>&nbsp;{info.type}</span>

                            </div>
                            <div class="release common">

                                <span>上映日期:</span>
                                <span>&nbsp;{info.release}</span>

                            </div>
                            <div class="cont">
                                {info.cont}
                            </div>
                        </div>
                    </div>
                    <div class="primary-button">
                        <button>立即购票</button>
                    </div>
                </div>
            )

    }



}