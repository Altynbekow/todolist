import React from 'react';

const TodoList = () => {
    return (
        <div className={'mt-5'}>
            <h2 className={'text-center'}>TodoList</h2>
            <div className={'d-flex gap-4 justify-content-between'}>
                {['All', 'Done', 'Todo'].map(btn=>{
                    return <button key={btn} className={'btn btn-info w-25 '}>
                        {btn}
                    </button>
                })}
            </div>
        </div>
    );
};

export default TodoList;