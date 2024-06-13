import React from "react";

const ToDoList = () =>{
    return (
        <form className="form">
            <div class="mb-3">
                 <label for="exampleInputEmail1" className="form-label"></label>
                 <input type="text" className="form-control" placeholder= "Añade tu tarea aca"/>
                 <div id="emailHelp" className="form-text">Please add all the task you need to do.</div>
             </div>
             <button type="submit" className="btn btn-primary"><i className="fa fa-solid fa-plus"></i></button>
        </form>
    )
}
export default ToDoList