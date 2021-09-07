import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardContainer.css"

class CardContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      datos: [],
      isLoaded: false,
      nextUrl: ""
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


  render(){
    console.log(this.state.datos);
  return (
    <React.Fragment>
      <section class="card-container">
       
     {this.state.datos.map( (pelicula, idx) => <Card dataMovie={pelicula} remove={(peliculaABorrar)=> this.deleteCard(peliculaABorrar)} key={idx}/>) }
       
</section>
 <div>
 <button onClick={()=>this.AddMore()} type="button">Cargar más peliculas</button>
 </div>
 </React.Fragment>
  );
  }
}

export default CardContainer;


