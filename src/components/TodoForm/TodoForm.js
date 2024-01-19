import React, {useState} from 'react'
import './TodoForm.css'
const TodoForm = ({onAdd}) => {

    const[value , setValue] = useState("");

  return (
    <form
       
        onSubmit={(event)=>{
            event.preventDefault();
            if(value !== ""){
              onAdd(value);
              setValue("")
            }
        }}
    >
      <input 
        className="todoInput"
        type="text" 
        placeholder='New task :)'
        value={value}
        onChange={(event)=>{
            setValue(event.target.value)
        }}
      />
      <button
        className='addButton'
      >Add</button>
    </form>
  )
}

export default TodoForm
