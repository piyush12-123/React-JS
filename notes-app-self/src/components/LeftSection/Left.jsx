import React, { useState } from 'react'

const Left = () => {
  const [tasks, setTasks] = useState([])

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')


   
  const submitHandler=(e)=>{
    e.preventDefault();

    const copyTask = [...tasks]
    copyTask.push({title, details})
    setTasks(copyTask)

    setDetails('')
    setTitle('')

  }

  const deleteNote = (idx)=>{
    const copyTask = [...tasks]
    copyTask.splice(idx,1)
    setTasks(copyTask)
  }

  return (
    <div>
      <form onSubmit ={(e)=>
        submitHandler(e)
      }   className='bg-gray-800' >

      
      <h1 className='font-bold text-3xl mb-3 text-white'>Enter Notes</h1>
      
      
        <input type='text' placeholder='Enter Heading'
         className='px-5  text-white py-2 font-medium outline-none rounded border-2 mb-4'
         value = {title}
         onChange ={(e)=>{
          setTitle(e.target.value)
         }}/>

        <textarea placeholder='Enter Details'
        className='px-5 h-35  text-white py-2 w-full font-medium mb-4 outline-none rounded border-2 flex items-start flex-row '
        value= {details}
        onChange ={(e)=>{
          setDetails(e.target.value)
        }}
        />
        <button className='bg-amber-400 ml-60 font-medium w-50 outline-none  text-white px-5 py-2 rounded '>
          Add Note</button>
      
      </form>
      <div className=' p-10 '>
        <h1 className='text-4xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap overflow-auto items-start justify-start gap-5 mt-7 h-[80%]'>
        { tasks.map(function(elem,idx){
          return <div key={idx}  className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
            <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
              </div>
              <button onClick={()=>{ deleteNote(idx)}}
                className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'
                >Delete</button>
          </div>
            
        })

        }
        </div>
      </div>
    </div>
  )
}

export default Left
