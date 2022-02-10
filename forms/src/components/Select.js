import React, { Component } from 'react';

class Select extends Component {
    state = {
        value: "Volvo"
    }

    handleChange = e => {
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <form>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Ford">Ford</option>
                    <option value="Audi">Audi</option>
                    <option value="Volvo">Volvo</option>
                </select>
            </form>
        );
    }
}

export default Select;