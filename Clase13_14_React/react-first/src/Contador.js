import React, { Component } from 'react';

export class Contador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numerito: 0,
        }
    }

    onClickMore = () => {
        const suma = this.state.numerito + 1;
        this.setState({
            numerito: suma,
         })
    }

    onClickLess = () => {
        const resta = this.state.numerito - 1;
        this.setState({
            numerito: resta,
         })
    }

    onClickRestart = () => {
        this.setState({
            numerito: 0,
         })
    }

    render() {
        return (
            <div className="Contador">
                <h6>{this.state.numerito}</h6>
                <button onClick={this.onClickMore}>Sumar numerito +</button>
                <button onClick={this.onClickLess}>Restar numerito -</button>
                <button onClick={this.onClickRestart}>Reiniciar</button>
            </div>
        );
    }
}