import { useReducer } from "react"
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";


const inialState = [
    {
        id: new Date().getTime(),
        description: 'primera tarea',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'segunda tarea',
        done: false,
    },
];

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, inialState);

    console.log(todos);

    const handleNewTodo = (todo) => {
        console.log(todo);

        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch(action);
    }

    return (
        <>
            <h1>TodoApp (10), <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>

                <div className="col-5">
                    {/* todo add onNewTodo(todo)*/}
                    {/* {id:net Date(), description, done:fasle} */}
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd handleNewTodo={handleNewTodo} />

                    {/* fin todo add */}
                </div>
            </div>
        </>
    )
}
