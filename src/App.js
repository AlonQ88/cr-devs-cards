import "./App.css";
import React from "react";
import CardList from "./components/CardList";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header">{this.props.title}</h1>
        <CardList />
      </div>
    );
  }
}

export default App;
