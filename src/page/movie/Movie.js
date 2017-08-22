/**
 * Created by Administrator on 2017/8/17 0017.
 */
import React, {Component} from 'react'


import MoviesHeader from './MoviesHeader.js'
import MoviesContent from './MoviesContent.js'
import '../../css/movies.css'
let iScroll=null
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
            <div class="page" id="movie" >
                    <MoviesHeader index={this.IndexActive.bind(this)}/>

                 <div class="wrap-cont" ref="movies">
                     <div class="wrap">
                         <MoviesContent index={this.state.index}/>
                     </div>
                 </div>
            </div>
        )
    }
    IndexActive(i){
        this.setState({index:i})
    }
    componentDidMount() {
        iScroll=new IScroll(this.refs.movies,{
            probeType:3,
            bounce:false
        })
        iScroll.on("scrollStart",function (){
            this.refresh();
        })
    }
}