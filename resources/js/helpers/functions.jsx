import { Navigate } from "react-router-dom"

export function setUserData(data){
    console.log(data.user)
    window.localStorage.setItem('user', JSON.stringify(data.user))
    window.localStorage.setItem('token', data.token)
    window.localStorage.setItem('authenticated', true)
    window.localStorage.setItem('first_name', data.user.first_name)
}

export function removeUser(){
    window.localStorage.clear();
    return <Navigate to="/" />
}

export function convert(e) {
    // check max. file size is not exceeded
    // size is in bytes
    if (files[0].size > 2000000) {
      console.log("File too large");
      return;
    }
    var reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result); //base64encoded string
      return reader.result
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    };
  }
