import React from 'react'
import { render } from 'react-dom'
import Playground from './components/Playground'

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/


//we have tons of these
function App(props) {
  const { cohort, instructor, happy, age } = props;
  return (
    <div className='container'>
      <h1 id='mainHeading'>Welcome to React, Web {cohort}</h1>
      <div>{instructor} welcomes you to class.</div>
      
      {happy ? <div>Today is a good day!</div> : <div>It is Monday after all</div>}

      <h2>My brother is {age} years old today.</h2>
      <Playground cohort = {cohort}></Playground>
    </div>
  )
}

// usely happens only once per app
render(
  <App cohort='Web 32' instructor='Charlie' happy = {true} age = {34}/>, // argument number one is an element or a tree of elements
  document.querySelector('#root') //dom element you want to inject the elements into
)
