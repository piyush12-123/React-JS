import React, { useState, useEffect } from 'react'

const App = () => {

  const [task, setTask] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [logs, setLogs] = useState([])


  const [filterPriority, setFilterPriority] = useState('All')
  const [filteredLogs, setFilteredLogs] = useState([])


  function submitHandler(e) {
    e.preventDefault()
    if (!task.trim()) return 

    const randomTime = Math.floor(Math.random() * 50) + 10

    const copyLogs = [...logs]
    copyLogs.push({
      id: Date.now(),
      taskName: task,
      priority: priority,
      timeSpent: randomTime
    })
    setLogs(copyLogs)

    setTask('')
    setPriority('Medium')
  }


  const deleteTask = (id) => {
    const copyLogs = logs.filter((item) => item.id !== id)
    setLogs(copyLogs)
  }


  useEffect(() => {
    if (filterPriority === 'All') {
      setFilteredLogs(logs)
    } else {
      const filtered = logs.filter((elem) => elem.priority === filterPriority)
      setFilteredLogs(filtered)
    }
  }, [filterPriority, logs])

  return (
    <div className='p-5 max-w-lg mx-auto'>
   
      <form onSubmit={submitHandler} className='border-b pb-5'>
        <h1 className='font-bold text-2xl mb-4'>Task Timer & Log Tracker</h1>

        <div className='mb-3'>
          <input 
            className='border border-gray-400 px-3 py-1 rounded w-full'
            type='text' 
            placeholder='Enter Task Name'
            value={task}
            onChange={(e) => setTask(e.target.value)} 
          />
        </div>

        <div className='mb-3 flex items-center justify-between'>
          <label htmlFor="priority" className='font-medium'>Select Priority:</label>
          <select 
            id="priority" 
            className='border border-gray-400 px-2 py-1 rounded'
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <button 
          type='submit' 
          className='w-full bg-blue-600 text-white py-1.5 rounded font-semibold cursor-pointer'
        >
          Add Task
        </button>
      </form>

   
      <div className='mt-5'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-bold'>Task Logs</h2>

   
          <select 
            className='border border-gray-400 px-2 py-1 rounded text-sm bg-gray-50'
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="All">Filter: All</option>
            <option value="High">Filter: High</option>
            <option value="Medium">Filter: Medium</option>
            <option value="Low">Filter: Low</option>
          </select>
        </div>

   
        {filteredLogs.length === 0 ? (
          <p className='text-gray-500 text-sm italic'>No tasks match this filter.</p>
        ) : (
          filteredLogs.map((elem) => (
            <div 
              key={elem.id} 
              className='flex items-center justify-between border border-gray-200 p-3 mb-2 rounded shadow-sm bg-white'
            >
              <div>
                <h3 className='font-semibold text-base'>{elem.taskName}</h3>
                <p className='text-xs text-gray-600 mt-0.5'>
                  Priority: <span className='font-bold'>{elem.priority}</span> | Time: {elem.timeSpent} mins
                </p>
              </div>

              <button 
                onClick={() => deleteTask(elem.id)}
                className='bg-red-500 text-white text-xs px-3 py-1.5 rounded cursor-pointer hover:bg-red-600'
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App