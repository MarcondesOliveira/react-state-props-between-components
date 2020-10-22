import React, { useState } from 'react'
import './App.css'

function MyButton (props) {
    return (
        <button onClick={() => props.handleClick(props.label)}>
            {props.label}
        </button>
    )
}

function MyLabel (props) {
    return (
        <p>Cliquei no: {props.text}</p>
    )
}
    
function App2() {
    const [labelText, setLabelText] = useState('')

    return (
        <div className="App">
            <MyLabel text={labelText} />
            <MyButton handleClick={setLabelText} label='Botão 1' />
            <MyButton handleClick={setLabelText} label='Botão 2' />
            <MyButton handleClick={setLabelText} label='Botão 3' />
            <MyButton handleClick={setLabelText} label='Botão 4' />
        </div>
    )
}

export default App2