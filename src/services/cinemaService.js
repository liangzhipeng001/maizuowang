

import axios from 'axios'

import API from '../api-url'
function getCinemaData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.cinemaApi+"?t__="+new Date().getTime())
        .then((response)=>{
            let data=response.data.data.cinemas
            var baArr=[]
            for(var i=0; i<data.length; i++){
                baArr.push(data[i].district.name)
            }
            //console.log(baArr);
            var newArr=Array.from(new Set(baArr))
            //console.log(newArr);


        })

    })

}
getCinemaData()
export  default{
    getCinemaData
}