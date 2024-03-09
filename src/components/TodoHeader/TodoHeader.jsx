import {useRef} from 'react';

const TodoHeader = (props) => {
    const {addNewTask}= props
    const inputRef = useRef()
    return (
        <div className={'card p-3'}>
            <h2 className={'text-center'}>Todo Input</h2>
            <div className={''}>
                <input ref={inputRef} className={'form-control mb-3'} type="text" placeholder="New  Todo" />
                <button onClick={()=>{
                    if (inputRef.current.value.trim() === "")return
                    addNewTask(inputRef.current.value)
                    inputRef.current.value = ''.trim();
                }} className={'btn btn-info w-100'}>Add New Task</button>
            </div>
        </div>
    );
};

export default TodoHeader;