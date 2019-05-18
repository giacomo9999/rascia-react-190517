import React, { Component } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class Table extends Component {
  render() {
    const { charData, removeCharacter } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody charData={charData} removeCharacter={removeCharacter} />
      </table>
    );
  }
}

export default Table;
