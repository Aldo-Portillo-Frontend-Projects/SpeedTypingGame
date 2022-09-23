import React from 'react'

function App () {
    const [text, setText] = React.useState("")
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    console.log(text)

    return (
        <div className='game-container'>
            <h1>Speed Typing Game</h1>
            <textarea value={text} onChange={handleChange}/>
            <h4>Time Remaining: 0</h4>
            <button>Start Game</button>
            <h1>Word Count: </h1>
        </div>
    )
}

export default App