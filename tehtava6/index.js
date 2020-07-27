import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  
  if (props.hyva + props.neut + props.huono === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  //tämän voi toteuttaa myös ilman StatisticLinea jakamalla taulukon rivit
  //useampaan soluun malliin <tr><td>good</td><td>{props.hyva}</td></tr>jne.
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td><StatisticLine text="good" value={props.hyva} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="neutral" value={props.neut} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="bad" value={props.huono} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="average" value={(props.hyva + props.huono * -1) / (props.hyva + props.neut + props.huono)} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="positive" value={props.hyva / (props.hyva + props.huono + props.neut) * 100} text2="%"/></td>
        </tr>
        </tbody>
      </table> 
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </p>
      <h1>statistics</h1>
      <Statistics hyva={good} neut={neutral} huono={bad}/>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value} {props.text2}
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
