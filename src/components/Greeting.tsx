import React from "react";

interface Greet {
  name: string;
}

export class Greeting extends React.Component<Greet> {
  render() {
    return (
      <div>
        <h1>KFUE</h1>
        <div>Hi again {this.props.name}, welcome to React</div>
        <input name="" />
        <button className="submit-button">Submit</button>
      </div>
    );
  }
}
