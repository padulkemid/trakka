import React from 'react';
import { EDIT_EVENT, GET_ALL_EVENTS } from "../schema";
import { useMutation } from '@apollo/react-hooks';
import { FormEditAdd } from '../components';

export default () => {

    const [editEvent] = useMutation(EDIT_EVENT, { refetchQueries: [{ query: GET_ALL_EVENTS }] });
    const EditEventById = async (id, event) => {
        try {
            const result = await editEvent({
                variables: {
                    id,
                    event
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

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