import React from 'react'
import { Card } from './'

export default ({ events }) => {
    return (
        <div className='card-list'>
            {events && events.map(el => {
                return <Card event={el} key={el.id} />
            })}
        </div>
    )
}