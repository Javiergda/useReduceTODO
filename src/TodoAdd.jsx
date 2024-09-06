import React, { useState } from 'react'

export const TodoAdd = ({ handleNewTodo }) => {

    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }
        handleNewTodo(newTodo);
        setDescription('');
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregar
                </button>
            </form>
        </>

    )
}
