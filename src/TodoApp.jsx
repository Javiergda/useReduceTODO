import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";


const inialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'primera tarea',
    //     done: false,
    // },

];

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

    return (
        <>
            <h1>TodoApp (10), <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDeleteTodo={handleDeleteTodo}
                    />
                </div>

                <div className="col-5">
                    {/* todo add onNewTodo(todo)*/}
                    {/* {id:net Date(), description, done:fasle} */}
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd
                        handleNewTodo={handleNewTodo}
                    />

                    {/* fin todo add */}
                </div>
            </div>
        </>
    )
}
