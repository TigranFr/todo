import React from 'react'
import './TodoItem.css'
const TodoItem = ({todo , onCheckboxChange , deleteTodo}) => {
  return (
    <div className='todoItemDiv'>
      <label className="todoItem">
        <input type="checkbox" checked={todo.isCompleted} onChange={(event)=>{
            onCheckboxChange({
                ...todo,
                isCompleted:event.target.checked
            })
        }}/>
        <span>{todo.text}</span>
        <button
            className='deleteButton'
            onClick={()=>[
                deleteTodo(todo)
            ]}
        >X</button>
      </label>
    </div>
  )
}

export default TodoItem
