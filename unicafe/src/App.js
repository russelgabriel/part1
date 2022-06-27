import {useState} from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = ({good, neutral, bad}) => {
  const all = (good + neutral + bad)
  const avg = ((good - bad) / all).toFixed(1)
  const pos = ((good / all) * 100).toFixed(1)

  if (all === 0) {
    return (
      <div>
        <h1>statistcs</h1>
        <p>No feedback given yet</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="average" value={avg} />
        <StatisticsLine text="positive" value={pos + "%"} />         
      </table>
    
    </div>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default App