import React, { Component } from "react";
import Table from "./Table";
import TableHeader from "./TableHeader";
// import './index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <table>
          <TableHeader />
        </table>
      </div>
    );
  }
}

export default App;
