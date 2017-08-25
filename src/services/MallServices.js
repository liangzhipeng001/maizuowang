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
                var arr=response.data.data
                if(arr==null){
                    getMallNavData()
                }else{
                    window.sessionStorage.setItem("MallNav",JSON.stringify(arr))
                    var nav=response.data.data.splice(0, 8).map((item)=>{
                        var obj={}

                        obj.name=item.name
                        obj.imgPath=item.imageSrc
                        obj.info=item.url.split("#")[1].split("/")[1]
                        obj.id=item.url.split("#")[1].split("/")[2]
                        //obj.url=
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
                        obj.id=item.url.split("#")[1].split("/")[2]
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
                }


            })
    })
}

function getMallFeaturedData(){
    return new Promise((resolve,reject)=>{
        axios.get(API.mallFeatured)
            .then((response)=>{
                var arr=response.data.data
                if(arr==null){
                    getMallFeaturedData()
                }else{
                    window.sessionStorage.setItem("MallFeatured",JSON.stringify(arr))
                    console.log(arr);
                    var newArr= response.data.data.list.map((item)=>{
                        var obj={}
                        obj.id=item.id
                        obj.name=item.masterName
                        for(var i=0; i<item.skuList.length; i++){
                            obj.img=item.skuList[i].image
                            if((item.skuList[i].price/10)%10>0){
                                obj.price=item.skuList[i].price/100+"0"
                            }else{
                                obj.price=item.skuList[i].price/100+".00"
                            }

                        }
                        obj.displaySalesCount="已售"+item.displaySalesCount
                        return obj
                    })
                    resolve(newArr)
                }

            })
    })
}
function getPerformanceData(val,id){
    return  new Promise((resolve,reject)=>{
        axios.get("/api/"+val+"?id="+id+"&page=1&pageSize=20")
            .then((response)=>{
                var arr=response.data.data
                if(arr==null){
                    getPerformanceData(val,id)
                }else{
                    window.sessionStorage.setItem("Performance",JSON.stringify(arr))
                    resolve(response.data.data)
                }

            })
            .catch((error)=>{
                console.log(error);
            })
    })
}

function getNavAllData(val,id){
    return new Promise((resolve,reject)=>{
        axios.get("/api/"+val+"/items?id="+id+"&page=1&num=20")
            .then((response)=>{
                var data=response.data.data.list
                if(data==null){
                    getNavAllData(val,id)
                }else{
                    window.sessionStorage.setItem("NavAll",JSON.stringify(data))
                    var newArr=data.map((item)=>{
                        console.log();
                        var obj={}
                        obj.image=item.skuList[0].image
                        obj.name=item.masterName
                        obj.id=item.id
                        obj.price=item.skuList[0].price
                        obj.salesCount=item.displaySalesCount
                        return obj
                    })
                    resolve(newArr)
                }

            })
    })
}


function getNavTop(val,id){
    return new Promise((resolve,reject)=>{
        axios.get("/api/"+val+"?id="+id)
            .then((response)=>{
                var arr=response.data.data
                if(arr==null){
                    getNavTop(val,id)
                }else{
                    window.sessionStorage.setItem("NavTop",JSON.stringify(arr))
                    resolve(response.data.data)
                }
            })
    })
}

function getDetailData(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.detailApi}?id=${id}`)
            .then((response)=>{
                var arr1=response.data.data
                if(arr1==null){
                    getDetailData(id)
                }else{
                    window.sessionStorage.setItem("Detail",JSON.stringify(arr1))
                    var obj={}
                    obj.masterName=response.data.data.masterName //name
                    obj.slaveName=response.data.data.slaveName //描述
                    obj.annex=response.data.data.options[0].item //款式
                    var arr=response.data.data.skuList
                    var pirce=[]
                    var id=[]
                    var menu=[]
                    for(var i=0; i<arr.length; i++){
                        if((arr[i].price/10)%10>0){
                            pirce.push(arr[i].price / 100 + "0");
                        }else if((arr[i].price/10)%10==0){
                            pirce.push(arr[i].price / 100 + ".00");
                        }else{

                        }
                        id.push(arr[i].id)
                        menu.push(arr[i].images)
                    }
                    obj.menu=menu
                    obj.pirce=pirce
                    obj.id=id
                    obj.banner=arr[0].images
                    obj.skulist=response.data.data.skuList
                    obj.count=response.data.data.displaySalesCount //销量
                    resolve(obj)
                }


            })
            .catch((error)=>{
                console.log(error);
            })
    })
}

function getDetailImgData(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.detailImgApi}?id=${id}`)
            .then((response)=>{
                var arr=response.data.data
                if(arr==null){
                    getDetailImgData(id)
                }else{
                    window.sessionStorage.setItem("DetailImg",JSON.stringify(arr))
                    resolve(response.data.data)
                }

            })
            .catch((error)=>{
                console.log(error);
            })
    })
}
export  default{
    getMallNavData,
    getMallFeaturedData,
    getPerformanceData,
    getNavAllData,
    getNavTop,
    getDetailImgData,
    getDetailData
}

