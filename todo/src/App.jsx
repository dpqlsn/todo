import React from 'react'
import '../src/App.css'
import Header from './component/Header.jsx'
import Editor from './component/Editor.jsx'
import List from './component/List.jsx'
import Todoitems from './component/Todoitems.jsx'

function App(){
  return (
  <>
    <Header />
    <Editor />
    <List />
    <Todoitems />
  </>
  )
}

export default App