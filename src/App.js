import "./App.css";
import React from "react";

class App extends React.Component {
  render() {
    return <div style={{ textAlign: "center" }}>{this.props.title}</div>;
  }
}

export default App;
