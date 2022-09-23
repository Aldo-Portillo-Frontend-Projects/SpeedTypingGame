import React from 'react'

function App () {

    const startTime = 5;

    const [text, setText] = React.useState("")
    const [timeRemaining, setTimeRemaining] = React.useState(startTime)
    const [isTimeRunning, setisTimeRunning] = React.useState(false)
    const [wordCount, setWordCount] = React.useState(0)
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }

    function countWords(str) {
        const arr = str.trim().split(' ')
        if(arr[0] === ""){
            return 0
        } else {
            return arr.length
        }
        
    }
    function startGame() {
        setTimeRemaining(startTime)
        setisTimeRunning(true)
        setWordCount(0)
        setText("")
    }
    function endGame() {
        setisTimeRunning(false)
        setWordCount(countWords(text))
    }

        React.useEffect(()=> {
            if( isTimeRunning && timeRemaining > 0){
                setTimeout(() => {
                    setTimeRemaining(prevTime => prevTime - 1)
                }, "1000")
            } else {
                endGame()
            }
        }, [timeRemaining, isTimeRunning])
    
    

        console.log(isTimeRunning)

    console.log(text)

    return (
        <div className='game-container'>
            <h1>Speed Typing Game</h1>
            <textarea value={text} onChange={handleChange}/>
            <h4>Time Remaining: {timeRemaining}</h4>
            <button onClick={startGame} >Start Game</button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    )
}

export default App