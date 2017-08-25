/**
 * Created by Administrator on 2017/8/25 0025.
 */
/**
 * Created by Administrator on 2017/8/17 0017.
 */
import React, {Component} from 'react'
import cinemaService from '../services/cinemaService.js'
import '../css/tickets.css'
let iScroll=null
export  default class Tickets extends Component {
    // 构造
    constructor({location}) {

        super();
        // 初始状态
        this.state = {
            id: location.pathname.split("=")[1],
            obj: {},
            index:0,
            arr:["取票","停车","3D","优惠","交通"],
            p:'暂无信息',
            info:""
        };
    }

    render() {


        return (
            <div class="page" id="tickets" ref="tickets">
                <div class="wrap">
                    <div class="img">
                        <img src="//static.m.maizuo.com/v4/static/app/asset/66461d1a02a9eaa64876c90952c42aed.png"
                             alt=""/>
                    </div>
                    <div>
                        <div class="book-tickets">
                            <div class="icon">
                                <i class="iconfont one"></i>
                            </div>
                            <div class="box">
                                <h3>订座票</h3>
                                <span>选好场次及座位，到影院自助机取票</span>
                                <button>立即订座</button>
                            </div>
                        </div>
                        <div class="book-tickets">
                            <div class="icon">
                                <i class="iconfont two"></i>
                            </div>
                            <div class="box">
                                <h3>通兑票</h3>
                                <span>有效期内到影院前台兑换影票</span>
                                <button>立即订票</button>
                            </div>
                        </div>
                        <div class="book-tickets">
                            <div class="icon">
                                <i class="iconfont three"></i>
                            </div>
                            <div class="box">
                                <h3>{this.state.obj.address}</h3>
                            </div>
                        </div>
                        <div class="book-tickets">
                            <div class="icon">
                                <i class="iconfont fire"></i>
                            </div>
                            <div class="box">
                                {this.state.obj.telephones}
                            </div>
                        </div>
                    </div>
                    <div class="bottom-tickets">
                        <ul>
                            {
                                this.state.arr.map((item,index)=>{
                                    return (
                                        <li key={index} onClick={this.indexAction.bind(this,index)}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                        <div class="cont">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentWillMount() {
        cinemaService.getTickets(this.state.id)
            .then((val)=> {
                //console.log(val);
                this.setState({obj: val}, ()=> {
                    console.log(this.state.obj);
                })
            })
    }

    componentDidMount() {
        iScroll=new IScroll(this.refs.tickets,{
            probeType:3,
            bounce:false,
            mouseWheel: true
        })
        iScroll.on("scrollStart",function (){
            this.refresh();

        })

    }
    indexAction(i){

        this.setState({index:i})

    }

}