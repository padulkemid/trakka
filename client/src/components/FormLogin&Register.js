import React, { useState } from 'react'

export default (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')    

    return (
        <div className='container'>
            <form>
                {
                    props.status==='register'&&(
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" onChange={
                                (e) => {
                                    if(e.target.value === ''){
                                        props.err('Must fill the username')
                                    }else{
                                        props.err(null)
                                        setUsername(e.target.value)
                                    }
                                }
                            }/>
                        </div>
                    )
                }
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" onChange={
                        (e) => {
                            if(e.target.value === ''){
                                props.err('Must fill the email')
                            }else{
                                props.err(null)
                                setEmail(e.target.value)
                            }
                        }
                    }/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" min='6' className="form-control" onChange={
                        (e) => {
                            if(e.target.value === ''){
                                props.err('Must fill the password')
                            }else{
                                if(e.target.value.length < 6){
                                    props.err('The minimum length of password is 6')
                                }else{
                                    props.err(null)
                                    setPassword(e.target.value)
                                }
                            }
                        }
                    }/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={ (e) => {
                    e.preventDefault()
                    props.action({username,email,password})
                } }>Submit</button>
            </form>
        </div>
    )
}