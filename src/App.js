import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import TodoFooter from './components/TodoFooter/TodoFooter';

function App() {

  const [todos , setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {
        id:Math.random(),
        text:text,
        isCompleted:false
      }
    ])
  }

  const deleteTodo = (todo) => {
    setTodos(todos.filter(todoItem => {
      return todoItem.id !== todo.id;
    }))
  }

  const onCheckboxChange = (newTodo) => {
    setTodos(todos.map(todo => {
      if(todo.id === newTodo.id ){
        return newTodo;
      }else{
        return todo;
      }
    }))
  }

  const deleteCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.isCompleted))
  }

  return (
    <div className="App">
      <div className='componentWrapper'>
        <TodoForm onAdd={addTodo}/>
        <TodoList todos = {todos} onCheckboxChange={onCheckboxChange} deleteTodo={deleteTodo}/>
        <TodoFooter todos = {todos} clearCompleted={deleteCompletedTodos}/>
      </div>
      
    </div>
  );
}

export default App;
