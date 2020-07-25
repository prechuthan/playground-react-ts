import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Worlds</h1>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Clock />, document.getElementById("root"));

