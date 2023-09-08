import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from '../modules/todos';
import Todos from './Todos';

function TodosContainer(props) {
    const todos = useSelector(state=> state.todos);
    const dispatch = useDispatch();
    //dispatch ({액션객체}) 액션객체 생성 함수 ---> return action
    const onCreate = text => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    const onRemove = id => dispatch(deleteTodo(id));
    return (
        <div>
            <Todos 
            todos={todos} 
            onCreate={onCreate} 
            onToggle={onToggle} 
            onRemove={onRemove}
            />
        </div>
    );
}

export default TodosContainer;