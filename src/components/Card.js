import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img alt="placeholder" src="https://placehold.it/75"></img>{" "}
        <div className="dev-info">
          <div className="dev-name">Test Name</div>
          <div className="company">Test Company</div>
        </div>
      </div>
    );
  }
}
export default Card;
