import React, { useState } from "react";
import Todoitems from "./Todoitems";

const List = ({ todos, onUpdate, onDelete }) => {
    const [search, setSearch] = useState("");

    const filteredTodos = todos.filter((todo) =>
        todo.content.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="List">
        <h4>Todo List 🌱</h4>

        <input
            placeholder="검색어를 입력하세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: "1rem", padding: "0.5rem", width: "200px" }}
        />
        
        <div className="todos_wrapper">
            {filteredTodos.map((todo) => (
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
