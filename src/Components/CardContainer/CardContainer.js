import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardContainer.css";
import Buscador from "../Buscador/Buscador";

class CardContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      datos: [],
      isLoaded: false,
      nextUrl: "",
      filas: true,
      peliculasFiltradas: [],
    }
  }

  

  componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=03b517a9f2edfa25ab3d037039a1d2f9&language=en-US&page=1')
    .then(response => response.json())
    .then( data => this.setState(
      {
        datos: data.results,
        peliculasFiltradas: data.results,
        isLoaded: true,
        nextUrl: data.page + 1,
      }
    ) )
    .catch( error => console.log(error) )
  }

  AddMore(){
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=03b517a9f2edfa25ab3d037039a1d2f9&language=en-US&page=${this.state.nextUrl}`)
    .then(response => response.json())
    .then( data => {
        console.log(data.results);
        this.setState({peliculasFiltradas: this.state.peliculasFiltradas.concat(data.results), nextUrl: data.page + 1, datos: this.state.datos.concat(data.results)})
    })
    .catch(error=> console.log(error))
}

deleteCard(peliculaABorrar){
  let peliculasQueQuedan = this.state.peliculasFiltradas.filter( pelicula => pelicula.id !== peliculaABorrar)
  let peliculasQueDejamos = this.state.datos.filter( pelicula => pelicula.id !== peliculaABorrar)

  this.setState({peliculasFiltradas: peliculasQueQuedan, datos: peliculasQueDejamos})

}


cambioAFilas(){
  this.setState({filas: true})
}

cambioAColumnas(){
  this.setState({filas: false})
}

filtrarPeliculas(texto){
    let peliculasBuscadas = this.state.datos.filter(pelicula => pelicula.title.toLowerCase().includes(texto.toLowerCase()))
    
    this.setState({peliculasFiltradas: peliculasBuscadas})
}


  render(){
    if(this.state.peliculasFiltradas.length === 0){
      return (
        <React.Fragment>
      <section className="headercito">
    <div className="iconos">
    <i  onClick={()=>this.cambioAFilas()} className="fas fa-th"></i>
    <i onClick={()=>this.cambioAColumnas()} className="fas fa-align-justify"></i>
    {/* <h2 onClick={()=> this.ordenarPeliculas()}>A-Z</h2> */}
    </div>
  <Buscador busco={(texto)=> this.filtrarPeliculas(texto)}/>    
</section>
<br></br>

      <section className={this.state.filas ? 'card-container-en-filas' : 'card-container-en-columnas'}>
       
      { this.state.isLoaded === false ? 
            <p>Cargando...</p> : <p className="sin-resultados-busqueda">No se encontraron resultados para tu busqueda.</p> }
</section>
 <div className="cargar-mas">
 <button onClick={()=>this.AddMore()} type="button">Cargar más peliculas</button>
 </div>
 </React.Fragment>
      )
    } else {
  return (
    <React.Fragment>
      <section className="headercito">
    <div className="iconos">
    <i  onClick={()=>this.cambioAFilas()} className="fas fa-th"></i>
    <i onClick={()=>this.cambioAColumnas()} className="fas fa-align-justify"></i>
    </div>
  <Buscador busco={(texto)=> this.filtrarPeliculas(texto)}/>    
</section>
<br></br>

      <section className={this.state.filas ? 'card-container-en-filas' : 'card-container-en-columnas'}>
       
      { this.state.isLoaded === false ? 
            <p>Cargando...</p> : 
     this.state.peliculasFiltradas.map( (pelicula, idx) => <Card direccion={this.state.filas} dataMovie={pelicula} remove={(peliculaABorrar)=> this.deleteCard(peliculaABorrar)} key={idx}/>) 
      }
</section>
 <div className="cargar-mas">
 <button onClick={()=>this.AddMore()} type="button">Cargar más peliculas</button>
 </div>
 </React.Fragment>
  );
    }
  }
}

export default CardContainer;


