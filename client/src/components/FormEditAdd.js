import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_EVENT } from '../schema';
import { useHistory } from 'react-router-dom';
import Timekeeper from 'react-timekeeper';

export default ({ action }) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [formattedTime, setFormattedTime] = useState('00:00');
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_EVENT, { variables: { id } });

  const getFormattedTime = (date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour > 9 ? hour : `0${hour}`}:${
      minute > 9 ? minute : `0${minute}`
    }`;
  };

  useEffect(() => {
    if (data) {
      const { title, description, timestamp } = data.getEventsById;
      setTitle(title);
      setDescription(description);
      setTimestamp(timestamp);
      if (timestamp) {
        const date = new Date(timestamp);
        setFormattedTime(getFormattedTime(date));
      }
    } else {
      const date = new Date();
      setTimestamp(date.toISOString());
      setFormattedTime(getFormattedTime(date));
      console.log(getFormattedTime(date));
    }
  }, [data, formattedTime]);

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="2"
            className="form-control"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <Timekeeper
            time={formattedTime}
            onChange={(e) => {
              const date = new Date();
              date.setHours(e.hour, e.minute);
              setTimestamp(date.toISOString());
            }}
          />
        </div>
        <div className="button-group">
          <button
            type="submit"
            className="btn btn-primary submit"
            onClick={(e) => {
              e.preventDefault();
              action(id, { title, description, timestamp });
              history.push(`/dashboard`);
            }}>
            Submit
          </button>
          <button
            className="btn btn-secondary cancel"
            onClick={(e) => {
              e.preventDefault();
              history.push(`/dashboard`);
            }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

