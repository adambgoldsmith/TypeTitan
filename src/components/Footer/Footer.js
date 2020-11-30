import React from 'react'

import Container from 'react-bootstrap/Container'

function Footer() {

    return (
        <div className='fixed-bottom'>
            <Container style={{width: '750px', marginBottom: '35px'}}>
                <p style={{fontSize: '13px'}}>Constructed by Adam Goldsmith <br></br> View on <a style={{color: 'grey'}} href='www.google.com'>github</a></p>
            </Container>
        </div>
    )
}

export default Footer