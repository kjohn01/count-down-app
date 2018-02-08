import React, { Component } from 'react';
import Clock from './Clock.jsx';
import { Button } from 'react-bootstrap';
import styles from './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "December 25, 2017",
      newDeadline: ""
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  render() {
    return (
      <div>
        <div>Count down to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <div className="Field">
          <input type="text" onChange={ event => this.setState({newDeadline: event.target.value})} placeholder="enter a date"/>
          <Button className="font-weight-bold" onClick={ () => this.changeDeadline()}>GO</Button>
        </div>
      </div>
    )
  }
}

export default App;
