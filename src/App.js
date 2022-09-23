import React from 'react'

function App () {
    const [text, setText] = React.useState("")
    const [timeRemaining, setTimeRemaining] = React.useState(10)
    const [isTimeRunning, setisTimeRunning] = React.useState(false)
    
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

        React.useEffect(()=> {
            if( isTimeRunning && timeRemaining > 0){
                setTimeout(() => {
                    setTimeRemaining(prevTime => prevTime - 1)
                }, "1000")
            } else {
                setisTimeRunning(false)
            }
        }, [timeRemaining, isTimeRunning])

        console.log(isTimeRunning)

    console.log(text)

    return (
        <div className='game-container'>
            <h1>Speed Typing Game</h1>
            <textarea value={text} onChange={handleChange}/>
            <h4>Time Remaining: {timeRemaining}</h4>
            <button onClick={() => setisTimeRunning(true)} >Start Game</button>
            <h1>Word Count: </h1>
        </div>
    )
}

export default App