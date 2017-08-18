


import API from '../api-url/index.js'
import axios from 'axios'



//banner
function getHomeBannerDate(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeBannerApi}?t__=${new Date().getTime()}`)
        .then((response)=>{
            resolve(response.data.data.billboards)
        })
        .catch((error)=>{
            console.log(error);
        })
    })
}

//homeMovie
function getHomeMovieData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeMovieApi}&t__=${new Date().getTime()}`)
            .then((response)=>{
                var newArr=response.data.data.films.map((item)=>{
                    var obj={}
                    obj.id=item.id
                    obj.name=item.name
                    obj.grade=item.grade
                    obj.premiereAt=item.premiereAt
                    obj.imgPath=item.cover.origin
                    obj.watchCount=item.watchCount+"人购票"
                    obj.cinemaCount=item.cinemaCount+"家影院上映"
                    return obj
                })
                resolve(newArr)
            })
            .catch((error)=>{
                console.log(error);
            })
    })
}
function getHomeMovieData1(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeHostMovieApi}&t__=${new Date().getTime()}`)
            .then((response)=>{
                var newArr=response.data.data.films.map((item)=>{
                    var obj={}
                    var data=new Date(item.premiereAt)
                    obj.id=item.id
                    obj.name=item.name
                    obj.premiereAt=item.premiereAt
                    obj.imgPath=item.cover.origin
                    obj.time=data.getMonth()+1+"月"+data.getDate()+"日上映"

                    return obj

                })
                resolve(newArr)
            })
            .catch((error)=>{
                console.log(error);
            })
    })
}
export default{
    getHomeBannerDate,
    getHomeMovieData,
    getHomeMovieData1
}