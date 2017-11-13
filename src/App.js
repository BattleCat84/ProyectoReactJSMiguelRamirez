import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HospitalPresentacion from './Componentes/HospitalPresentacion';
import HospitalInsertarNombre from './Componentes/HospitalInsertarNombre';
import HospitalCheckbox from './Componentes/HospitalCheckbox';
import HospitalQuienEsTuMedico from './Componentes/HospitalQuienEsTuMedico';
import HospitalSwitch from './Componentes/HospitalSwitch';

const App = () => (
    <Router>
      <div>
        <Route exact path= '/' component={HospitalPresentacion}/>
        <Route path='/HospitalInsertarNombre' component={HospitalInsertarNombre}/> 
        <Route path= '/HospitalCheckbox' component={HospitalCheckbox}/>
        <Route path= '/HospitalQuienEsTuMedico' component={HospitalQuienEsTuMedico}/>
        <Route path= '/HospitalSwitch' component={HospitalSwitch}/>
      </div>
    </Router>
  );

export default App;
