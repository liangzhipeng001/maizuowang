
import React, {Component} from 'react'

import '../../css/movies.css'

import movieServices from '../../services/MovieServices.js'
export  default class MoviesContent extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            choosingArr:[]
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
                                        <img src={item.poster.thumbnail} alt=""/>
                                    </div>
                                    <div class="cont">
                                        <div class="title">
                                            <span >{item.name}</span>
                                            <span >{item.grade}</span>
                                        </div>
                                        <div class="intro">{item.intro}</div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div class="coming-soon" style={showTwo}>2</div>
            </div>
        )
    }

    componentWillMount() {
        movieServices.getMoviesChoosing()
        .then((val)=>{
            console.log(val);
            this.setState({choosingArr:val})
        })
    }

}