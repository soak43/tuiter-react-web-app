import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {

    const todos = useSelector(state => state.todos);
    
    const [todo, setTodo] = useState({do: ''});

    const dispatch = useDispatch();

    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
        setTodo({do: ''})
    }

    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }

    const toggleTodoDone = (index) => {
        dispatch(todoDoneToggle(index))
    }
       

    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }

    return(
    <div>
        <h3>Todos</h3>
        <ul className="list-group">
        <li className="list-group-item">
            <button onClick={createTodoClickHandler} className="btn btn-primary w-25 float-end">Create</button>
            <input onChange={todoChangeHandler} value={todo.do} className="form-control w-75"/>
        </li>
        {
            todos.map((todo, index) =>
            <li key = {todo._id} className="list-group-item">
                <button onClick={() => deleteTodoClickHandler(index)} className="btn btn-danger ms-2 float-end">Delete</button>
                <input type="checkbox" className ="me-2" checked={todo.done} onChange={() => toggleTodoDone(todo)}></input>
                {todo.do}
            </li>)
        }
        </ul>
    </div>
    );

};

export default Todos;