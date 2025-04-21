import React, { useState, useRef } from 'react';
import "../App.css";

const Editor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const inputRef = useRef(null);

    const onSubmit = () => {
        if (!content.trim()) {
            inputRef.current.focus(); 
            return;
        }
        onCreate(content);
        setContent("");
        inputRef.current.focus();
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    };

    return (
        <div className="Editor">
            <input
                ref={inputRef}
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
