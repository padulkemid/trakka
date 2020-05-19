import React from 'react'
import { Login, Register } from '../pages'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'

const LOGOUT = gql `
    mutation logoutUser {
        logout {
            result
        }
    }
`

export default () => {

    const [logoutUser] = useMutation(LOGOUT)

    async function Logout(){
        const result = await logoutUser()
        console.log(result.data.logout.result)
    }

    return (
        <Router>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/"> Login </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/register"> Register </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/' onClick={Logout}> Logout </Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                    <Route exact path="/">
                        <Login/>
                    </Route>
                    <Route exact path="/register">
                        <Register/>
                    </Route>
                </Switch>
        </Router>
    )
}