import React, { useState } from "react";
import "./App.css";
import Tasks from "./componentes/Tasks";

const App = () => {
    const [tasks, setTasks] = useState([

      {
      id: '1',
      title: 'Estudar',
      completed: false,
      },
      {
        id: '2',
        title: 'Ler Livro',
        completed: false,
      },
      {
        id: '3',
        title: 'Exercícios Práticos',
        completed: false,
      },



    ]); 
    

  return (
    <>
    <div className="container">
      
      <Tasks tasks={tasks}/>
    
    </div>
    </>
  ); 
  
};

export default App;
