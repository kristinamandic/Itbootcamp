import React from "react";
import { Component } from "react";

class Inputs extends Component {
    state = {
        name: "",
        age: "",
        errMsg: ""
    }

    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;

        let errMsg = "";

        if (name === 'age') {
            if (value !== '' && !Number(value)) {
                errMsg = "You must enter a number";
            }
        }
        this.setState({ [name]: value });
        this.setState({ errMsg: errMsg });
    }

    render() {
        return (
            <form>
                <h1>Hello {this.state.name}</h1>
                <p>Your age is: {this.state.age}</p>

                <p>Enter your name</p>
                <input type="text" name="name" onChange={this.handleChange} />

                <p>Enter your age</p>
                <input type="text" name="age" onChange={this.handleChange} />
            </form>
        )
    }
}

export default Inputs;