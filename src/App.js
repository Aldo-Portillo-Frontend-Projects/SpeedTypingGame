import React from 'react'
import useGameLogic from './useGameLogic'

function App () {

    const { textBoxRef, text, handleChange, isTimeRunning, timeRemaining, wordCount, startGame} = useGameLogic();
    return (
        <div className='game-container'>
            <h1>Speed Typing Game</h1>
            <textarea ref={textBoxRef} value={text} onChange={handleChange} disabled={!isTimeRunning} />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button onClick={startGame} disabled={isTimeRunning}>Start Game</button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    )
}

export default App