import React, { Component } from "react";
import ChildCounter from "./ChildCounter.js";

class Counters extends Component {
    state = {
        counters: [
            { id: 0, value: 0 },
            { id: 1, value: 1 },
            { id: 2, value: 2 },
            { id: 3, value: 3 }
        ]
    }

    hendleIncrement = (id) => {
        // Spread operator
        // const counters = [...this.state.counters];
        // const counters = {...this.state.counters[0], name: "Child"};

        this.setState({
            counters: this.state.counters.map((item) => {
                return item.id === id ? { ...item, value: item.value + 1 } : item;
            })
        })
    }

    handleDelete = (id) => {
        // Moja neka ideja, ne radi
        // for (let i = 0; i <= this.state.counters.length; i++) {
        //     return i === id ? this.state.counters.splice(i, 1) : this.state.counters[i];
        // }

        this.setState({
            counters: this.state.counters.filter(counter => counter.id !== id)
        });

        // Marijin nacin - dugacko
        // this.setState((previousState) => {
        //     return {
        //         ...previousState,
        //         counters: previousState.counters.filter(item => {
        //             item.id !== id
        //         })
        //     }
        // })
    }

    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    // <ChildCounter
                    //     key={counter.id}
                    //     id={counter.id}
                    //     value={counter.value}
                    //     counter={counter}
                    //     onIncrement={this.hendleIncrement}
                    // />
                    <ChildCounter
                        key={counter.id}
                        counter={counter}
                        onIncrement={this.hendleIncrement}
                        onDelete={this.handleDelete}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;