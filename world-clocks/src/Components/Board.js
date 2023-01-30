import React, { useEffect, useState } from 'react'
import Clock from './Clock'

const timeZones = [
    {location: 'Stockholm', timeZone: 'Europe/Stockholm'},
    {location: 'London', timeZone: 'Europe/London'},
    {location: 'Paris', timeZone: 'Europe/Paris'},
    {location: 'Moscow', timeZone: 'Europe/Moscow'},
    {location: 'Tokyo', timeZone: 'Asia/Tokyo'},
    {location: 'New York', timeZone: 'America/New_York'},
    {location: 'Los Angeles', timeZone: 'America/Los_Angeles'},
    {location: 'Sao Paulo', timeZone: 'America/Sao_Paulo'},
    {location: 'Damascus', timeZone: 'Asia/Damascus'},
]

const Board = () => {
    const [date, setDate] = useState(new Date())

    useEffect(()=> {
        setInterval(()=> setDate(new Date()), 1000)
    }, [])

  return (
    timeZones.map((t, i) => (
    <div
    className='board'
    key={`timeZone-${i}`}>
        <Clock timeZone={t} date={date}></Clock>
    </div>
  )))
}

export default Board