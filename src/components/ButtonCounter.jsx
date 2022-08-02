// // Component Set Up

// // 1: Imports
// import { useState } from "react"


// // 2: Function Call
// function ButtonCounter() {

//     // 3: Hooks

//     const [counter, setCounter] = useState(0)

//     // 4: Hook Function Logic
//     const incrementCounter = () => {
//         setCounter(counter + 1)
//     }

//     // 5: Return Statement (html elements wrapped in div)
//     return (
//         <div>
//             <b><p>This is the start of the logic from the ButtonCounter component file</p></b>
//             <button id="my-button" onClick={incrementCounter}>Click Me To Increment Count</button>
//             <p id="my-output">You've clicked the button {counter} times.</p>
//             <br></br>
//             <b><p>This is the end of the logic from the ButtonCounter component file</p></b>
//         </div>
//     )
// }


// // 6: export function statement
// export default ButtonCounter


// ButtonCounter.jsx

// THIS IS A PARENT COMPONENT OF MyButton & MyOutoutLabel

// react
import { useState } from "react"

// components
import MyButton from "./MyButton.jsx"
import MyOutputLabel from "./MyOutputLabel.jsx"

function ButtonCounter() {
    // states
    const [counter, setCounter] = useState(0)

    // event handlers
    const incrementCounter = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    // render
    return (
        <div>
            <MyButton handleClick={incrementCounter} /> {/* new component, taking in a prop value of handleClick */}
            <MyOutputLabel myValue={counter} /> {/* new component, taking in a prop value of myValue */}
        </div>
    )
}

export default ButtonCounter;