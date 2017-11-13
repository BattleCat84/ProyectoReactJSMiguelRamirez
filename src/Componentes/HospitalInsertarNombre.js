import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class HospitalInsertarNombre extends Component {
 
  constructor(props)
  {
    super(props);
    this.state = 
    { 
      name: '' ,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  
  handleChange(event) 
  {
    this.setState({name: event.target.value});  
  }
  
  handleOnClick(event){
    
  }  

  render() {
    return (
      <div>
        <div><Link to= '/HospitalPresentacion'><button type="button" onClick={this.handleOnClick}>Volver Atrás</button></Link></div><br/>    
        <img src="/img/logohospitalsanjose.png" alt="imagenHospital"/>    
        <label>Escriba su nombre</label>
        <form>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </form>
        <label>{this.state.name}</label>
        <div><Link to= '/HospitalQuienEsTuMedico'><button type="button" onClick={this.handleOnClick}>Siguiente</button></Link></div><br/>  
      </div>  
    );
  }
}

export default HospitalInsertarNombre;