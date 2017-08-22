
import React, {Component} from 'react'

import '../../css/mall.css'
import store from '../../store'


export  default class Nav extends Component{
    // 构造
      constructor() {

          super();
        // 初始状态
        this.state = {
            history:""
        };
      }
    render(){
        return (
            <nav class="list">
                {
                    this.props.nav.map((item,index)=>{
                        return (
                            <li key={index} onClick={this.locationAction.bind(this,item.id,item.info)}>
                                <img src={item.imgPath} alt=""/>
                                <span>{item.name}</span>
                            </li>
                        )
                    })
                }
            </nav>
        )
    }
    locationAction(id,val){
        store.dispatch({
            type:"mall",
            mallName:val,
            mallId:id
        })
        this.state.history.push("/"+val+"/"+id+"/mall-detail")
    }

    componentWillMount() {

        this.setState({history:this.props.history})
    }


}
