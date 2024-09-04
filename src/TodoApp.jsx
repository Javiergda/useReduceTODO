import { useReducer } from "react"
import { todoReducer } from "./todoReducer";


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


    return (
        <>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>

    )
}
