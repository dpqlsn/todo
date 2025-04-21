import React from 'react';
import '../App.css';

const Todoitems = ({ content, date, isDone }) => {
    return (
    <div className="TodoItem">
        <input type="checkbox" defaultChecked={isDone} />
        <div className="content">{content}</div>
        <div className="date">{date}</div>
        <button>삭제</button>
        </div>
    );
};

export default Todoitems;
