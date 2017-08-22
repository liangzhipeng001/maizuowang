
import React, {Component} from 'react'

import '../../css/movies.css'

import movieServices from '../../services/MovieServices.js'
export  default class MoviesContent extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            choosingArr:[],
            host:[]
        };
    }
    render(){
        let showOne=this.props.index==0?{display:"block"}:{display:"none"}
        let showTwo=this.props.index==1?{display:"block"}:{display:"none"}
        return (
            <div class="movies-content">
                <ul class="choosing" style={showOne}>
                    {
                        this.state.choosingArr.map((item,index)=>{
                            return (
                                <li key={index}>
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
                                <li key={index}>
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

            this.setState({choosingArr:val})
        })
        movieServices.getMoviesHost()
            .then((val)=>{

                this.setState({host:val})
            })
    }

}