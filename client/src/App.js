import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Alerts from './components/layout/Alerts'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import ContactState from './context/contact/ContactState'
import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './components/routing/PrivateRoute'
if (localStorage.token) {
  setAuthToken(localStorage.token)
}
function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
