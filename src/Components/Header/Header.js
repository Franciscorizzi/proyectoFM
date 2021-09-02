import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
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
<header>
<h1>Cinematiic</h1>
<section className="headercito">
    <p>Ordenar ASC/ DESC</p>
    <div className="iconos">
    <i class="fas fa-th"></i>
    <i class="fas fa-align-justify"></i>
    </div>
    <form action="">
        <input type="text" name="search" id="" placeholder="Search"/>
        <button type="submit"><i class="fas fa-search"></i></button>
    </form>
</section>
</header>
  );
  }
}

export default Header;


