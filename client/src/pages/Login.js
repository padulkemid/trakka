import React, { useState } from 'react';
import Form from '../components/FormLogin&Register';
import gql from 'graphql-tag';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

const LOGIN = gql`
  mutation loginUser($input: UserLogin!) {
    login(input: $input) {
      result
    }
  }
`;

export default () => {
  const [loginUser] = useMutation(LOGIN);
  const history = useHistory();
  const [err, setErr] = useState(null)

  async function Login(data) {
    try {
      if(data.email !== '' && data.password !== '' && data.password >= 6){
        const result = await loginUser({
          variables: {
            input: {
              email: data.email,
              password: data.password,
            },
          },
        });
        const reportedResult = result.data.login.result;
        if (!reportedResult.length) {
          setErr('Something happened, your password is wrong / something');
        } else {
          localStorage.setItem('email', data.email);
          history.push('/dashboard');
          window.location.reload();
        }
      }else{
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
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      {
        err&&(
          <div className="alert alert-danger">
            {err}
          </div>
        )
      }
      <center>
        <h1> Login </h1>
      </center>
      <br />
      <Form action={Login} status="login" err={setErr}/>
    </div>
  );
};

