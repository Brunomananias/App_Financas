import axios from 'axios'

const api = axios.create({
    //Para api local, pode usar o IP ao invés do localhost
    baseURL: 'http://192.168.1.3:3333'
})

export default api