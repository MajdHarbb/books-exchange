
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

export async function editUserInfo(data){
    return await axiosClient.post('/edit-user-info', data)
}

export async function editPassword(data){
    return await axiosClient.post('/edit-password', data)
}

export async function deleteBook(data){
    return await axiosClient.post('/delete-book', data)
}

export async function activity(data){
    return await axiosClient.post('/activity', data)
}

export async function allUsers(data){
    return await axiosClient.post('/all-users', data)
}

export async function deleteUser(data){
    return await axiosClient.post('/delete-user', data)
}

export async function allBooks(data){
    return await axiosClient.post('/all-books', data)
}
    