import axios from "axios";
import { BASE_URL } from './urls'

const instance = axios.create({
    baseURL: BASE_URL
})

const api = (axios) => {
    return {
        get: (url, config = {}) => axios.get(url, config)
    }
}

export default api(instance)