
import { axiosClient } from './apiClient.js';

// export function getProduct(){
//     return axiosClient.get('/product');
// }

export function signin(data){
    return axiosClient.post('/login', data)
}

export function register(data){
    return axiosClient.post('/register', data)
}
    