import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0)
  //const points = [3, 3, 4, 3, 5, 1]
  //const points = new Array(6).fill(0)
  //const copy = [...points]
  //var ary = Array(6).fill(0)

  const handleVote = (event) => {
    event.preventDefault()
    console.log('Annettu ääni anekdootille', event.target.value)
    props.anecdotes[selected].votes +=1
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected].text}<br />
      has {props.anecdotes[selected].votes} votes<br />
      <p>
        <button onClick={handleVote} value={selected}>vote</button>
        <Button handleClick={() => setSelected(getRandomInt(6))} text="next anecdote" />
      </p>
      <h1>Anecdote with most votes</h1>
      <Paras anecdotes={props.anecdotes} />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const anecdotes = [
  {
    text: 'If it hurts, do it more often',
    votes: 0
  },
  {
    text: 'Adding manpower to a late software project makes it later!',
    votes: 0
  },
  {
    text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0
  },
  {
    text: 'Any fool can write code that a computer understand. Good programmers write code that humans can understand.',
    votes: 0
  },
  {
    text: 'Premature optimization is the root of all evil.',
    votes: 0
  },
  {
    text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0
  }
]

const Paras = (props) => {
  let indeksi = 0
  let pisteet = 0
  for (let i = 0; i < 6; i++) {
    if (props.anecdotes[i].votes > pisteet) {
      pisteet = props.anecdotes[i].votes
      indeksi = i
    }
  }
  return (
    <div>
      {props.anecdotes[indeksi].text}<br />
      has {pisteet} votes<br />
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)