import React, { Component } from 'react'

class ClassComp extends Component {
    constructor() {
        super();
        this.state = {
            message: "Class component", 
            dateTime: new Date().toString() 
        };
    }

    componentDidMount() {
        console.log("Component did mount called");
        this.interval = setInterval(() => {
            this.showDate();
        }, 1000);
    }

    componentDidUpdate() {
        console.log("Component did update called");
    }

    componentWillUnmount() {
        console.log("Component Will unmount called");
        clearInterval(this.interval);
    }

    showDate() {
        this.setState({dateTime: new Date().toString()});
    }

  render() {
    return (
      <div>
        <p>Message : {this.state.message}</p>
        <p>Date & Time : {this.state.dateTime}</p>
      </div>
    )
  }
}

export default ClassComp;
