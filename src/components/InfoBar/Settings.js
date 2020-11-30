import React from 'react'

import Button from 'react-bootstrap/Button'

function Settings(props) {

    const changeTheme = () => {
        if (props.pageTheme === props.lightTheme) {
            props.setPageTheme(props.darkTheme)
        }
        else {
            props.setPageTheme(props.lightTheme)
        }

    }

    return (
        <div className='text-right' style={{marginTop: '60px'}}>
            <Button className='btn btn-dark' onClick={changeTheme}>Theme</Button>
        </div>
    )
}

export default Settings