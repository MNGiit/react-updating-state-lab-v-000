import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      totalClicks: 0,
    };
  }

  addClick = () => {
    this.setState(prevState => ({
      totalClicks: prevState.totalClicks+1
    }))
  }

  render() {
    return (
      <button onClick={this.addClick}>{this.state.totalClicks}</button>
    );
  }
}