import React from 'react';
import './styles/TodoElement.css';


const TodoElement = ({text, todo, todoList, setTodoList}) => {
    const deleteHandler = () => {
        setTodoList(todoList.filter((element) => element.id !== todo.id));
    };
    const completeHandler = () => {
      setTodoList(todoList.map(item => {
        if(item.id === todo.id){
          return{
            ...item, complete: !item.complete
          };
        }
        return item;
      })
      );
    };
  return (
    <div className='todo'>
        <li className={`todo-li ${todo.complete ? "complete" : ""}`}>{text}</li>
        <button onClick={completeHandler} className='check'>
        <i className='fas fa-check'></i>
        </button>
        <button onClick={deleteHandler} className='trash'>
        <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

export default TodoElement