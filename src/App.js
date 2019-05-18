import React, { Component } from "react";
import Table from "./Table";
// import './index.css';

class App extends Component {
  render() {
    const characters = [
      { name: "Jennifer", job: "Porn Star" },
      { name: "Bob", job: "Data Analyst" },
      { name: "Carlos", job: "Attorney-At-Law" }
    ];
    return (
      <div className="container">
        <Table charData={characters} />
      </div>
    );
  }
}

export default App;
