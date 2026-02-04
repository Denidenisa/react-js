import { useState } from 'react'
import { Exo6Task } from './Exo6Task'
import style from './Exo6.module.css'

export const Exo6 = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      what: 'clean the attic',
      description: '',
      priority: 'Normal',
      done: false
    },
    {
      id: 2,
      what: 'take the fish out for a walk',
      description: '',
      priority: 'Urgent',
      done: false
    }
  ])
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Normal')

  const addTask = (data) => {
    console.log(data)

    const newTask = {
      id: Date.now(),
      what: name,
      description: description,
      priority: priority,
      done: false
    }
    setTasks([...tasks, newTask])

   
  }

  const changeTaskStatus = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: true } : task))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className={style.affiche}>
      <h2 className={style.h2}>Add a new task:</h2>
      <div>
        <div className={style.nD}>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={style.nD}>
          <label>Description: </label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className={style.nD}>
          <label htmlFor="priority">Priority: </label>
          <select         
            value={priority}
            onChange={(e) => setPriority(e.target.value)} //* ici  le onChange et le e -> pour pouvoir séléctionner.
          >

            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value=" Emergency"> Emergency</option>
          </select>
        </div>



        <button className={style.btnAdd} onClick={addTask} >
          Add Task
        </button>
      
      </div>
    
      

      <h2 className={style.titleList}>Task list</h2>
      {tasks.map(task => (
        <Exo6Task
          key={task.id}
          task={task}
          onDoneTask={changeTaskStatus}
          onDeleteTask={deleteTask}
          
          
        />
      ))}
    </div>
  )
}


