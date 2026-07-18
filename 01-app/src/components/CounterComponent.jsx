import React, {useState} from "react";

const CounterComponent = () =>{
  const [count, setCount] = useState(10);
  const [value, setValue] = useState("Piyush");
  return (
    <div>
      <p>Counter Component - {count}</p>
      <h6> Number is {count %2 === 0 ? "Even" : "Odd"}</h6>

      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <button onClick={()=> setCount(count - 1)}>Decrement</button>
      
    </div>
  )
}

export default CounterComponent;