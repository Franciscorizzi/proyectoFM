import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardContainer.css"

class CardContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      datos: [],
      isLoaded: false,
      nextUrl: "",
      filas: true
    }
  }

  

  componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=03b517a9f2edfa25ab3d037039a1d2f9&language=en-US&page=1')
    .then(response => response.json())
    .then( data => this.setState(
      {
        datos: data.results,
        isLoaded: true,
        nextUrl: data.page + 1
      }
    ) )
    .catch( error => console.log(error) )
  }

  AddMore(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=03b517a9f2edfa25ab3d037039a1d2f9&language=en-US&page=${this.state.nextUrl}`)
    .then(response => response.json())
    .then( data => {
        console.log(data.results);
        this.setState({datos: this.state.datos.concat(data.results), nextUrl: data.page + 1})
    })
    .catch(error=> console.log(error))
}

deleteCard(peliculaABorrar){
  let peliculasQueQuedan = this.state.datos.filter( pelicula => pelicula.id !== peliculaABorrar)

  this.setState({datos: peliculasQueQuedan})

}

cambiarAColumnas(){

  this.setState({
    filas: false
  })

}

cambiarAFilas(){
  
  this.setState({
    filas: true
  })

}

  render(){
  return (
    <React.Fragment>
      <section className="headercito">
    <div className="iconos">
    <i  onClick={()=>this.cambiarAFilas()} className="fas fa-th"></i>
    <i onClick={()=>this.cambiarAColumnas()} className="fas fa-align-justify"></i>
    </div>
    <form action="">
        <input type="text" name="search" id="" placeholder="Search"/>
        <button type="submit"><i className="fas fa-search"></i></button>
    </form>
    
</section>
<br></br>

      <section className={this.state.filas ? 'card-container-en-filas' : 'card-container-en-columnas'}>
       
     {this.state.datos.map( (pelicula, idx) => <Card direccion={this.state.filas} dataMovie={pelicula} remove={(peliculaABorrar)=> this.deleteCard(peliculaABorrar)} key={idx}/>) }
       
</section>
 <div className="cargar-mas">
 <button onClick={()=>this.AddMore()} type="button">Cargar más peliculas</button>
 </div>
 </React.Fragment>
  );
  }
}

export default CardContainer;


