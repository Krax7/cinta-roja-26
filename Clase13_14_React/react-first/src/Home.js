import React, { Component } from 'react';
import { Card } from './Card';
import axios from 'axios';
import { Navbar } from './Navbar';
import { Formulario } from './Formulario';

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            losCards:[]
        }
    }

    componentDidMount() {
        // Aquí van las peticiones
        axios.get('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/')
        .then((result) => {
            console.log(result.data);
            this.setState({
                losCards:result.data
            })
        })
        .catch((err) => {
            console.log(err);            
        })
    }

    renderCard = () => {
        if(this.state.losCards === undefined) {
            return <h1>Cargando los autores...</h1>
        } else {
            return this.state.losCards.map((autor) => 
                <Card nombre={autor.name}></Card>
            )
        }
    }

    render() {
        return(
            <div className="App">
                <Navbar/>
                <Formulario/>
                {/* <div className="row">
                    { this.renderCard() }
                </div> */}
            </div>
        );
    }
}