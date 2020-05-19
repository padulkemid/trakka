import React, { useState, useEffect } from 'react';
import { GET_ALL_EVENTS } from '../schema';
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

  return (
    <div className="container">
      <h1>{curDate}</h1>
      {data ? <CardList events={data.getEvents} /> : <h2>No events yet.</h2>}
    </div>
  );
};

