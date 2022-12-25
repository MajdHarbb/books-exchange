
import { axiosClient } from './apiClient.js';

// export function getProduct(){
//     return axiosClient.get('/product');
// }

export function login(data){
    return axiosClient.post('/login', data);
}
    