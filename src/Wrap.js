/**
 * Created by Administrator on 2017/8/17 0017.
 */

import React, {Component} from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import store from './store/index.js'

import Header from './common/Header.js'
import Tabs from  './common/Tabs.js'

import Home from './page/home/Home.js'
import Movie from './page/movie/Movie.js'
import Cinema from './page/cinema/Cinema.js'
import Mall from './page/mall/Mall.js'
import Me from './page/me/Me.js'
import Cards from './page/cards/Cards.js'
import City from './page/home/City.js'
import ListMovie from './common/listMovie.js'
import './css/app.css'
export default class Wrap extends Component{
    constructor(){

        super()
        this.state={
            title:"卖座电影",
            show:false,
            val:"",
            index:""
        }

    }

    render(){
        return (
            <Router>
                <div class="app">
                    <Header menuAction={this.menuAction.bind(this)} title={this.state.title} />

                    <Route path="/" render={({history,location})=>{
                            return <Tabs show={this.state.show}
                                    history={history}
                                    pathname={location.pathname}
                                  menuAction={this.menuAction.bind(this)}
                                />
                    }}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/movies" component={Movie}/>
                    <Route path="/cinema" component={Cinema}/>
                    <Route path="/mall" component={Mall}/>
                    <Route path="/me" component={Me}/>
                    <Route path="/cards" component={Cards}/>
                    <Route path="/city" component={City}/>
                    <Route path="/val/index" component={ListMovie}/>
                </div>
            </Router>
        )
    }
    menuAction(val){

        this.setState({show:!this.state.show})
        if(val){
            this.setState({title:val})
        }
    }
    componentWillMount() {
        store.subscribe(()=>{

            this.setState({val:store.getState().name,index:store.getState().i})
        })

    }
}