import React, { useState } from 'react';
import './App.css';
import ListItems from './components/listItems';
import NewTask from './components/newTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (task)=> {
    const itensCopy = Array.from(tasks);
    itensCopy.push({ id: tasks.length, value: task });
    setTasks(itensCopy);
  };

  const updateTask = ({target}, index) => {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setTasks(itensCopy);
  };

  const deleteTask = (index) => {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
  }
  
  return (
    <div className="App">
      <div className="App-header">
        <NewTask onSubmit={addNewTask} />
          {tasks.map(({id, value}, index)=>(
            <ListItems
              key={id}
              value={value}
              onDelete={()=> deleteTask(index)}
              onChange={(event)=> updateTask(event, index)}
              />
          ))}
      </div>
      <div className="Array-preview">
            <pre>{JSON.stringify(tasks, null, 4)}</pre>
      </div>
    </div>
  );
}

export default App;
