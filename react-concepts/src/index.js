import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class ClockCollection extends React.Component {
  constructor(props) {
    super(props);
    this.addClock = this.addClock.bind(this);
    this.delClock = this.delClock.bind(this);
    this.state = { count: 3 };
  }

  addClock() {
    this.setState({ count: this.state.count + 1 });
  }

  delClock() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    let clocks = [];
    const random = Math.random();

    for (let i = 0; i < this.state.count; i++) {
      clocks.push(<Clock key={i} count={i + 1} random={random} />);
    }

    return (
      <>
        <button onClick={this.addClock}>Add Clock</button>
        <button onClick={this.delClock}>Del Clock</button>
        {clocks}
      </>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("Clock " + this.props.count + " DidMount");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("Clock " + this.props.count + " DidUnmount");
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Clock {this.props.count}</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <p>Math.random() in ClockCollection = {this.props.random}</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <ClockCollection />;
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
