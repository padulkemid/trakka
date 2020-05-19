import React from 'react'
import Form from '../components/FormLogin&Register'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'

const LOGIN = gql `
    mutation loginUser($input: UserLogin!){
        login(input: $input){
            result
        }
    }
`

export default () => {

    const [loginUser] = useMutation(LOGIN)
    
    async function Login(data) {
        console.log(data)
        try {
            const result = await loginUser({
                variables: {
                    input: {
                        email: data.email,
                        password: data.password
                    }
                }
            })
            console.log(result.data.login.result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container'>
            <center>
                <h1> Login </h1>
            </center>
            <br/>
            <Form action={Login} status='login' />
        </div>
    )
}