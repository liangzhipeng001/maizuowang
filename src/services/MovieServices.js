
import API from '../api-url/index.js'

import axios from 'axios'


function getMoviesChoosing(){
    return new Promise((resolve, reject)=>{
        axios.get(API.moviesChoosingApi)
        .then((response)=>{

            resolve(response.data.data.films)
        })
    })
}

export default{
    getMoviesChoosing
}
