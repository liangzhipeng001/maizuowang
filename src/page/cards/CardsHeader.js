/**
 * Created by Administrator on 2017/8/19 0019.
 */
/**
 * Created by Administrator on 2017/8/17 0017.
 */
import React, {Component} from 'react'
import '../../css/movies.css'
export  default class MoviesHeader extends Component{

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            tabs:["卖座卡","电子卖座卡"],
            index:""
        };
    }

    render(){

        return (
            <nav class="cards-top">
                {
                    this.state.tabs.map((item,index)=>{
                        return <li key={index}
                                   onClick={this.tabActive.bind(this,index)}
                                   class={this.state.index==index?"active":""}>{item}</li>
                    })
                }
            </nav>
        )
    }
    tabActive(i){
        this.setState({ index : i })
        this.props.index(i)
    }
}
