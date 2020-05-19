import React, { useState } from 'react'
import Form from '../components/FormLogin&Register'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'
import { useHistory } from 'react-router-dom'

const REGISTER = gql `
    mutation registerNewUser($input: UserRegister!){
        register(input: $input){
            result
        }
    } 
`

export default () => {

    const [registerNewUser] = useMutation(REGISTER)
    const history = useHistory()
    const [err, setErr] = useState(null)
    
    function Register(data){
        console.log(data)
        if(data.username !== '' && data.email !== '' && data.password !== '' && data.password >= 6){
            registerNewUser({
                variables: {
                    input: {
                        username: data.username,
                        email: data.email,
                        password: data.password
                    }
                }
            })
            history.push('/')
        }else{
            if(data.username === ''){
                setErr('Must fill the username')
            }
            if(data.email === ''){
                setErr('Must fill the email')
            }
            if(data.password === ''){
                setErr('Must fill the password')
            }
            if(data.password < 6){
                setErr('The length of password must equal or more then 6')
            }
        }
    }

    return (
        <div className='container'>
            {
            err&&(
                <div className="alert alert-danger">
                {err}
                </div>
            )
            }
            <center>
                <h1> Register </h1>
            </center>
            <br/>
            <Form action={Register} status='register' err={setErr}/>
        </div>
    )
}