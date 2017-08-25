
import React, {Component} from 'react'

import '../../css/movies.css'
import store from '../../store/index.js'
import movieServices from '../../services/MovieServices.js'
let unsubscribe=null
export  default class MoviesContent extends Component{
    // 构造
    constructor() {

        super();
        // 初始状态
        this.state = {
            choosingArr:[],
            host:[],
            history:"",
            show:""
        };
    }
    render(){
        let showOne=this.props.index==0?{display:"block"}:{display:"none"}

        let showTwo=(this.props.index==1)?{display:"block"}:{display:"none"}
        return (
            <div class="movies-content">
                <ul class="choosing" style={showOne}>
                    {
                        this.state.choosingArr.map((item,index)=>{
                            return (
                                <li key={index} onClick={this.listAction.bind(this,item.name,item.id)}>
                                    <div class="img">
                                        <img src={item.imgPath} alt=""/>
                                    </div>
                                    <div class="cont">
                                        <div class="title">
                                            <span >{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span >{item.grade}</span>
                                        </div>
                                        <div class="intro">{item.intro}</div>
                                        <div class="cinemaCount">
                                            <span>{item.cinemaCount}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>{item.watchCount}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul class="coming-soon" style={showTwo}>
                    {
                        this.state.host.map((item,index)=>{
                            return (
                                <li key={index} onClick={this.listAction.bind(this,item.name,item.id)}>
                                    <div class="img">
                                        <img src={item.imgPath} alt=""/>
                                    </div>
                                    <div class="cont">
                                        <div class="title">
                                            <span >{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span >{item.grade}</span>
                                        </div>
                                        <div class="intro">{item.intro}</div>
                                        <div class="cinemaCount">
                                            <span>{item.time}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span>{item.week}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    componentWillMount() {
        movieServices.getMoviesChoosing()
        .then((val)=>{
            //console.log(val.id);
            this.setState({choosingArr:val})
        })
        movieServices.getMoviesHost()
            .then((val)=>{
                //console.log(val.id);
                this.setState({host:val})
            })


    }
    listAction(val,i){
        store.dispatch({
            type:"title",
            val:val,
            i:i
        })
        this.props.history.push("/"+val+"/"+i+"/movies")
    }
}