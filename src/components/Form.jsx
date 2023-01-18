import React, { useRef } from "react";
import "./styles/Form.css";

function Form({inputContent, setInputContent, todoList, setTodoList, setStatus, setFilterItems}) {
    const inputContentHandler = (e) => {
        setInputContent(e.target.value);
    };
    const filterStatus = (e) => {
        setStatus(e.target.value);
    };

    const selectRef = useRef(null);
    
    const selectHandler = () =>{
        selectRef.current.value = "all";
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
        setStatus("all");
        selectHandler();
        setFilterItems(todoList);
        setTodoList([...todoList, {text: inputContent, complete: false, id: Math.random()*1000}]);
        setInputContent("");
    };
    
    return (
        <form>
            <input value={inputContent} onChange={inputContentHandler} type="text" className="todo-input"/>
            <button onClick={SubmitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select ref={selectRef} onChange={filterStatus} name="to-dos" className="filter-todos">
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    )
}

export default Form