
import React, {Component} from 'react'
import store from '../../store/index.js'


import homeServices from "../../services/homeServices.js"
export  default class Content extends Component{
    // 构造
      constructor({history}) {

          super();

          // 初始状态
        this.state = {
            data:[],
            data1:[],
            history
        };
      }
    render(){
        return (
            <section class="list">
                <div class="list-movies" >
                    {
                        this.state.data.map((item,index)=>{
                            return (
                                <div class="item" key={index}
                                     onClick={this.listAction.bind(this,item.name,item.id)}>
                                    <div class="item-content">
                                        <div class="img">
                                            <img src={item.imgPath}/>
                                        </div>
                                        <div class="movies-info">
                                            <div class="left">
                                                <span class="title">{item.name}</span>
                                                <p class="info">{item.cinemaCount} {item.watchCount}</p>
                                            </div>
                                            <div class="right">
                                                <span class="grade">{item.grade}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div class="more-btn" onClick={this.btnAction.bind(this)}>
                        更多热映电影
                    </div>
                </div>
                <div>
                    <div class="topBtn">
                        <div class="btnCont">即将上映</div>
                    </div>
                    {
                        this.state.data1.map((item,index)=>{
                            return (
                                <div class="item" key={index}
                                     onClick={this.listAction.bind(this,item.name,item.id)}>
                                    <div class="item-content">
                                        <div class="img">
                                            <img src={item.imgPath}/>
                                        </div>
                                        <div class="movies-info">
                                            <div class="left">
                                                <span class="title1">{item.name}</span>
                                            </div>
                                            <div class="right">
                                                <span class="time">{item.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div class="more-btn" onClick={this.comingAction.bind(this)}>
                        更多即将上映电影
                    </div>
                </div>
            </section>
        )
    }

    listAction(val,i){

        store.dispatch({
            type:"title",
            val:val,
            i:i
        })
        this.props.history.push("/"+val+"/"+i+"/movies")

    }

    componentWillMount() {
        homeServices.getHomeMovieData()
        .then((val)=>{

            this.setState({data:val})
        })
        homeServices.getHomeMovieData1()
        .then((val)=>{
            this.setState({data1:val})
        })

    }

    btnAction(){
        this.state.history.push("/movies")
    }
    comingAction(){
        this.state.history.push("/movies")
    }


}
