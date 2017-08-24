

import React, {Component} from 'react'

import '../../css/me.css'
export  default class Me extends Component{

    render(){
        return (
            <div class="page" id="me">
                <div class="from">
                    <li>
                        <input type="text" placeholder="请输入手机号/邮箱"/>
                        <div class="line"></div>
                    </li>
                    <li>
                        <input type="password" placeholder="请输入密码/验证码"/>
                        <div class="line"></div>
                    </li>
                    <li class="btn">
                        <button>登录</button>
                    </li>
                </div>
            </div>
        )
    }

}