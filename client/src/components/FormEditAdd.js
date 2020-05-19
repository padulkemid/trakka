import React, { useState, useEffect } from 'react'
import Timekeeper from 'react-timekeeper';

export default ({ action, timestamp: propTimestamp }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [timestamp, setTimestamp] = useState('')

    useEffect(() => {
        if (propTimestamp) {
            setTimestamp(propTimestamp);
        }
    }, [propTimestamp])

    return (
        <div className='container'>
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" onChange={
                        (e) => {
                            setTitle(e.target.value)
                        }
                    } />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea rows="10" className="form-control" onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    } />
                </div>
                <div className="form-group">
                    <label>Timestamp</label>
                    <Timekeeper time={timestamp} onChange={
                        (e) => {
                            setTimestamp(e.formatted)
                        }
                    } />
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => {
                    e.preventDefault()
                    action({ title, description, timestamp })
                }}>Submit</button>
            </form>
        </div>
    )
}