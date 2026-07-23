import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

 async function getData(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    // const data = await response.json()
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>HELLOOO, {elem.title}{idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
