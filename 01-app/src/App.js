import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Buttons";
import "./styles.css";
import  CounterComponent from "./components/CounterComponent";

const App = () => {
  return (
    <div className="todo-container">
      <Header title = "To-Do App"/> 
      <CounterComponent/> 
      <TodoItem text="Eat"/>
      <TodoItem text="Sleep"/>
      <TodoItem text="Water"/>
      <TodoItem text="Gym"/>
      <TodoItem text="Phone"/>
      <Button/>
    </div>
  );
} ;

export default App;