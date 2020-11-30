import React from 'react'


function WPM(props) {
    
    // WPM moves slightly when # changes

    if (props.characters > 0 && props.seconds > 0) {
        const grossWPM = (props.characters / 5) / (props.seconds / 60)
        return (
            <div className='mt-1'>
                <h5 className='text-center'>{Math.round(grossWPM)} WPM</h5>
            </div>
        )
    }
    else {
        return (
            <div className='mt-1'>
                <h5 className='text-center'>0 WPM</h5>
            </div>
        )
     }

}

export default WPM