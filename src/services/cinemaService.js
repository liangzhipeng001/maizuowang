

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
            var newArr=Array.from(new Set(baArr))
            //console.log(newArr);
            var arr1=[]
            var arr2=[]
            var arr3=[]
            var arr4=[]
            var arr5=[]
            var arr6=[]
            var arr7=[]
            var arr8=[]
            var arr9=[]
            for(var j=0; j<data.length; j++){
                if(data[j].district.name==newArr[0]){
                    arr1.push(data[j]);
                    arr1.one=newArr[0]
                }else if(data[j].district.name==newArr[1]){
                    arr2.push(data[j]);
                    arr2.one=newArr[1]
                }else if(data[j].district.name==newArr[2]){
                    arr3.push(data[j]);
                    arr3.one=newArr[2]
                }else if(data[j].district.name==newArr[3]){
                    arr4.push(data[j]);
                    arr4.one=newArr[3]
                }else if(data[j].district.name==newArr[4]){
                    arr5.push(data[j]);
                    arr5.one=newArr[4]
                }else if(data[j].district.name==newArr[5]){
                    arr6.push(data[j]);
                    arr6.one=newArr[5]
                }else if(data[j].district.name==newArr[6]){
                    arr7.push(data[j]);
                    arr7.one=newArr[6]
                }else if(data[j].district.name==newArr[7]){
                    arr8.push(data[j]);
                    arr8.one=newArr[7]
                }else if(data[j].district.name==newArr[8]){
                    arr9.push(data[j]);
                    arr9.one=newArr[8]

                }
            }
            //console.log(arr1);
            resolve([arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9])


        })

    })

}
getCinemaData()
export  default{
    getCinemaData
}