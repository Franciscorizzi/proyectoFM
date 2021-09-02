import React from "react";
import BotonMas from "./Components/BotonMas/BotonMas";
import CardContainer from "./Components/CardContainer/CardContainer";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
        <Header/>
    <main>

        <BotonMas/>
        <CardContainer/>

  </main>
  <div></div>
        <Footer/>
    </div>
  );

}

export default App;

