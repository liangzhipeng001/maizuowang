


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

//address
function getAddressData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.addressApi}?t__=${new Date().getTime()}`)
            .then((response)=>{
                var arr=response.data.data.cities
                var aArr=[]
                var bArr=[]
                var cArr=[]
                var dArr=[]
                var eArr=[]
                var fArr=[]
                var gArr=[]
                var hArr=[]
                var jArr=[]
                var kArr=[]
                var lArr=[]
                var mArr=[]
                var nArr=[]
                var pArr=[]
                var qArr=[]
                var rArr=[]
                var sArr=[]
                var xArr=[]
                var wArr=[]
                var yArr=[]
                var zArr=[]
                var tArr=[]
                for(var i=0; i<arr.length; i++){
                    if(arr[i].pinyin.substr(0,1)=="A"){
                        aArr.push(arr[i])
                        aArr.one="A"

                    }else if(arr[i].pinyin.substr(0,1)=="B"){
                        bArr.push(arr[i])
                        bArr.one="B"
                    }else if(arr[i].pinyin.substr(0,1)=="C"){
                        cArr.push(arr[i])
                        cArr.one="C"
                    }else if(arr[i].pinyin.substr(0,1)=="D"){
                        dArr.push(arr[i])
                        dArr.one="D"
                    }else if(arr[i].pinyin.substr(0,1)=="E"){
                        eArr.push(arr[i])
                        eArr.one="E"
                    }else if(arr[i].pinyin.substr(0,1)=="F"){
                        fArr.push(arr[i])
                        fArr.one="F"
                    }else if(arr[i].pinyin.substr(0,1)=="G"){
                        gArr.push(arr[i])
                        gArr.one="G"
                    }else if(arr[i].pinyin.substr(0,1)=="H"){
                        hArr.push(arr[i])
                        hArr.one="H"
                    }else if(arr[i].pinyin.substr(0,1)=="J"){
                        jArr.push(arr[i])
                        jArr.one="J"
                    }else if(arr[i].pinyin.substr(0,1)=="K"){
                        kArr.push(arr[i])
                        kArr.one="K"
                    }else if(arr[i].pinyin.substr(0,1)=="L"){
                        lArr.push(arr[i])
                        lArr.one="L"
                    }else if(arr[i].pinyin.substr(0,1)=="M"){
                        mArr.push(arr[i])
                        mArr.one="M"
                    }else if(arr[i].pinyin.substr(0,1)=="N"){
                        nArr.push(arr[i])
                        nArr.one="N"
                    }else if(arr[i].pinyin.substr(0,1)=="P"){
                        pArr.push(arr[i])
                        pArr.one="P"
                    }else if(arr[i].pinyin.substr(0,1)=="Q"){
                        qArr.push(arr[i])
                        qArr.one="Q"
                    }else if(arr[i].pinyin.substr(0,1)=="R"){
                        rArr.push(arr[i])
                        rArr.one="R"
                    }else if(arr[i].pinyin.substr(0,1)=="S"){
                        sArr.push(arr[i])
                        sArr.one="S"
                    }else if(arr[i].pinyin.substr(0,1)=="T"){
                        tArr.push(arr[i])
                        tArr.one="T"
                    }else if(arr[i].pinyin.substr(0,1)=="W"){
                        wArr.push(arr[i])
                        wArr.one="W"
                    }else if(arr[i].pinyin.substr(0,1)=="X"){
                        xArr.push(arr[i])
                        xArr.one="X"
                    }else if(arr[i].pinyin.substr(0,1)=="Y"){
                        yArr.push(arr[i])
                        yArr.one="Y"
                    }else if(arr[i].pinyin.substr(0,1)=="Z"){
                        zArr.push(arr[i])
                        zArr.one="Z"
                    }
                }
                resolve([aArr,bArr,cArr,dArr,eArr,fArr,
                    gArr,hArr,jArr,kArr,lArr,mArr,nArr,
                    pArr,qArr,rArr,sArr,tArr,wArr,xArr,yArr,zArr])
            })
            .catch((error)=>{
                console.log(error);
            })
    })
}
export default{
    getHomeBannerDate,
    getHomeMovieData,
    getHomeMovieData1,
    getAddressData
}