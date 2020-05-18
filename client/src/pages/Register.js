import React from 'react'
import Form from '../components/FormLogin&Register'

export default () => {
    
    function Register(data){
        console.log(data)
    }

    return (
        <div className='container'>
            <Form action={Register} status='register' />
        </div>
    )
}