import React, { createContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Event from './components/Event.js/Event';
import Dashboard from './components/Dashboard/Dashboard';
import VolunteerLIst from './components/Dashboard/VolunteerLIst/VolunteerLIst';
import AddEvent from './components/Dashboard/AddEvent/AddEvent';
export const userContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/events">
            <Event></Event>
          </PrivateRoute>
          <PrivateRoute path="/register">
            <Register></Register>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/volunteerList">
            <VolunteerLIst></VolunteerLIst>
          </PrivateRoute>
          <PrivateRoute path="/addEvent">
            <AddEvent></AddEvent>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
