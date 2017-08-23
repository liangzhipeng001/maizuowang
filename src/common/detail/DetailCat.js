
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import mallService from '../../services/MallServices.js'

import '../../css/detail.css'
export default class DetailCat extends Component{
    // 构造
    constructor() {

        super();
        // 初始状态
        this.state = {
            annex:[],
            price:[],
            skulist:[],
            banner:[],
            index:0
        };
    }
    render(){
        let showMen=this.props.show?{display:"block"}:{display:"none"}
        //let temp
        //let img
        //console.log(this.state.skulist[0]);
        //for(var i=0; i<this.state.skulist.length; i++){
        //
        //}
        //console.log(111);
        //console.log(this.state.skulist);
        //if(this.state.skulist!=undefined){
        //    console.log(222);
        //    console.log(this.state.skulist[0]);
        //    //temp=<img src={this.state.skulist[this.state.index].images[0]} alt=""/>
        //}
        
        return (
            <div class="menu" style={showMen}>
                <div class="menu-pick">
                    <div class="menu-info">
                        <div class="img">

                        </div>
                        <div class="price">111</div>
                        <div class="close" onClick={this.closeAction.bind(this)}>X</div>
                    </div>
                </div>
            </div>
        )
    }
    closeAction(){
        this.props.closeAction(false)
    }

    componentWillReceiveProps() {
        //console.log("componentDidUpdate");
        //console.log(this.props.detail);
        this.setState({
                annex:this.props.detail.annex,
                price:this.props.detail.pirce,
                skulist:this.props.detail.skulist,
                banner:this.props.detail.banner
            })
    }
    

}


