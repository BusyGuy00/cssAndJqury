import React from "react";

function ToDoList ({todos,onToggle,onRemove}){
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <b onClick={()=> onToggle(todo.id)} style={{
                            color: todo.active ? 'gray' : 'black'}} >
                    {todo.todo} </b>
                    <button onClick={()=> onRemove(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ToDoList