
import React, {Component} from 'react'

import CardsHeader from './CardsHeader.js'
import CardsContent from './CardsContent.js'
import '../../css/cards.css'
export  default class Cards extends Component{

    constructor({history}) {

        super();
        // 初始状态
        this.state = {
            index:"",
            history:history
        };
    }
    render(){
        return (
            <div class="page" id="cards" >
                <CardsHeader index={this.IndexActive.bind(this)}/>
                <CardsContent index={this.state.index} history={this.state.history}/>

            </div>
        )
    }
    IndexActive(i){
        this.setState({index:i})
    }

}