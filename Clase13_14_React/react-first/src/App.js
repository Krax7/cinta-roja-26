import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { Saludo } from './Saludo';
import { Despedida } from './Despedida';
import { Contador } from './Contador';
import { Home } from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        {/* <h1>Saludos desde React</h1>
        <Saludo mensaje="Que onda"/>
        <Despedida mensajito="Hasta luego"/>
        <Contador /> */}
      </div>
    )
  }
}

export default App;
