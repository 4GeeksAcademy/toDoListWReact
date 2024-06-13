import React from "react";

const ToDoList = () =>{
    return (
        <form>
            <div class="mb-3">
                 <label for="exampleInputEmail1" class="form-label">Email address</label>
                 <input type="text" class="form-control" placeholder= "Añade tu tarea aca"/>
                 <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
             </div>
             <button type="submit" class="btn btn-primary">Add To The List</button>
        </form>
    )
}
export default ToDoList