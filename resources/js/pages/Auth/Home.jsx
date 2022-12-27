import React from 'react'

function Home() {
  return (
    <div>
        <h1>Hello {window.localStorage.getItem("first_name")}</h1>
    </div>
  )
}

export default Home