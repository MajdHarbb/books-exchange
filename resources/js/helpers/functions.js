export function setUserData(data){
    window.localStorage.setItem('user', data.user)
    window.localStorage.setItem('token', data.token)
    window.localStorage.setItem('first_name', data.user.first_name)
}

export function removeUser(){
    window.localStorage.clear()
}