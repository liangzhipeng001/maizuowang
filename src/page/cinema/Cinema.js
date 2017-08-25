/**
 * Created by Administrator on 2017/8/17 0017.
 */
import React, {Component} from 'react'
import '../../css/cinema.css'
import store from '../../store'
import CinemaService from '../../services/cinemaService.js'
let iScroll = null
export  default class Cinema extends Component {
    // 构造
    constructor({history}) {
        
        super();
        // 初始状态
        this.state = {
            arr: [],
            index: 0,
            show: false,
            history:history
        };
    }

    render() {
        let styleCSS = {display: "block"}
        let styleCss1 = {display: "none"}
        let showBack = this.state.show ? {display: "block"} : {display: "none"}

        return (
            <div class="page" id="cinema" ref="cinema">
                <div class="wrap">
                    <div class="cinema-wrap">
                        {
                            this.state.arr.map((item, index)=> {
                                return (
                                    <div key={index}>
                                        <div class="title" onClick={this.showIndex.bind(this,index)}>{item.one}</div>
                                        <div style={(this.state.index==index?styleCSS:styleCss1)}>
                                            {
                                                item.map((item, index)=> {
                                                    return (
                                                        <div class="cont" key={index}
                                                             onClick={this.idAction.bind(this,item.id)}>
                                                            <div class="name">{item.name}</div>
                                                            <div class="address">{item.address}</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div class="back-top" style={showBack} onClick={this.backTopAction.bind(this)}>↑</div>
            </div>
        )
    }

    componentWillMount() {
        CinemaService.getCinemaData()
            .then((val)=> {
                //console.log(val);
                this.setState({arr: val})
            })
    }

    componentDidMount() {
        iScroll = new IScroll(this.refs.cinema, {
            probeType: 3,
            bounce: false,
            mouseWheel: true
        })
        iScroll.on("scrollStart", function () {
            this.refresh();
        })
        var temp = this
        iScroll.on("scroll", function () {
            if (Math.abs(iScroll.y) >= 310) {

                temp.setState({show: true})
            } else {
                temp.setState({show: false})
            }
        })
    }

    showIndex(index) {
        this.setState({index: index})
    }

    backTopAction() {
        iScroll.scrollTo(0, 0, 1000)
    }

    idAction(val) {

        store.dispatch({
            type:"ticketId",
            ticketId:val
        })
        this.state.history.push('/tickets/id='+val)
    }
}