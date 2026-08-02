import React, { useContext } from 'react'
import { QuizDataContext } from './QuizProvider'
import {Questions} from './Question.js'

const EndScreen = () => {

  const {score, restartQuiz} = useContext(QuizDataContext)
  return (
    <div>
      <h1 className='font-xl text-red-300 '>Quiz Finished!!!!</h1>
      <h2 className='font-black '>Score : {score}</h2>
      <button onClick = {restartQuiz}
      className='bg-grey-700 border rounded'>Restart</button>
    </div>
  )
}

export default EndScreen
