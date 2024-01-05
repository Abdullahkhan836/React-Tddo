import { useState } from "react";
import "./App.css"

function App() {
  let [text, setText] = useState("");
  let [todo, setTodo] = useState([])

  function addTodo(event) {
    event.preventDefault();
    // console.log(text);
    todo.push(text)
    setTodo(todo);
    console.log(todo);
    setText("")
  }

  function delTodo(index) {
    const newArray = [...todo];
    newArray.splice(index, 1);
    setTodo(newArray);
  }
  function editTodo(item, index) {
    const newValue = prompt("Enter New Value", item)
    if (newValue != null) {
      const newArray = [...todo];
      newArray[index] = newValue;
      setTodo(newArray)
    } else {
      alert('Please enter a value')
    }
  }

  return (

    <>
      <h1>TODO APPLICATION</h1>
      <form onSubmit={addTodo} >
        <div id="abc">
          <input type="text" id="input" placeholder="ENTER TODO" onChange={(e) => { setText(e.target.value) }}
            value={text} />
          <button type="submit" className="btn">Add Todo</button>
        </div>
      </form>
      <div id="xyz">
        {todo.map((item, index) => {
          // console.log(item)
          return <ul>
            <li key={Math.random()}>{item}
              <button onClick={() => editTodo(item, index)} className="editBtn">Edit</button> 
              <button onClick={() => delTodo(index)} className="delBtn">Delete</button>
              </li>;
      
          </ul>
          
        })}
      </div>
    </>

  )
}

export default App;