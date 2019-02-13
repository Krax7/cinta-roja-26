import React, { Component } from 'react';

export class Saludo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: 'Nombre 1'
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
        
    }
/* 
    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({
                nombre: 'Nombre 2'
            },2000);
        });
    } */

    render() {
        console.log('render');
        return (
            <div className="Saludo">
                <h2>{this.props.toma} desde el componente Saludo xdxd</h2>
                <p>{this.state.nombre}</p>
            </div>
        );
    }
}
// Opcional
export default Saludo;