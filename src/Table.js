import React, { Component } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends Component {
  render() {
    const { charData } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody charData={charData} />
      </table>
    );
  }
}

export default Table;
