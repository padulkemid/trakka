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
                            <label for="Username">Username</label>
                            <input type="text" className="form-control" id="Username" onChange={
                                (e) => {
                                    setUsername(e.target.value)
                                }
                            }/>
                        </div>
                    )
                }
                <div className="form-group">
                    <label for="Email">Email address</label>
                    <input type="email" className="form-control" id="Email" onChange={
                        (e) => {
                            setEmail(e.target.value)
                        }
                    }/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" onChange={
                        (e) => {
                            setPassword(e.target.value)
                        }
                    }/>
                </div>
                <button type="submit" className="btn btn-primary" onSubmit={ () => {
                    props.action({username,email,password})
                } }>Submit</button>
            </form>
        </div>
    )
}