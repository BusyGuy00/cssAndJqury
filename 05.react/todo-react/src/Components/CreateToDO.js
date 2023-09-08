import React from "react";

function CreateToDo({todo, onCreate, onChange}) {
    return (
        <div>
            <div><h2>ToDoList</h2></div>
            <input  placeholder="이름" name="todo" value={todo} onChange={onChange}/>
            <button onClick={onCreate}>등록</button>
        </div>
    )
}
export default CreateToDo