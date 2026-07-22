import React, {useState} from 'react'

const App = () => {
  
const [title, settitle] = useState('')
  const submitHandler =(e) =>{
    e.preventDefault();
    console.log('Form Submitted by', title)

    settitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type = "text" placeholder='Enter Your Name'
        value ={title} onChange={(e)=>settitle(e.target.value)}></input>
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App
