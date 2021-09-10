import React, { Component } from "react";
import "./Card.css"

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      datos: [],
      ver: 'más',
      viewMore: false
    }
  }

  clickeame(){
    if(this.state.ver === 'más'){
    this.setState({ver: 'menos', viewMore: true})
  } else {
    this.setState(
      {
        ver: 'más',
        viewMore: false
      }
    )
  }}
  
  render(){
 
  return (
    
<article className={this.props.direccion ? "" : "todo"}>
<section className={this.props.direccion ? "navigation-para-fila" : "navigation-para-columna"}>
        <div>
            {/* <i class="fas fa-chevron-left"></i>
            <i class="fas fa-chevron-right"></i> */}
        </div>
        <i class="far fa-window-close"  onClick={()=> this.props.remove(this.props.dataMovie.id)} ></i>
    </section>
    <main className={this.props.direccion ? "movie-card-para-filas" : "movie-card-para-columna"}>
        <img src={`https://image.tmdb.org/t/p/w500${this.props.dataMovie.poster_path}`} alt=""/>
   <div className={this.props.direccion ? "" : "data-en-columna"}>

  <h3 className={this.state.viewMore ? 'titulo-entero' : 'titulo'}>{this.props.dataMovie.title}</h3>

{this.props.direccion ? <p class={this.state.viewMore ? 'description-entera' : 'description'}>{this.props.dataMovie.overview}</p> : <p class="description-entera">{this.props.dataMovie.overview}</p>}
  
           
        
          {this.props.direccion ? <div className="aditional-info"> <p className={this.state.viewMore ? 'show' : 'hide'}>Rating: {this.props.dataMovie.vote_average}</p>
        <p className={this.state.viewMore ? 'show' : 'hide'}>Fecha de estreno: {this.props.dataMovie.release_date}</p> 
        <p className={this.state.viewMore ? 'show' : 'hide'}>Cantidad de reproducciones: {this.props.dataMovie.popularity}</p>  <p className="link" onClick={()=>this.clickeame()}>Ver {this.state.ver}</p></div> :  <div className="aditional-info"><p className="show">Rating: {this.props.dataMovie.vote_average}</p>
        <p className="show">Fecha de estreno: {this.props.dataMovie.release_date}</p> 
        <p className="show">Cantidad de reproducciones: {this.props.dataMovie.popularity}</p> </div>}
     
       
       
        </div>     
    </main>
</article>
  );
  }
}

export default Card;





