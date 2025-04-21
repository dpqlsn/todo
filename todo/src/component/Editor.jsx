import React from 'react';
import { useState } from "react";
import "../App.css";

const Editor = ({ onCreate }) => {
    const [content, setContent] = useState("");

    const onSubmit = () => {
        if (!content.trim()) return;

    onCreate(content);
    setContent("");
};

const onKeyDown = (e) => {
    if (e.key === "Enter") {
        onSubmit();
    }
};

return (
    <div className="Editor">
        <input
            placeholder="새로운 Todo..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>추가</button>
    </div>
    );
};

export default Editor;