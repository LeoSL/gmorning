import React, { Component } from 'react';

class Today extends Component {
  today() {
    const options = {
      weekday: 'long',
      year: '2-digit',
      month: '2-digit',
      day: 'numeric'
    };

    const today = new Date();
    return today.toLocaleDateString("en-US", options);
  }

  render() {
    return (
      <div className="today">
        <h1>{this.today()}</h1>
      </div>
    );
  }
}

export default Today;
