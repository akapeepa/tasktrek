import React from 'react'

import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'

const App = () => {
  return (
    <div className='app'>
      <TaskForm/>
      <header className='app_header'>Header Section</header>
      <main className='app_main'>
        <TaskColumn title="To do" icon={todoIcon}/>
        <TaskColumn title="Doing" icon={doingIcon}/>
        <TaskColumn title="Done" icon={doneIcon}/>
      </main>
    </div>
  )
}

export default App