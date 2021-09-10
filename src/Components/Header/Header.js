import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      ver: 'más',
      viewMore: false,
      descripcion: false,
    }
  }

 

  render(){
  return (

  <div className="titulardo">
    <img src="./images/titulo-movie-joe.png" alt="titulomoviejoe"></img>
</div>

  );
  }
}

export default Header;


