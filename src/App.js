import { useState } from 'react'
import './App.css';
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    { 
      id: 1,
      text: 'Task 1',
      day: 'Feb 10',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting',
      day: 'May 28',
      reminder: false
    }
  ])

  // Add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1 
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==  id))
  }

  // Toggle reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ... task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header className="header" onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : 'No tasks'  
      }
    </div>
  );
}

export default App;
