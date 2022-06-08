import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/menu/Navbar";
import RoutesApp from "./routes/RoutesApp";

// import CounterApp from "./components/CounterApp";
// import MensajesApp from "./components/MensajesApp";
// import MoviesApp from "./components/MoviesApp";
// import IntroApp from "./components/ciclo_vida/IntroApp";

const App = () => {
  const valorInicial = 5;
  const mensaje = "Esto es un contador";
  // const alumno = "Josefina Listorti";
  //va todo lo que sea javascript

  return (
    // todo lo que sea JSX
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <h1>Intro App</h1>
          <hr />
          {/* <MoviesApp /> */}
          {/* <CounterApp valor={valorInicial} mensaje={mensaje} /> */}
          {/* <MensajesApp /> */}
          {/* <IntroApp /> */}
          <BrowserRouter>
            <Navbar />
            <RoutesApp />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default App;
