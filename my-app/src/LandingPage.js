import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Content from './Content';
import { makeData, Logo, Tips } from "./Utils";


class LandingPage extends Component {

    constructor() {
        super();
        this.state = {
          data: makeData()
        };
      }

  render() {
    const { data } = this.state;

    console.log("props", this.props)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> React Table</h1>
        </header>
       <Content />
       
       
        <ReactTable
         data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            }
            ]}
        />  

      </div>
    );
  }
}

export default connect(state => state)(LandingPage);
