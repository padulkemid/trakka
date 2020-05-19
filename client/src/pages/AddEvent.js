import React from 'react';
import { CreateEvent } from '../actions';
import { FormEditAdd } from '../components';

export default () => {
    return (
        <div className='container'>
            <center>
                <h1> Add </h1>
            </center>
            <br />
            <FormEditAdd action={CreateEvent} />
        </div>
    )
}