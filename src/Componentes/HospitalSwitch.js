import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Alert from 'react-s-alert';

class HospitalSwitch extends Component {
  
  constructor(props){
    super(props) 
  } 

  Alert ={
    position: 'bottom-right',
    effect: 'slide',
    html: false
  }

  handleClick1(e) {
    e.preventDefault();
    Alert.warning('Doctor Jose Plasencia', {
        position: 'top-right',
        effect: 'scale',
        onShow: function () {
            console.log('aye!')
        },
        beep: false,
        timeout: 'none',
        offset: 100
    });
  }

  handleClick2(e) {
      e.preventDefault();
      Alert.info('Doctora María Lopez Hernández', {
          position: 'bottom-left',
          effect: 'bouncyflip',
          timeout: 'none'
      });
  }
  handleClick3(e) {
      e.preventDefault();
      Alert.error('Doctor Carlos Suarez Naranjo', {
          position: 'bottom-right',
          effect: 'slide',
          timeout: 'none'
      });
  }

  handleClick4(e) {
    e.preventDefault();
    Alert.error('Doctor Antonio Sanchez', {
        position: 'bottom-right',
        effect: 'slide',
        timeout: 'none'
    });
  }

  handleCloseAll(e) {
      e.preventDefault();
      Alert.closeAll();
  }
  
  render() {
    return (
      <div>
        <div>
        <div><Link to= '/HospitalQuienEsTuMedico'><button type="button" onClick={this.handleOnClick}>Volver Atrás</button></Link></div><br/>    
          <a href="#" onClick={this.handleClick1}>Cardiologia</a> |
          <a href="#" onClick={this.handleClick2}>Neurocirugia</a> |
          <a href="#" onClick={this.handleClick3}>Cirugia</a> |
          <a href="#" onClick={this.handleClick4}>Radiologia</a> |
          <a href="#" onClick={this.handleCloseAll}>Limpiar Pantalla</a>
          <span>
            {this.props.children}
          </span>
          <Alert stack={{limit: 3}} />
        </div>
      </div>      
    )
  } 
} 

export default HospitalSwitch;