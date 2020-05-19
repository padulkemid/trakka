import React from 'react'
import { Card } from './'

export default ({ events, date }) => {
    return (
        <div className='card-list'>
            {events && events.map(el => {
                return <Card event={el} key={el.id} date={date} />
            })}
        </div>
    )
}