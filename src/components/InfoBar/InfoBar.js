import React from 'react'
import Logo from './Logo'
import Settings from './Settings'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function InfoBar(props) {

    return (
        <Container className='pt-4'>
            <Row>
                <Col>
                    <Logo
                        pageTheme={props.pageTheme}
                        setPageTheme={props.setPageTheme}
                        lightTheme={props.lightTheme}
                        darkTheme={props.darkTheme}
                    />
                </Col>

                <Col>
                    <Settings
                        pageTheme={props.pageTheme}
                        setPageTheme={props.setPageTheme}
                        lightTheme={props.lightTheme}
                        darkTheme={props.darkTheme}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default InfoBar