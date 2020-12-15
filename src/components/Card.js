import React from "react";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile" key={profile.avatar_url}>
        <img alt="placeholder" src={profile.avatar_url}></img>{" "}
        <div className="dev-info">
          <div className="dev-name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
