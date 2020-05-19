import React, { useState, useEffect } from 'react';
import {
    useHistory
} from "react-router-dom";

export default ({ event }) => {
    const history = useHistory();
    const [formattedTime, setFormattedTime] = useState('00:00');

    useEffect(() => {
        if (event.timestamp) {
            setFormattedTime(getFormattedTime(new Date(event.timestamp)));
        }
    }, [event]);

    const getFormattedTime = (date) => {
        const hour = date.getHours();
        const minute = date.getMinutes();
        return `${hour > 12 ? hour - 12 : hour}:${
            minute > 9 ? minute : `0${minute}`
            } ${hour > 12 ? 'pm' : 'am'}`;
    };

    return (
        <div className="card" onClick={(e) => { if (event) history.push(`/dashboard/edit/${event.id}`) }}>
            <h4 className="title">{event.title}</h4>
            <h5 className="date">{formattedTime}</h5>
            <p className="desc">{event.description}</p>
            <div className="edit transition">
                <h3>Edit</h3>
            </div>
        </div>
    );
};

