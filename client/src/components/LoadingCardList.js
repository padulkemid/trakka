import React from 'react'
import { LoadingCard } from './'

export default () => {
    return (
        <div className='card-list'>
            <LoadingCard opacity={1} />
            <LoadingCard opacity={.8} />
            <LoadingCard opacity={.4} />
            <LoadingCard opacity={.2} />
        </div>
    )
}