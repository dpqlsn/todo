import React, { useState } from 'react';
import './App.css';

const Editor = () => {
    const [todo, setTodo] = useState('');

    const handleAddTodo = () => {
        console.log(todo);
    };
    
    return (
        <div className="Editor">
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder="새로운 Todo..."
            />
        <button onClick={handleAddTodo}>추가</button>
    </div>
    );};

export default Editor;
