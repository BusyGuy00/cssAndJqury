
import './App.css';
import { useRef, useState } from 'react';
import CreateToDo from './Components/CreateToDO';
import ToDoList from './Components/ToDoList';

function App() {
    //유저 항목을 나타내는 앱
  const [todos, setTodos] = useState([
  ]);
    //인풋 입력값을 상태관리
  const [inputs, setInputs]= useState({
    todo : "",
  });
 
  const {todo} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const nextId = useRef(1);
  const onCreate = () => {
    setTodos([
      ...todos,
      {id: nextId.current, todo : todo, active : false}
    ])
    setInputs({
      todo:""
    })
    nextId.current += 1;
  }
  //삭제 부분
  const onRemove = (id) =>{
    setTodos(todos.filter(todo => todo.id !==id))
  }
  //클릭 반응
  const onToggle = (id) => {
    setTodos(todos.map(todo => todo.id === id?
      {...todo, active: !todo.active} : todo))
  }

  return (
    <div className="App">
      <CreateToDo
      todo={todo}
      onCreate={onCreate}
      onChange={onChange}
      />
      <ToDoList
      todos={todos}
      onRemove = {onRemove}
      onToggle = {onToggle}
      />
    </div>
  );
}

export default App;
