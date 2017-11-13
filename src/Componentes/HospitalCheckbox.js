import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AlertContainer from 'react-alert';

class HospitalCheckbox extends Component {
  constructor(props)
  {
      super(props)
      this.state = {
        sex: 0,
      }
      this.onClick= this.onClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleOnClick = this.handleOnClick.bind(this);
  }

  alertOptions = {
    offset: 14,
    position: 'bottom center',
    theme: 'grey',
    time: 3000,
    transition: 'scale'
  }

  showAlertHombre = () =>{
    this.msg.show('Hombre', {
    time: 2000,
    type:'success',
    icon: <img src= "/img/hombre32X32.png"/>
    })
  }
  
  showAlertMujer = () =>{
    this.msg.show('Mujer', {
    time: 2000,
    type:'success',
    icon: <img src= "/img/mujer32x32.png"/>
    })
  }

  showAlertCardiologia = () =>{
    this.msg.show('Cardiologia', {
    time: 2000,
    type:'success',
    icon: <img src= "/img/solodoctor32x32.png"/>
    })
  }

  showAlertNeurocirugia = () =>{
    this.msg.show('Neurocirugia', {
    time: 2000,
    type:'success',
    icon: <img src= "/img/solodoctor32x32.png"/>
    })
  }

  showAlertCirugia = () =>{
    this.msg.show('Cirugia', {
    time: 2000,
    type:'success',
    icon: <img src= "/img/solodoctor32x32.png"/>
    })
  }

  showAlertRadiologia = () =>{
    this.msg.show('Radiologia', {
    time: 2000,
    type:'success',
    icon: <img src= "/img/solodoctor32x32.png"/>
    })
  }

  onEventReceived(){
    
  }

  onClick(event){
    if(this.refs.input_task.getValue() === ""){
      this.setState({output: "Introduce una tarea"});
    }
    this.props.onClick(event);
  }
  
  handleOnClick()
  {
      
  } 
  handleChange(event) 
  {      
    this.setState({path: event.target.value});  
  }

  changeSelect = () => {
    if(this.state.sex === 0){
      this.setState({sex: 1});
      this.showAlertMujer();
    }else{
      this.setState({sex: 0});
      this.showAlertHombre();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <AlertContainer ref={a => this.msg = a}{...this.alertOptions}/>
            <form className="form-group">

              <div><Link to='/HospitalInsertarNombre'><button type="button" onClick={this.handleOnClick}>Volver Atrás</button></Link></div><br/>          
              
              <label>Introduzca su sexo</label>
              <div className="radio">
                <label>         
                  <input id="Hombre" type="radio" name="sexo" value={0} checked={this.state.sex === 0} onChange={this.changeSelect}/>
                  Hombre
                </label>
              </div>  
              <div className="radio">
                <label>
                  <input id="Mujer" type="radio" name="sexo" value={1} checked={this.state.sex === 1} onChange={this.changeSelect}/>
                  Mujer
                </label>
              </div>
              
              <label>A que especialidad desea asistir</label>
              <div className="checkbox">
                <label>
                  <input input type="checkbox" onClick={this.showAlertCardiologia}/>
                  Cardiologia
                </label>

                <label>
                  <input input type="checkbox" onClick={this.showAlertNeurocirugia}/>
                  Neurocirugia
                </label>

                <label>
                  <input input type="checkbox" onClick={this.showAlertCirugia}/>
                  Cirugia
                </label>

                <label>
                  <input input type="checkbox" onClick={this.showAlertRadiologia}/>
                  Radiologia
                </label>
              </div> 

              <ul>
              <div><Link to= '/HospitalSwitch'><button type="button" onClick={this.handleOnClick}>Siguiente</button></Link></div><br/>  
              </ul>

            </form> 
              
          </div>
        </div>     
      </div>
    );
  } 
}

export default HospitalCheckbox;