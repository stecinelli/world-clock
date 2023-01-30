import React from 'react'


const Clock = ({date, timeZone: {timeZone, location}}) => {
    return (
        <div className='clock'>
            <h1>{date.toLocaleTimeString('en-GB', {timeZone: timeZone})}</h1>
            <p>{location}</p>
        </div>
    )
}


export default Clock