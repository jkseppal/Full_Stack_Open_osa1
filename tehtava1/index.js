import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
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

  return (
    <div>
      <Header kurssi={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part osa={props.parts[0].name} teht={props.parts[0].exercises} />
      <Part osa={props.parts[1].name} teht={props.parts[1].exercises} />
      <Part osa={props.parts[2].name} teht={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.osa} {props.teht}
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
