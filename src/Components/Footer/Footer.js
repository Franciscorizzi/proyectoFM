import React, { Component } from "react";
import "./Footer.css"

class Footer extends Component {
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
<footer>
<div class="team">
    <div><p>Francisco Rizzi</p></div>
    <div><p>Matteo Lang</p></div>
</div>
</footer>
  );
  }
}

export default Footer;

