import React, { Component } from "react";
import Card from "../Card/Card";

class CardContainer extends Component {
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
    <section class="card-container">
        <Card/>
        <Card/>
        <Card/>   
        <Card/>
        <Card/> 
        <Card/>       
        <Card/>        
        <Card/>        
        <Card/>
</section>
  );
  }
}

export default CardContainer;


