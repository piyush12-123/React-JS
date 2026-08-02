import React, { createContext, useState } from 'react'

export const QuizDataContext = createContext()

const QuizProvider = (props) => {

const [currentQues, setCurrentQues] = useState(0)
const [score, setScore] = useState(0)

const answerQuestion =(isCorrect)=>{
  if(isCorrect){
    setScore (score + 1)
  }
    setCurrentQues (currentQues + 1)
}
const restartQuiz =()=>{
  setCurrentQues(0)
  setScore(0)
}
  return (
    <div>
      <QuizDataContext.Provider value={{ currentQues, setCurrentQues, score, setScore, restartQuiz, answerQuestion }}>
          {props.children}
      </QuizDataContext.Provider>
    </div>
  )
}
export default QuizProvider
