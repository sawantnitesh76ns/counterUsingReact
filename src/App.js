import React,{useState} from "react";
import './App.css';

//Importing Compoenents
import Form from "./Components/form.js";
import TodoList from "./Components/TodoList.js";

function App() {
  const[inputText,setInputTex]=useState("");
  const[todos,setTodos]=useState([]);
  return (
    <div className="App">
      <header>
        <h1>{inputText}</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputTex} inputText={inputText}/>
      <TodoList />
    </div>
  );
};

export default App;
