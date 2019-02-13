import React, { Component } from 'react';
import logo from './logo.svg';

export class Card extends Component {
    render() {
        return(
            <div class="card" style={{width: "18rem", margin: "10px"}}>
                <img class="card-img-top" src={logo} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{this.props.nombre}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}
