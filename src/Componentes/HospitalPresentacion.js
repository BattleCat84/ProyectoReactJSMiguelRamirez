import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HospitalPresentacion extends Component {
    
      render() {
        return (
          <div>
            <img src="/img/logohospitalsanjose.png" alt="logoHospital"/>
    
            <h6>Bienvenido a la aplicación del Hospital San Jose</h6>
            <div><Link to= '/HospitalInsertarNombre'><button type="button" onClick={this.handleOnClick}>Empezar</button></Link></div><br/>
          </div>
        );
      }
    }
    
    export default HospitalPresentacion;