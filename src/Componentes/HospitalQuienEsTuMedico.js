import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HospitalQuienEsTuMedico extends Component {
 
  constructor(props)
  {
      super(props)    
      this.handleOnClick = this.handleOnClick.bind(this);
  }


  handleOnClick()
  {
      
  } 

  render() {
    return (
      <div>
        <img src="/img/logohospitalsanjose.png" alt="logoHospital"/>  
        <div><Link to= '/HospitalCheckbox'><button type="button" onClick={this.handleOnClick}>Volver Atrás</button></Link></div><br/> 
        <img src="/img/quienestumedico.png" alt="quienesTuMedico"/>
        <ul>
        <div><Link to= '/HospitalSwitch'><button type="button" onClick={this.handleOnClick}>Siguiente</button></Link></div><br/>  
        </ul>  
      </div>
    );
  }

}

export default HospitalQuienEsTuMedico;