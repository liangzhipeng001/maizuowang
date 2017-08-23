
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
            history,
            show:false
        };
      }
    render(){
        let showBack=this.state.show?{display:"block"}:{display:"none"}
        return (
            <div class="page" id="home" ref="home">
                <div class="wrap">
                    <HomeBanner/>
                    <Content history={this.state.history}/>
                </div>
                <div class="back-top" style={showBack} onClick={this.backTopAction.bind(this)}>↑</div>
            </div>
        )
    }

    componentDidMount() {
        iScroll=new IScroll(this.refs.home,{
            probeType:3,
            bounce:false,
            mouseWheel: true
        })
        var temp=this
        iScroll.on("scrollStart",function (){
            this.refresh();

        })
        iScroll.on("scroll",function (){
            if(Math.abs(iScroll.y)>=310){

                temp.setState({show:true})
            }else{
                temp.setState({show:false})
            }
        })
    }
    backTopAction(){
        iScroll.scrollTo(0,0,1000)
    }

}