import React from 'react'
import WPM from './WPM'
import textLibrary from './TextLibrary'
import Button from 'react-bootstrap/Button'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let interval = 0

function InputDisplay(props) {

    const onUserInput = (event) => {
        const eventValue = event.target.value
        props.setUserInput(eventValue)
        setTimer(props.seconds)
        onFinish(eventValue)
        props.setCharacters(checkCharacters(eventValue))
    }

    const setTimer = (seconds) => {
        if (!props.started) {
            props.setStarted(true)
                interval = setInterval(() => {
                props.setSeconds(seconds => seconds + 1)
            }, 1000)
        }
    }

    const onFinish = (userInput) => {
        if (userInput === props.text) {
            props.setFinished(true)
            clearInterval(interval)
        }
    }

    const checkCharacters = (eventValue) => {
        const connector = props.text.replace(' ', '')
        return eventValue.replace(' ', '').split('').filter((letter , id) => letter === connector[id]).length
    }

    const newTest = () => {
        let randomText = textLibrary[Math.floor(Math.random() * textLibrary.length)]
        if (randomText === props.text) {
            while (randomText === props.text) {
                randomText = textLibrary[Math.floor(Math.random() * textLibrary.length)]
            }
        }
        props.setText(randomText)
        clearInterval(interval)
        props.setUserInput('')
        props.setStarted(false)
        props.setFinished(false)
        props.setCharacters(0)
        props.setSeconds(0)
    }

    const repeatTest = () => {
        clearInterval(interval)
        props.setText(props.text) //Remove?
        props.setUserInput('')
        props.setStarted(false)
        props.setFinished(false)
        props.setCharacters(0)
        props.setSeconds(0)
    }

    return (
        <div>
            <Container>
                <Row className='mx-2'>
                    <Col>
                        <div className=''>
                            <input
                                className='form-control'
                                type='text'
                                value={props.userInput}
                                onChange={onUserInput}
                                placeholder='Type here...'
                                readOnly={props.finished}
                            />
                        </div>
                    </Col>

                    <Col>
                        <WPM
                            seconds={props.seconds}
                            characters={props.characters} 
                        />
                    </Col>

                    <Col>
                        <div>
                            <Button className='btn btn-dark' onClick={newTest}>New Test</Button>
                            <br/>
                            <br/>
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <Button className='btn btn-dark' onClick={repeatTest}>Repeat Test</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default InputDisplay