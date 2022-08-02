// components / MyOutputLabel.jsx

function MyOutputLabel(props) { // accept "props" object as the first parameter
    // render
    return (
        <div>
            <p id="my-output">You've clicked the button {props.myValue} times.</p> {/* access items from props */}
        </div>
    )
}

export default MyOutputLabel;

// code initially had bug, needed to change from props.counter to props.myValue
