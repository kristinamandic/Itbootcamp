import logo from './logo.svg';
import './App.css';
import React, { Component, PureComponent } from 'react';
import ChildComponent from './components/ChildComponent';
import ChildComponent1 from './components/ChildComponent1';
import ChildComponent2 from './components/ChildComponent2';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "This name will change in 3 seconds",
      show: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "The name change" });
    }, 3000)

    // Usuall purpose
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  render() {
    return (
      <div>
        {/* <p>{this.state.name}</p> */}
        {/* <ChildComponent /> */}
        {/* <ChildComponent1 /> */}
        {/* <ChildComponent2 /> */}
        {this.state.show ? <ChildComponent2 /> : null}
        <br />
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? "Unmount Component" : "Mount Component"}
        </button>
      </div>
    )
  }
}

export default App;