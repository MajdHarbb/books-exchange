
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

export function createBook(data){
    return axiosClient.post('/create-book', data)
}

export async function getBooks(data){
    return await axiosClient.get('/get-books', data)
}

export async function getPurchasedBooks(data){
    return await axiosClient.post('/get-purchased-books', data)
}

export async function getSingleBook(data){
    return await axiosClient.post('/get-book', data)
}

export async function buyBook(data){
    return await axiosClient.post('/buy-book', data)
}

export async function getMyBooks(data){
    return await axiosClient.post('/get-my-books', data)
}

export async function getMyNotifications(data){
    return await axiosClient.post('/get-my-notifications', data)
}
    