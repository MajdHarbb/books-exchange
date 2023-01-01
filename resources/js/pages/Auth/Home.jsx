import React from 'react'
import Books from '../../components/Books'

function Home() {
  return (
    <div>
        {/* <h1>Hello {window.localStorage.getItem("first_name")}</h1> */}
        <Books/>
    </div>
  )
}

export default Home