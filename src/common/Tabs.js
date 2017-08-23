/**
 * Created by Administrator on 2017/8/17 0017.
 */
import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import store from '../store/index.js'
import '../css/header-style.css'

import nav from '../services/NavLeft.js'
let unsubscribe=null
export  default class Tabs extends Component{
    constructor(){
        super()
        this.state={
            id:""
        }
    }

    render(){

        let showStyle={
            transform:this.props.show?"none":"translateX(-100%)"
        }
        let bgStyle = {
            background: this.props.show?"rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
            display: this.props.show?"block" : "none"
        }
        let data=""
        if(this.props.pathname==='/mall'||this.props.pathname==='/detail/id='+this.state.id){
            data=nav.shop
        }else{
            data=nav.data
        }
        return (

                <div>
                    <div class="bg" style={bgStyle} onClick={this.hide.bind(this)}></div>
                    <div class="tabs" style={showStyle}>

                        {
                            data.map((item,index)=>{
                                return <a key={index} onClick={this.navAction.bind(this,item)}>{item.title}</a>
                            })
                        }
                    </div>
                </div>

        )
    }
    navAction(item){
        this.props.history.push(item.path)
        store.dispatch({
            type:"title",
            val:''
        })

        this.props.menuAction(item.header)
    }
    hide(){
        this.props.menuAction()
    }
    componentWillMount() {

        unsubscribe=store.subscribe(()=>{
            this.setState({

                id:store.getState().id
            })
        })

    }
    componentWillUnmount(){
        unsubscribe();
    }
}