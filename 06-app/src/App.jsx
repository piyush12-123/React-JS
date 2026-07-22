import React, {useState} from 'react'


const App = () => {

  const [num, setNum] = useState(0);
  const [user, setUser] = useState("Piyush");
  const [arr_obj, setArr_obj] = useState({user:'Piyush', age:'21'});

  function change(){
    setUser("Piyush Shinde");
  }
  function increaseNum(){
    setNum(num+1);
  }
  function decreaseNum(){
    setNum(num-1);
  }
  function btn_click (){
    const setObj = {...arr_obj};
    setObj.user = 'Piyush Sanjay Shinde'
    setObj.age = 33
    setArr_obj(setObj);
  }

  return (
    <div>
      <h1>UserName: {user}</h1>
      <h2>Value of num is : {num} </h2>
      <h2>{arr_obj.user}, {arr_obj.age}</h2>
      <button onClick={btn_click}>Change Array User & Age</button><br></br>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
    </div>
  )
}

export default App
