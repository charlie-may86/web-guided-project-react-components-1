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

function App(props) {
  const {cohort, instructor, happy, week} = props
  return (
    <div className='container' id={cohort}>
      <h1>Welcome to React, Web {cohort}</h1>
      <h3>{instructor} welcomes you.</h3>
      {happy ? <div>Very Happy</div> : <div>Not so happy</div>}
      <div>It is week {week}</div>

      <Playground cohort={cohort} />
      <Playground cohort={65} />
      <Playground cohort={5} />
    </div>
  )
}

// we only tend once in application, normally
render(
  <App cohort='41' instructor="Tony Tiger" happy={true} week={2} />,
  document.querySelector('#root')
)
