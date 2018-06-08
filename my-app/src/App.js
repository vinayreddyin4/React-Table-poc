import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Home from './Home';
import LandingPage from './LandingPage';

import {Route} from 'react-router-dom';

class App extends Component {
 
  render() {
    return (
      <div>
       <Route exact path="/" component={LandingPage}/>
        <Route path="/home*" component={Home}/>
      </div>

    );
  }
}

export default App;
