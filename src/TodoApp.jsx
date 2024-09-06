import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";


const inialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; // si es nulo devolvemos arreglo vacio
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, inialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]) // Guardamos en local storage cada vez que hay un cambio en los todos


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        })
    }

    return (
        <>
            <h1>TodoApp: {todos.length}, <small>pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDeleteTodo={handleDeleteTodo}
                        handleToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd
                        handleNewTodo={handleNewTodo}
                    />
                </div>
            </div>
        </>
    )
}
