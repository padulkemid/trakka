import React from 'react';
import { EditEventById } from '../actions';
import { FormEditAdd } from '../components';

export default () => {
    return (
        <div className='container'>
            <center>
                <h1> Edit </h1>
            </center>
            <br />
            <FormEditAdd action={EditEventById} />
        </div>
    )
}