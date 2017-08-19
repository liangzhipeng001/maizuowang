/**
 * Created by Administrator on 2017/8/17 0017.
 */
import React, {Component} from 'react'


import MoviesHeader from './MoviesHeader.js'
import MoviesContent from './MoviesContent.js'
import '../../css/movies.css'
export  default class Movie extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            index:""
        };
      }
    render(){
        return (
            <div class="page" id="movie">
                <MoviesHeader index={this.IndexActive.bind(this)}/>
                <MoviesContent index={this.state.index}/>
            </div>
        )
    }
    IndexActive(i){
        this.setState({index:i})
    }
}