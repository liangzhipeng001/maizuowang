
import React, {Component} from 'react'

import '../../css/mall.css'

export  default class Nav extends Component{
    render(){
        return (
            <nav class="list">
                {
                    this.props.nav.map((item,index)=>{
                        return (
                            <li key={index}>
                                <img src={item.imgPath} alt=""/>
                                <span>{item.name}</span>
                            </li>
                        )
                    })
                }
            </nav>
        )
    }


}
