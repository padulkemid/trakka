import React, { useState, useEffect } from 'react'
import { GET_ALL_EVENTS } from "../schema";
import { useQuery } from '@apollo/react-hooks';
import { CardList, Card } from '../components';

export default () => {
    const { loading, error, data } = useQuery(GET_ALL_EVENTS);
    return (
        <div className='container'>
        </div>
    )
}