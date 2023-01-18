import React from 'react';
import TodoElement from './TodoElement';
import './styles/TodoList.css'

function TodoList({todoList, setTodoList, filterItems}) {
  return (
    <div className='todo-box'>
        <ul className='todo-list'>
            {filterItems.map((todo) =>(
                <TodoElement 
                setTodoList={setTodoList} 
                todoList={todoList} 
                key={todo.id} 
                todo={todo}
                text={todo.text} 
                />
            ))}
        </ul>
    </div>
  )
}

export default TodoList