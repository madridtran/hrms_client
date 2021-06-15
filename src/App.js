import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AttendanceList from './components/AttendanceList';
import CheckIn from './components/CheckIn';
import CheckOut from './components/CheckOut';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {AttendanceList}></Route>
                           {/* <Route path = "/employee/:id/attendance" component = {AttendanceList}></Route> */}
                          <Route path = "/attendance/checkIn" component = {CheckIn}></Route> 
                          <Route path = "/attendance/checkOut" component = {CheckOut}></Route> 
                          {/* <Route path = "/employee/:id/checkIn" component = {CheckIn}></Route> */}
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              {/* <FooterComponent /> */}
        </Router>
    </div>
    
  );
}

export default App;