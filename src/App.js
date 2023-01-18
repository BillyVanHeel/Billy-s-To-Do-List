import './App.css';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [inputContent, setInputContent] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterItems, setFilterItems] = useState([]);

useEffect(() => {
  getLocalTodos();
}, []);

useEffect(() => {

    filterHandler();
    saveLocalTodos(); 

}, [todoList, status]);

const filterHandler = () => {
  switch(status){
    case 'complete':
      setFilterItems(todoList.filter(todo => todo.complete === true));
      break;
    case 'incomplete':
      setFilterItems(todoList.filter(todo => todo.complete === false));
      break;
    default:
      setFilterItems(todoList);
      break;
  }
};

const saveLocalTodos = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
};

const getLocalTodos = () => {
  if(localStorage.getItem('todoList') === null){
    localStorage.setItem('todoList', JSON.stringify([]));
  }else{
    let todoLocal = JSON.parse(localStorage.getItem('todoList'));
    console.log(todoLocal);
    setTodoList(todoLocal);
  }
};

  return (
    <div className="App">
    <header>
      <h1>Billy's To-Do List:</h1>
    </header>
    <Form 
    inputContent={inputContent} 
    todoList={todoList} 
    setTodoList={setTodoList} 
    setInputContent={setInputContent} 
    setStatus={setStatus}
    setFilterItems={setFilterItems}
    />
    <TodoList 
    todoList={todoList} 
    setTodoList={setTodoList}
    filterItems={filterItems}
    />
    </div>
  );
}

export default App;
