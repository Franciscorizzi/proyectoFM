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
    
<article>
<section class="navigation">
        <div>
            <i class="fas fa-chevron-left"></i>
            <i class="fas fa-chevron-right"></i>
        </div>
        <i class="far fa-window-close"></i>
    </section>
    <main className="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${this.props.dataMovie.poster_path}`} alt=""/>
  <h3>{this.props.dataMovie.title}</h3>
  <p class="description">{this.props.dataMovie.overview}</p>
        <section  class="aditional-info">
        <p className={this.state.viewMore ? 'show' : 'hide'}>Rating: {this.props.dataMovie.vote_average}</p>
        <p className={this.state.viewMore ? 'show' : 'hide'}>Fecha de estreno: {this.props.dataMovie.release_date}</p>
        </section>
        <p className="link" onClick={()=>this.clickeame()}>Ver {this.state.ver}</p>
    </main>
</article>
  );
  }
}

export default Card;





