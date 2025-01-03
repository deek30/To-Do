import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit =(e)=>{
        e.preventDefault(); //page reloads when we click on submit button
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        addTodo(title,desc);
    }


  return (
    <div className="container my-3">
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlForfor="title" className="form-label">Todo title</label>
            <input type="text" value={title} onChange={(e)=>(setTitle(e.target.value))} className="form-control" id="title" aria-describedby="emailHelp"/>
            
        </div>
        <div className="mb-3">
            <label htmlForfor="desc" className="form-label">Todo description</label>
            <input type="text" value={desc} onChange={(e)=>(setDesc(e.target.value))} className="form-control" id="desc"/>
        </div>
        
        <button type="submit" className="btn btn-sm  btn-success">Add todo</button>
      </form>
    </div>
  )
}

