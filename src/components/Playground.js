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

import React, { useState } from 'react'

export default function Playground(props) {
  // useState allows you to set internal state. It is a function that takes that desired intital state and returns an array with two things: the state itself, and a state changer.
  // no declaring variables to hold STATE 

  const [count, setCount] = useState(0)
  const [spinnerOn, setSpinnerOn] = useState(false)
  const [choice, setChoice] = useState('...')

  if (spinnerOn) {
    return (
      <div className="container">
        Loading...
          <button onClick={event => {setSpinnerOn(false)}}>turn spinner off</button>
      </div>
    )
  }

  return (
  <div className="container">
    <h3>Playground for {props.cohort}</h3>
    <div>the count is {count}</div>
    <button onClick={event => { setCount(count + 3) }}>increase count</button>
    <div>The current button is { choice }</div>
    <button onClick={event => {setChoice('Scissors')}}>Scissors</button>
    <button onClick={event => {setChoice('Paper')}}>Paper</button>
    <button onClick={event => {setChoice('Rock')}}>Rock</button>
  </div>
  )
}

