import React from "react";
import Todoitems from "./Todoitems";

const List = ({ todos, onUpdate, onDelete }) => {
    return (
        <div className="List">
            <h4>Todo List 🌱</h4>
            <div className="todos_wrapper">
                {todos.map((todo) => (
                    <Todoitems
                        key={todo.id}
                        id={todo.id}
                        content={todo.content}
                        date={todo.date}
                        isDone={todo.isDone}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default List;
