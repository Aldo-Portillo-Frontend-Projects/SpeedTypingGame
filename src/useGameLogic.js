import {useState, useRef, useEffect} from "react";

function useGameLogic () {
    const startTime = 5;

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startTime)
    const [isTimeRunning, setisTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)
    
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
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }
    function endGame() {
        setisTimeRunning(false)
        setWordCount(countWords(text))
    }

       useEffect(()=> {
            if( isTimeRunning && timeRemaining > 0){
                setTimeout(() => {
                    setTimeRemaining(prevTime => prevTime - 1)
                }, "1000")
            } else {
                endGame()
            }
        }, [timeRemaining, isTimeRunning])
    
    return { textBoxRef, text, handleChange, isTimeRunning, timeRemaining, wordCount, startGame}
}

export default useGameLogic