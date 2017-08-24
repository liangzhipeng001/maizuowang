
import API from '../api-url/index.js'

import axios from 'axios'


function getMoviesChoosing(){
    return new Promise((resolve, reject)=>{
        axios.get(API.moviesChoosingApi)
            .then((response)=>{

                var arr=response.data.data.films
                //console.log(arr);
                if(arr==null){
                    getMoviesChoosing()
                }else{
                    window.sessionStorage.setItem("MoviesChoosing",JSON.stringify(arr))
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
                }

            })
    })
}
function getMoviesHost(){
    return new Promise((resolve, reject)=>{
        axios.get(API.moviesHotApi)
            .then((response)=>{
                var arr=response.data.data.films
                if(arr==null){
                    getMoviesHost()
                }else{
                    window.sessionStorage.setItem("MoviesHost",JSON.stringify(arr))
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
                }

            })
    })
}

function getMoviesData(id){
    return new Promise((resolve,reject)=>{
        axios.get("/v4/api/film/"+id+"?t__="+new Date().getTime())
        .then((response)=>{
            var obj={}
            var data=new Date(response.data.data.film.premiereAt)
            obj.director=response.data.data.film.director //导演
            obj.actors=response.data.data.film.actors //主演
            obj.imgPath=response.data.data.film.cover.origin //img
            obj.language=response.data.data.film.nation+"("+response.data.data.film.language+")" //语言
            obj.category=response.data.data.film.category  //类型
            obj.premiereAt=data.getMonth()+1+"月"+data.getDate()+"日上映"
            obj.synopsis=response.data.data.film.synopsis

            resolve(obj)
        })
    })
}

export default{
    getMoviesChoosing,
    getMoviesHost,
    getMoviesData
}
