import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class Content extends Component {

       handleClick = (key) => {
         this.props.updateValue(key)
       }

  render() {
    console.log(">>>>>content", this.props)
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title"> React Table</h1>
        </header> */}
        <div>
          <table>
            <tr onClick={(e) => this.handleClick('row1')}>
              <td>row1</td>
              {
                this.props.rowReducer.row1 ? (
                  <tr>
                  <tr><td><Link to="/home3">r1 subrow1</Link></td></tr>
                  <tr><td><Link to="/home4">r1 subrow2</Link></td></tr>
                  </tr>
                ) : null
              }
            </tr>

            <br/>
            <tr onClick={(e) => this.handleClick('row2')}>
              <td>row2</td>
              {
                this.props.rowReducer.row2 ? (
                  <tr>
                  <tr><td><Link to="/home1">r2 subrow1</Link></td></tr>
                  <tr><td><Link to="/home2">r2 subrow2</Link></td></tr>
                  </tr>
                ) : null
              }
            </tr>

          </table>
       </div>
            
      </div>

    );
  }
}

export default connect(state => state, dispatch => ({
updateValue: (key) => dispatch({
  type: 'UPDATE_VALUES',
  keyValue: key
})
}))(Content);
