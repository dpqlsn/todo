import React, { useRef, useState } from 'react';
import './App.css';
import Header from './component/Header';
import Editor from './component/Editor';
import List from './component/List';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'React 공부하기',
      date: new Date().toLocaleDateString(),
      isDone: false,
    },
    {
      id: 2,
      content: 'Next.js 공부하기',
      date: new Date().toLocaleDateString(),
      isDone: false,
    },
    {
      id: 3,
      content: 'Node.js 공부하기',
      date: new Date().toLocaleDateString(),
      isDone: false,
    },
  ]);

  const idRef = useRef(4); 

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      content,
      date: new Date().toLocaleDateString(),
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const onUpdate = (targetId) => {
    setTodos((prevTodos) =>
      prevTodos
        .map((todo) =>
          todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
        )
    );
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </>
  );
}

export default App;
