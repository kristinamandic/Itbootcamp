import React, { Component } from "react";
import ChildCounter from "./ChildCounter.js";

class Counters extends Component {
    state = {
        counters: [
            { id: 0, value: 0 },
            { id: 2, value: 1 },
            { id: 3, value: 2 },
            { id: 4, value: 3 }
        ]
    }
    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <ChildCounter key={counter.id} value={counter.value} />
                ))}
            </div>
        );
    }
}

export default Counters;