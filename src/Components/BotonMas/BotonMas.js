import React, { Component } from "react";

class BotonMas extends Component {
  constructor(props){
    super(props)
    this.state = {
      ver: 'más',
      viewMore: false,
      descripcion: false
    }
  }

  render(){
  return (
    <div>
    <button type="button">Cargar más tarjetas</button>
    </div>
  )
  }
}

export default BotonMas;
