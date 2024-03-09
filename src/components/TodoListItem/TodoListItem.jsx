import React from 'react';

const TodoListItem = (props) => {
    const { deleteTodo, id, doneTask, text,isDone} = props
    const xStyle ={
        textDecoration:isDone ? 'line-through' : 'none',
        color:isDone ? "red" : ""
    }
    // properties-свойство данные
    return (
        <li className={'d-flex justify-content-between item'}>
            <span style={xStyle}>
                {text}
            </span>
            <span className={'d-flex  align-items-center  gap-3'}>
                <input
                    checked={isDone}
                    onChange={(e)=>{
                    console.dir(e.target.checked)
                    doneTask(id)
                }}   className={'form-check-input is-valid'} type="checkbox" />
                <button className={'btn btn-warning'}>
                    <i className="bi bi-pencil"></i>
                </button>
                <button className={'btn btn-danger'} onClick={( )=>{
                    deleteTodo(id)

                }}>
                    <i className="bi bi-trash3"></i>
                </button>
            </span>
        </li>
    );
};


export default TodoListItem;