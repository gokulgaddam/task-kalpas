import React from "react";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-layout">
        <img src={this.props.image} className=" img-fluid card-img" />
      </div>
    );
  }
}

export default Card;
