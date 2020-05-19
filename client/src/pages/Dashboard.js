import React, { useState, useEffect } from 'react';
import { GET_ALL_EVENTS } from '../schema';
import { useQuery } from '@apollo/react-hooks';
import { CardList, LoadingCardList } from '../components';
import {
  useHistory
} from "react-router-dom";

export default () => {
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_ALL_EVENTS);
  const [dateStr, setDateStr] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const date = new Date();
    let dateArray = date.toString().split(' ');
    dateArray[0] = `${dateArray[0]},`;
    setDate(date);
    setDateStr(dateArray.slice(0, 3).join(' '));
  }, []);

  return (
    <div className="container dashboard">
      <h1 className="title">{dateStr}</h1>
      <div className="plus-btn transition">
        <div className="label transition">
          <p >New Event</p>
        </div>
        <div className="btn-container transition">
          <button className="btn" onClick={(e) => { history.push('/dashboard/add') }}><img src={require('../assets/plus.svg')} /></button>
        </div>
      </div>
      {
        loading ?
          <LoadingCardList />
          : data ?
            <CardList events={data.getEvents} date={date} />
            : <h2 className='card-list'>No events yet.</h2>
      }
    </div>
  );
};