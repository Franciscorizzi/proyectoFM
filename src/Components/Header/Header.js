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
<h1>Cinematiic</h1>
</div>

  );
  }
}

export default Header;


