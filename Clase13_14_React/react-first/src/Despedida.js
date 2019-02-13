import React, { Component } from 'react';
import { Saludo } from './Saludo';

export class Despedida extends Component {
    state = {
        despedida: "Soy una despedida feliz.",
        intern: "sudo alecs add termo"
    }
    render() {
        return (
            <div className="Despedida">
                <h2>{this.props.mensajito} desde el componente de despedida.</h2>
                <h5>{this.state.despedida}</h5>
                <h6>{this.state.intern}</h6>
                <Saludo toma={this.state.intern} />
            </div>
        )
    }
}