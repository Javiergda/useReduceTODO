import React from 'react'

export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'ABC':

            throw new error('Actyon.type no esta implementada');

        default:
            return initialState;
    }


}
