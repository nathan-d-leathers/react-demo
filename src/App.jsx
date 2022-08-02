import './App.css'
import { useState } from "react"
import MyCustomComponent from './components/MyCustomComponent'
import ButtonCounter from './components/ButtonCounter'

function App() {

  // const [counter, setCounter] = useState(0)

  // const incrementCounter = () => {
  //   setCounter(counter + 1)
  // }

  // const incrementCounter = () => {
  //   counter = counter + 1 // updating a state value directly == BAD!!!
  //   console.log(counter) // prints out the correct updated value, but our rendered output never updates!
  // }

  return (
    <div className="App">
      {/* <MyCustomComponent />
      <br></br>
      <h2 id="my-header">My Button Click Counter App</h2>
      <br></br>
      <ButtonCounter />
      <hr></hr>
      {/* you can the same componenet multiple times */}
      {/* <ButtonCounter /> */}

      <ButtonCounter />


    </div>
  );
}

export default App;



// orginal button logic before Button component added
/* <h2 id="my-header">My Button Click Counter App</h2>
<button id="my-button" onClick={incrementCounter}>Click Me To Increment Count</button>
<p id="my-output">You've clicked the button {counter} times.</p> */