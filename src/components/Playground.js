/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - An slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/
import React, {useState} from 'react'

export default function Playground(props) {

  const [count, setCount] = useState(0) // good practice to use the word "set"
  const [spinnerOn, setSpinnerOn] = useState(true)
  const [choice, setChoice] = useState('scissors')
  // const theArray = useState(0)
  // const count = theArray[0]
  // const setCount = theArray[1]
  
  const {cohort} = props

  if(spinnerOn) {
    return (
      <div className="container">
        loading...
        <button onClick={() => setSpinnerOn(false)}>
          turn off loading spinner
        </button>
      </div>
    )
  }

  return (
    <div className="container">
     <h2>Playground for web {cohort}</h2>
     <h3>{count}</h3>
     <button onClick={() => setCount(count + 1)}>increase</button>

     <h3>the current weapon is {choice}</h3>
     <button onClick={() => setChoice('scissors')}>pick scissors</button>
     <button onClick={() => setChoice('rock')}>pick rock</button>
     <button onClick={() => setChoice('paper')}>pick paper</button>
    </div>
  )
}