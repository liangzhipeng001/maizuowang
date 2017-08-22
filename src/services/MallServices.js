/**
 * Created by Administrator on 2017/8/21 0021.
 */

import axios from 'axios'

import API from '../api-url/index.js'


//mall nav

function getMallNavData(){
    return new Promise((resolve,rejcet)=>{
        axios.get(API.mallApi)
        .then((response)=>{
            var nav=response.data.data.splice(0, 8).map((item)=>{
                var obj={}
                obj.name=item.name
                obj.imgPath=item.imageSrc
                return obj
            })

            var banner=response.data.data.splice(0,2).map((item)=>{
                var obj={}
                obj.imgPath=item.imageSrc
                return obj
            })

            var navBottom=response.data.data.splice(0,2).map((item)=>{
                var obj={}
                obj.imgPath=item.imageSrc
                return obj
            })

            var detail=response.data.data.map((item)=>{
                var obj={}
                obj.imgPath=item.imageSrc
                obj.products=item.products
                return obj
            })
            var obj={
                nav,banner,navBottom,detail
            }
            resolve(obj)
        })
    })
}

function getMallFeaturedData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.mallFeatured)
            .then((response)=>{
               var newArr= response.data.data.list.map((item)=>{
                   var obj={}
                   obj.name=item.masterName
                   for(var i=0; i<item.skuList.length; i++){
                       obj.img=item.skuList[i].image
                       obj.price=item.skuList[i].price
                   }
                   obj.displaySalesCount="已售"+item.displaySalesCount
                   return obj
               })
                resolve(newArr)
            })
    })
}
export  default{
    getMallNavData,
    getMallFeaturedData
}

