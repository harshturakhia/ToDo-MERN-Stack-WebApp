import React from "react";
import "./App.css"
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos"
function App() {
  return (
    <>
      <Header />
      <TodoForm />
      <Todos />
    </>

  );
}

export default App;



//Redux :  
      // It is basically frontend database to perform operations faster
      // To have save dataat different location, rather use redux to save at one centralized database