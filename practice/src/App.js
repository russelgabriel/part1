import {useState} from 'react'

const App = (props) => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        <Display counter={counter} />
        <Button onClick={decreaseByOne} text="subtract" />
        <Button onClick={increaseByOne} text="add" />
        <Button onClick={setToZero} text="zero" />
      </div>  
      <div>
        {left}
        <Button onClick={handleLeftClick} text="left" />
        <Button onClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks} />
      </div>    
    </div>

  )
}

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick} >{text}</button>
  )
}

const History = ({allClicks}) => {
  if (allClicks.length === 0) {
    return (
      <div>
        This app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {allClicks.join(' ')}
    </div>
  )
}

export default App;
