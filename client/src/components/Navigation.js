import React from 'react'
import { Login, Register } from '../pages'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

export default () => {

    function Logout(){
        
    }

    retrun (
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
                        <Link className='nav-link' to={Logout}> Logout </Link>
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