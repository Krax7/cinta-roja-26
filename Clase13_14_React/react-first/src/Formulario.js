import React, { Component } from 'react';

export class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            passwordValid: false
        };
    }


    onInputChange = (e) => {
        const {id} = e.target;
        let passwordValid = false;
        console.log(this.state.nombre);
        if(this.state.nombre.length > 3) {
            passwordValid = true;
        }
        this.setState({
            [id]:e.target.value,
            passwordValid
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.nombre === ''){
            alert('Llena el nombre');    
        }
    }

    render() {
        return(
            <div className="Formulario">
                <form>
                    <input onChange={this.onInputChange} value={this.state.nombre} id="Nombre" placeholder="Nombre aqui"/>
                    <input onChange={this.onInputChange} value={this.state.apellido} id="Apellido" placeholder="Apellido aquí"/>
                    <label>{this.state.passwordValid ? 'correcto' : 'incorrecto' }</label>
                <button  className="btn btn-success" type="submit">Guardar datos</button>
                </form>
            </div>
        
        );
    }
}