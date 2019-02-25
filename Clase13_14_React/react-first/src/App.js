import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { Saludo } from './Saludo';
import { Despedida } from './Despedida';
import { Contador } from './Contador';
import { Home } from './Home';
import { Formulario } from './Formulario';
import { BrowserRouter,Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Home/>
      //   {/* <h1>Saludos desde React</h1>
      //   <Saludo mensaje="Que onda"/>
      //   <Despedida mensajito="Hasta luego"/>
      //   <Contador /> */}
      // </div>
      <BrowserRouter>
        <main> 
          {/* Es una etiqueta main cualquiera. Podría haber sido un div. */}
          <Route exact path = '/' component={Home}/>
          <Route exact path = '/form' component={Formulario}/>
        </main>
      </BrowserRouter>
    )
  }
}

export default App;
