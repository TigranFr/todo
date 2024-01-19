import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'
const TodoList = ({todos , onCheckboxChange , deleteTodo}) => {
  return (
    <div className="todoList">
        {todos.map(todo => {
            return <TodoItem 
                        key={todo.id} 
                        todo = {todo}
                        onCheckboxChange={onCheckboxChange}
                        deleteTodo={deleteTodo}
                   />
        })}
    </div>
  )
}

export default TodoList
