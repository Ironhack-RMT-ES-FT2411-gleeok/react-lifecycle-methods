
import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {

  const [ isTimerShowing, setIsTimerShowing ] = useState(false)

  const handleToggleTimer = () => {
    setIsTimerShowing(!isTimerShowing)
  }

  return (
    <>
      <h1>Aprendiendo ciclos de vida</h1>

      <button onClick={handleToggleTimer}>{isTimerShowing ? "Ocultar" : "Iniciar"} Timer</button>

      {isTimerShowing && <Timer setIsTimerShowing={setIsTimerShowing}/>}

    </>
  )
}

export default App
