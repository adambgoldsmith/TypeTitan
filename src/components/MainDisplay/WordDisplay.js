import React from 'react'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

function WordDisplay(props) {
    
    const text = props.text.split('')

    let updateTheme
    if (props.pageTheme === props.darkTheme) {
        updateTheme = 'dark'
    }
    else {
        updateTheme ='light'
    }

    return (
        <div style={{fontSize: '19px'}}>
            <Container>
                <Card className='my-5' bg={updateTheme}>
                    <Card.Body>
                        <Card.Text>

                            {
                            text.map((letter, id) => {
                                let backgroundColor;
                                if (id < props.userInput.length) {
                                    if (props.pageTheme === props.lightTheme)
                                    {
                                        backgroundColor = letter === props.userInput[id] ? '#ade63c' : '#e3855d'
                                    }
                                    else {
                                        backgroundColor = letter === props.userInput[id] ? '#85c700' : '#e3855d'
                                    }
        
                                }
                                return <span key={id} style={{backgroundColor:backgroundColor}}>{letter}</span>
                            })
                            }

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default WordDisplay