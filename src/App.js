/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

import Header from "./components/Header";
import {Todos} from "./components/Todos";
import {Footer} from "./components/Footer";
import React, {useState, useEffect} from 'react';
import { AddTodo } from './components/AddTodo';
// import { cleanup } from '@testing-library/react';



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("I am on delete of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
 //setTodos is a function that will update the state of todos
 //using useState hook

const addTodo = (title, desc)=>{
  console.log("Adding this todo", title, desc);
  let sno;
  if(todos.length===0){
    sno = 0;
  }
  else{
   sno = todos[todos.length-1].sno + 1;}
  const myTodo = {
    sno : sno,
    title:title,
    desc:desc,

  }
  setTodos([...todos, myTodo]); //ek array banaya jisme pehle wale todos the aur usme ek naya todo add kiya
  console.log(myTodo);
}


  const [todos, setTodos]= useState([initTodo]);
  //useState is a hook that is used to create a state variable
  //todos is the state variable
  //setTodos is a function that will update the state of todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    
    }, [todos])

  return (
    <>
      <Header title={"My Todos List"} searchBar ={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
