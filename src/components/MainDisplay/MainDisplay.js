import React, {useState, useEffect} from 'react'
import WordDisplay from './WordDisplay'
import InputDisplay from './InputDisplay'
import textLibrary from './TextLibrary'

// Use context for passing props?

function MainDisplay(props) {

    const [text, setText] = useState('')
    const [userInput, setUserInput] = useState('')
    const [started, setStarted] = useState(false)
    const [finished, setFinished] = useState(false)
    const [characters, setCharacters] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        // New test button can provide previous test
        const randomText = textLibrary[Math.floor(Math.random() * textLibrary.length)]
        setText(randomText)
    }, [])

    return (
        <div style={{marginTop: '100px'}}>
            <WordDisplay 
                text={text} 
                setText={setText}
                userInput={userInput}
                pageTheme={props.pageTheme}
                setPageTheme={props.setPageTheme}
                lightTheme={props.lightTheme}
                darkTheme={props.darkTheme}
            />
            <InputDisplay
                userInput={userInput} 
                text={text}
                setUserInput={setUserInput}
                setText={setText}
                started={started}
                setStarted={setStarted}
                finished={finished}
                setFinished={setFinished}
                characters={characters}
                setCharacters={setCharacters}
                seconds={seconds}
                setSeconds={setSeconds}
            />
        </div>
    )
}

export default MainDisplay