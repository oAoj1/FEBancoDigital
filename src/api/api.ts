import axios from 'axios'

//http://localhost:3333

const api = axios.create({
    baseURL:'https://bebancodigital.onrender.com'
})

export default api