import React, { Component } from 'react';

class ChildComponent1 extends Component {
    state = {
        favoriteColor: "red"
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: "blue" })
        }, 3000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML = "Before the update, the favorite color was " + prevState.favoriteColor;

        return null;
    }

    componentDidUpdate() {
        document.getElementById("div2").innerHTML = "The updated favorite color is " + this.state.favoriteColor;
    }

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        );
    }
}

export default ChildComponent1;