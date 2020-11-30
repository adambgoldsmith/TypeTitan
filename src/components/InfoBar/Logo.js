import React from 'react'
import typetitanblack from './typetitanblack.png'
import typetitanwhite from './typetitanwhite.png'

function Logo(props) {

    let changeLogo
    if (props.pageTheme === props.lightTheme) {
        changeLogo = typetitanblack
    }
    else {
       changeLogo = typetitanwhite
    }

    return (
        <div>
            <img src={changeLogo} alt="Logo" style={{height: '104px', width: '320px'}}/>
        </div>
    )
}

export default Logo