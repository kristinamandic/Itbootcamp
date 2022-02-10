import React, { Component } from 'react';

class ChildComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: "shouldComponentsUpdate Method"
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: "componentDidMount Method" })
        }, 1000)
    }

    render() {
        return (
            <div>
                <p>This is a {this.state.name}</p>
            </div>
        );
    }
}

export default ChildComponent;