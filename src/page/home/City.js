
import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import "../../css/app.css"
export  default class City extends Component{

    render(){
        return (
            <ReactCSSTransitionGroup
                transitionName="city"
                transitionAppear={true}
                transitionAppearTimeout={400}
                transitionEnter={false}
                transitionLeave={true}
                transitionLeaveTimeout={1000}>
                <div class="page" id="city">
                    city
                </div>
            </ReactCSSTransitionGroup>
        )
    }

}
