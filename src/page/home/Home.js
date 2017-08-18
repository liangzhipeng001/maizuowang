
import React, {Component} from 'react'

import HomeBanner from './HomeBanner.js'
import Content from  './Content.js'
let iScroll=null
export  default class Home extends Component{
    // 构造
      constructor({history}) {
        super();

          // 初始状态
        this.state = {
            history
        };
      }
    render(){
        return (
            <div class="page" id="home" ref="home">
                <div class="wrap">
                    <HomeBanner/>
                    <Content history={this.state.history}/>
                </div>
            </div>
        )
    }

    componentDidMount() {
        iScroll=new IScroll(this.refs.home,{
            probeType:3,
            bounce:false
        })
        iScroll.on("scrollStart",function (){
            this.refresh();

        })
    }

}