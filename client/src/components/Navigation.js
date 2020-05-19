import React, { useState, useEffect } from 'react';
import { Login, Register, AddEvent, EditEvent, Dashboard } from '../pages';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const LOGOUT = gql`
  mutation logoutUser {
    logout {
      result
    }
  }
`;

export default () => {
  const [login, setLogin] = useState(false);
  const [logoutUser] = useMutation(LOGOUT);

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (!email) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, [setLogin]);

  async function Logout() {
    await logoutUser();
    setLogin(false);
    localStorage.clear();
  }

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav">
          {login ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to='/dashboard'>
                  {' '}
                  Dashboard{' '}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/' onClick={Logout}>
                  {' '}
                  Logout{' '}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {' '}
                  Login{' '}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  {' '}
                  Register{' '}
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/dashboard/add">
          <AddEvent />
        </Route>
        <Route exact path="/dashboard/edit/:id">
          <EditEvent />
        </Route>
      </Switch>
    </Router>
  );
};
