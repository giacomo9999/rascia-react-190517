import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.initialState = { name: "", job: "" };
    this.state = this.initialState;
  }

  handleChange = e => {
    console.log(this.state);
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
    console.log(this.state);
  };

  render() {
    const { name, job } = this.state;
    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;
