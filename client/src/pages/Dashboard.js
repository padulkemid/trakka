import React, { useState, useEffect } from 'react';
import { GET_ALL_EVENTS } from '../schema';
import { useQuery } from '@apollo/react-hooks';
import { CardList } from '../components';
import {
  useHistory
} from "react-router-dom";

export default () => {
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_ALL_EVENTS);
  const [curDate, setCurDate] = useState('');

  useEffect(() => {
    const date = new Date();
    let dateArray = date.toString().split(' ');
    dateArray[0] = `${dateArray[0]},`;
    setCurDate(dateArray.slice(0, 3).join(' '));
  }, []);

  const testData = {
    getEvents: [
      { id: 0, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing a…ldus PageMaker including versions of Lorem Ipsum.", timestamp: "2020-05-19T07:25:44.922Z" },
      { id: 0, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing a…ldus PageMaker including versions of Lorem Ipsum.", timestamp: "2020-05-19T07:25:44.922Z" },
      { id: 0, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing a…ldus PageMaker including versions of Lorem Ipsum.", timestamp: "2020-05-19T07:25:44.922Z" },
      { id: 0, title: "Test", description: "Lorem Ipsum is simply dummy text of the printing a…ldus PageMaker including versions of Lorem Ipsum.", timestamp: "2020-05-19T07:25:44.922Z" },
    ]
  }

  return (
    <div className="container dashboard">
      <h1 className="title">{curDate}</h1>
      <div className="plus-btn transition">
        <div className="label transition">
          <p >New Event</p>
        </div>
        <div className="btn-container transition">
          <button className="btn" onClick={(e) => { history.push('/dashboard/add') }}><img src={require('../assets/plus.svg')} /></button>
        </div>
      </div>
      {/* {testData ? <CardList events={testData.getEvents} /> : <h2 className='card-list'>No events yet.</h2>} */}
      {data ? <CardList events={data.getEvents} /> : <h2 className='card-list'>No events yet.</h2>}
    </div>
  );
};