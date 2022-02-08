import React, { Component } from "react";

class ChildCounter extends Component {
    state = {
        // value: this.props.value
    }
    render() {
        return (
            <div>#{this.props.value}
                {/* <p>Ovo je iz state-a : {this.state.value}</p> */}
            </div>
        );
    }
}

export default ChildCounter;