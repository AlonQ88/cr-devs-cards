import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form className="form" action="">
        <input type="text" placeholder="GitHub Username" />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
