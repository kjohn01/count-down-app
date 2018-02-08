import React, { Component } from 'react'
import styles from './app.css'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      mins: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntill(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntill(this.props.deadline), 1000);
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntill(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const mins = Math.floor(time / (1000*60) % 60);
    const hours = Math.floor(time / (1000*60*60) % 24);
    const days = Math.floor(time / (1000*60*60*24));
    this.setState({days, hours, mins, seconds});
  }

  render() {
    return(
      <div>
        <ul>
          <li className="Days">{this.leading0(this.state.days)} days</li>
          <li className="Hours">{this.leading0(this.state.hours)} hous</li>
          <li className="Mins">{this.leading0(this.state.mins)} mins</li>
          <li className="Seconds">{this.leading0(this.state.seconds)} seconds</li>
        </ul>
      </div>
    )
  }
}

export default Clock;
