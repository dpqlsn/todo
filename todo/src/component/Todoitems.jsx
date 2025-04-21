import React from "react";

const Todoitems = ({ id, content, date, isDone, onUpdate, onDelete }) => {
    return (
        <div className="Todoitem">
        <input type="checkbox" onChange={() => onUpdate(id)} />
        <span>{content}</span>
        <span style={{ marginLeft: "10px", fontSize: "0.9em", color: "#888" }}>
            {date}
        </span>
        <button onClick={() => onDelete(id)}>삭제</button>
        </div>
    );
};

export default Todoitems;
