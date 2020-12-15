import React from "react";

class Form extends React.Component {
  state = { userName: "" };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GitHub Username"
          required
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
