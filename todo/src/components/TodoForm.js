import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'; 


export const TodoForm = (props) => {
    const [formValues, setFormValues ] = useState(''); 
    
    const handleChange = e => {
        e.persist(); 
        setFormValues(e.target.value);
      
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const theNewTodo = {
            task: formValues, 
            completed: false, 
            id: uuid()
        }
        props.dispatch({ type: 'ADD_TODO', payload: theNewTodo })
    }

    const handleRemove = (e) => {
        e.preventDefault(); 
        props.dispatch({ type: 'REMOVE_TODO'})
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newTodo">Add Your Todo's Here: </label>
                <input
                onChange={handleChange} 
                name="newTodo"
                type="text"
                />
                <button type="submit">Submit</button>
                <button onClick={handleRemove}>Remove</button>
            </form>
        </div>
    )
}







