import React from 'react';
import { CREATE_EVENT, GET_ALL_EVENTS } from "../schema";
import { useMutation } from '@apollo/react-hooks';
import { FormEditAdd } from '../components';

export default () => {

    const [createEvent] = useMutation(CREATE_EVENT, { refetchQueries: [{ query: GET_ALL_EVENTS }] });
    const CreateEvent = async (event) => {
        try {
            const result = await createEvent({
                variables: {
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
                <h1> Add </h1>
            </center>
            <br />
            <FormEditAdd action={CreateEvent} />
        </div>
    )
}