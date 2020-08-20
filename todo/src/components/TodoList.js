import React from 'react'; 
import { Todo } from './Todo'; 

export const TodoList = (props) => {
  
    const {todos} = props.state; 
    
    return (
        <div className="todo-list">
            {
                todos.map(todo => {
                    return <Todo todo={todo} key={todo.id} dispatch={props.dispatch} /> 
                })
            }
        </div>
    )
}
