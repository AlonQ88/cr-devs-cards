import "./App.css";
import React from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";

class App extends React.Component {
  state = {
    profiles: [],
  };

  addNewCard = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <h1 className="header">{this.props.title}</h1>
        <Form onSubmit={this.addNewCard} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
