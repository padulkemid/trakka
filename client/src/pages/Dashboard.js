import React, { useState, useEffect } from 'react'
import { GET_ALL_EVENTS } from "../schema";
import { useQuery } from '@apollo/react-hooks';
import { CardList } from '../components';

export default () => {
    const { loading, error, data } = useQuery(GET_ALL_EVENTS);
    const [curDate, setCurDate] = useState('');

    useEffect(() => {
        const date = new Date();
        let dateArray = date.toString().split(' ');
        dateArray[0] = `${dateArray[0]},`;
        setCurDate(dateArray.slice(0, 3).join(' '));
    }, []);

    const testData = [
        {
            id: 0,
            title: 'Test',
            description: 'Hello',
            timestamp: (new Date()).toISOString()
        },
        {
            id: 0,
            title: 'Test',
            description: 'Hello',
            timestamp: (new Date()).toISOString()
        },
        {
            id: 0,
            title: 'Test',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            timestamp: (new Date()).toISOString()
        }
    ]

    return (
        <div className='container'>
            <h1>{curDate}</h1>
            <CardList events={testData} />
        </div>
    )
}