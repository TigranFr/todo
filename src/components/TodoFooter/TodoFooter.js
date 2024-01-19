import React from 'react'
import './TodoFooter.css'
const TodoFooter = ({todos , clearCompleted}) => {
    const completedTodos = todos.filter(todo => {
        return todo.isCompleted === true;
    })
  return (
    <div className='footerDiv'>
      <span>{completedTodos.length}/{todos.length} Completed</span>
      <button
        className='footerButton'
        onClick={clearCompleted}
      >Clear completed</button>
    </div>
  )
}

export default TodoFooter
