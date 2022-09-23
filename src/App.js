import React from 'react'

function App () {
    const [text, setText] = React.useState("")
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function countWords(str) {
        const arr = str.trim().split(' ')
        if(arr[0] === ""){
            console.log(0)
        } else {
            console.log(arr.length)
        }
        
    }

    console.log(text)

    return (
        <div className='game-container'>
            <h1>Speed Typing Game</h1>
            <textarea value={text} onChange={handleChange}/>
            <h4>Time Remaining: 0</h4>
            <button onClick={() => countWords(text)}>Start Game</button>
            <h1>Word Count: </h1>
        </div>
    )
}

export default App