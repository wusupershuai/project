
import axios from 'axios'

let instance = axios.create({
    baseURL:"/api",
    timeout:2000
})

// 封装api

export default instance