import React, { Component } from "react";

class Buscador extends Component {
  constructor(props){
    super(props)
    this.state = {
        valor: ''
    }
  }
  evitarSubmit(e){
    e.preventDefault()
  }
  controlarCambios(event){
      this.setState({valor: event.target.value},
        ()=> this.props.busco(this.state.valor)
        )

  }

  render(){
  return (
        <form onSubmit={(event)=> this.evitarSubmit(event)}>
            <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} placeholder="Buscar película..."/>
            <i className="fas fa-search"></i>
        </form>
  );
  }
}

export default Buscador; 