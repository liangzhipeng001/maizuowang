
import API from '../api-url/index.js'

import axios from 'axios'


function getMoviesChoosing(){
    return new Promise((resolve, reject)=>{
        axios.get(API.moviesChoosingApi)
            .then((response)=>{
                var newArr=response.data.data.films.map((item)=>{
                    var obj={}
                    var data=new Date(item.premiereAt)
                    obj.id=item.id
                    obj.grade=item.grade
                    obj.name=item.name
                    obj.premiereAt=item.premiereAt
                    obj.imgPath=item.poster.thumbnail
                    obj.time=data.getMonth()+1+"月"+data.getDate()+"日上映"
                    obj.intro=item.intro
                    obj.cinemaCount=item.cinemaCount+"家影院上映"
                    obj.watchCount=item.watchCount+"人购票"
                    return obj

                })
                resolve(newArr)
            })
    })
}
function getMoviesHost(){
    return new Promise((resolve, reject)=>{
        axios.get(API.moviesHotApi)
            .then((response)=>{
                var newArr=response.data.data.films.map((item)=>{
                    var obj={}
                    var data=new Date(item.premiereAt)

                    obj.id=item.id
                    obj.grade=item.grade
                    obj.name=item.name
                    obj.premiereAt=item.premiereAt
                    obj.imgPath=item.poster.thumbnail
                    obj.time=data.getMonth()+1+"月"+data.getDate()+"日上映"
                    obj.intro=item.intro
                    var week=""
                    switch (data.getDay()) {
                        case 0:week="星期天";break
                        case 1:week="星期一";break
                        case 2:week="星期二";break
                        case 3:week="星期三";break
                        case 4:week="星期四";break
                        case 5:week="星期五";break
                        case 6:week="星期六";break
                    }
                    obj.week=week
                    return obj

                })
                resolve(newArr)
            })
    })
}


export default{
    getMoviesChoosing,
    getMoviesHost
}
