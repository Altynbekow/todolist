
import React, { useState } from 'react';

const TodoClear = (props) => {
    const [cleared, setCleared] = useState(false);

    const handleClearAll = () => {
        if (props.clearAll) {
            props.clearAll();
            setCleared(true);
        }
    };

    return (
        <div className='text-center'>
            {cleared && <h3 className="text-success">Нечего нету</h3>}
            <div className='d-flex gap-3'>
                <button onClick={handleClearAll} className='w-50 btn btn-danger'>Clear all todo</button>
                <button className='w-50 btn btn-danger'>Clear done todo</button>
            </div>
        </div>
    );
}

export default TodoClear;
