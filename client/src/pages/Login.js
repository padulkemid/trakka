import React from 'react'
import Form from '../components/FormLogin&Register'

export default () => {
    
    function Login(data) {
        console.log(data)
    }

    return (
        <div className='container'>
            <Form action={Login} status='login' />
        </div>
    )
}