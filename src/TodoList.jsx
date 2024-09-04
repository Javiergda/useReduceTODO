import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [] }) => {





    return (
        <ul className="list-group">
            {
                todos.map(todo => (
                    // todo item
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
        </ul>

    )
}
