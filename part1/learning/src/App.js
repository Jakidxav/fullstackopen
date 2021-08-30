import React from 'react'

const Header = (props) => {
  return (    
    <div>      
      <h1> {props.propName} </h1>    
    </div>  
  )
}

const Content = (props) => {
  const [part1, part2, part3] = props.propParts
  return (
    <div>
      <h2> {part1.name} </h2>
      <h3> Number of exercises: {part1.exercises} </h3>
      <br />

      <h2> {part2.name} </h2>
      <h3> Number of exercises: {part2.exercises} </h3>
      <br />

      <h2> {part3.name} </h2>
      <h3> Number of exercises: {part3.exercises} </h3>
      <br />
    </div>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        }, 
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  console.log("Working....")
  return (
    <>
      <Header propName={course.name} />
      <Content propParts={course.parts} />
    </>
  )
}

export default App