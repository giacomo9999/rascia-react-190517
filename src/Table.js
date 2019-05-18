import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jennifer</td>
            <td>Porn Star</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>Data Analyst</td>
          </tr>
          <tr>
            <td>Carlos</td>
            <td>Attorney-At-Law</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
