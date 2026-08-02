import React, { useContext } from 'react'
import {QuizDataContext} from './QuizProvider'
import { Questions } from './Question.js'
import EndScreen from './EndScreen.jsx'

const Question = () => {

const { currentQues, answerQuestion } = useContext(QuizDataContext)

const currentQuestionData = Questions[currentQues];
if (currentQues === Questions.length) {
  return <EndScreen />;
}

  return (
    <div>
      <h3 className='font-xl '>{currentQuestionData.prompt}</h3>
      <button onClick ={()=> answerQuestion(currentQuestionData.answer == "optionA")}
      className='border rounded bg-green-400 text-white font-bold pl-2 pr-2'>{currentQuestionData.optionA}</button>
      <button onClick={()=> answerQuestion(currentQuestionData.answer == "optionB")}
      className='border rounded bg-green-400 text-white font-bold pl-2 pr-2'>{currentQuestionData.optionB}</button>
      <button onClick={()=> answerQuestion(currentQuestionData.answer == "optionC")}
      className='border rounded bg-green-400 text-white font-bold pl-2 pr-2'>{currentQuestionData.optionC}</button>
      <button onClick={()=> answerQuestion(currentQuestionData.answer == "optionD")}
      className='border rounded bg-green-400 text-white font-bold pl-2 pr-2'>{currentQuestionData.optionD}</button>
    </div>
  )
}

export default Question
