import React, { useState, useEffect } from 'react';
import {
    useHistory
} from "react-router-dom";

export default ({ event, date }) => {
    const history = useHistory();
    const [formattedTime, setFormattedTime] = useState('00:00');
    const [isPassed, setIsPassed] = useState(false);

    useEffect(() => {
        let eventDate = new Date();
        if (event.timestamp) {
            eventDate = new Date(event.timestamp);
            setFormattedTime(getFormattedTime(eventDate));
            setIsPassed(false);
            if (date) {
                if (date > eventDate) {
                    setIsPassed(true);
                }
            }
        }
    }, [event, date]);

    const getFormattedTime = (date) => {
        const hour = date.getHours();
        const minute = date.getMinutes();
        return `${hour > 12 ? hour - 12 : hour}:${
            minute > 9 ? minute : `0${minute}`
            } ${hour > 12 ? 'pm' : 'am'}`;
    };
    return (
        <div className={`card${isPassed ? 'passed' : ''}`} onClick={(e) => { if (event) history.push(`/dashboard/edit/${event.id}`) }}>
            <h4 className="title">{event.title}</h4>
            <h5 className="date">{formattedTime}</h5>
            <p className="desc">{event.description}</p>
            <div className="edit transition">
                <h3>Edit</h3>
            </div>
        </div>
    );
};

