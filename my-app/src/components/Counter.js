import React, { Component } from "react";

class Counter extends Component {
    state = {
        counter: 0,
        imageURL: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"]
    }

    // constructor() {
    //     super();
    //     console.log("Constructor", this);
    //     this.formatCount = this.formatCount.bind(this)
    // }

    handleIncrement = () => {
        console.log("handleIncrement");

        this.setState({ counter: this.state.counter + 1 })
    }

    handleDecrement = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    addClass = () => {
        return this.state.counter === 0 ? "warning" : "success";
    }

    styles = {
        fontSize: "12px",
        fontWeight: "bold",
        color: "blue"
    }

    // formatCount() {
    //     // destructuring
    //     const { counter } = this.state
    //     console.log(counter);
    // }

    // Ovo je umjesto constructora i predjasnje anonimne funkcije formatCount, ovo je arrow funkcija i zbog toga ona moze da funkcionise sama
    formatCount = () => {
        // destructuring
        const { counter } = this.state
        // console.log(this.state.counter);
        return counter === 0 ? "Zero" : counter
    }

    render() {
        return (
            // Umjesto diva, moze da ide: <React.fragment></React.fragment>, ili prazne zagrdade <></> 
            <div>
                <h2 style={this.styles}>Pozdrav iz child komponente</h2>
                <p style={{ fontSize: 30, color: "purple" }}>Ja sam paragraf</p>

                <img src={this.state.imageURL} />

                <button onClick={this.handleDecrement}>-</button>

                {/* <p>Count: {this.state.counter}</p> */}
                <p className={this.addClass()}>Nas counter je: {this.formatCount()}</p>

                <button onClick={this.handleIncrement}>+</button>

                <h1>Tagovi</h1>

                {/* Umjesto ovoga:
                <p>{this.state.tags[0]}</p>
                <p>{this.state.tags[1]}</p>
                <p>{this.state.tags[2]}</p> 
                Koristimo ovo: */}

                {
                    this.state.tags.map((tag, index) =>
                        <p key={index}># {tag}</p>
                    )
                }
            </div >

        );
    }
}

export default Counter;