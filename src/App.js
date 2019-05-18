import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
// import './index.css';

class App extends Component {
  state = {
    characters: [],
  };

  removeCharacter = index => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((entry, i) => {
        return i !== index;
      })
    });
  };

  render() {
    return (
      <div className="container">
        <Table
          charData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Form />
      </div>
    );
  }
}

export default App;

// state = {
//     characters: [
//       { name: "Jennifer", job: "Porn Star" },
//       { name: "Bob", job: "Data Analyst" },
//       { name: "Carlos", job: "Attorney-At-Law" }
//     ]
//   };
