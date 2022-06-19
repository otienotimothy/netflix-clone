import api from './baseApi';

export const fetchItems = async (url) => {
    let response = await api.get(url)
    return response
}