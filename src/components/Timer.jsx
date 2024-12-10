import { useEffect, useState } from 'react'

function Timer(props) {

  const [ timerValue, setTimerValue ] = useState(10)

  useEffect(() => {
    // console.log("componentDidMount")

    let intervalId = setInterval(() => {
      // console.log("ejecutando el intervalo")
      // en caso de intervalos en react tenemos que usar las funciones set de forma avanzada (ver abajo)
      setTimerValue((previousState) => {
        return previousState - 1
      })

    }, 1000)

    return () => {
      // accede al metodo componentWillUnmount
      // console.log("componentWillUnmount")
      clearInterval(intervalId)
    }

  }, []) // [] array vacio significa que se ejecutará como componentDidMount

  useEffect(() => {
    console.log("componentDidUpdate timerValue")
    if (timerValue === 0) {
      console.log("se terminó")
      props.setIsTimerShowing(false)
    }
  }, [timerValue]) // dependencias => que va a cambiar para que esto ocurra


  return (
    <div>
      
      <h3>Temporizador</h3>

      <h1>{timerValue}</h1>

    </div>
  )
}

export default Timer