import React from "react";
// import CounterApp from "./components/CounterApp";
import MensajesApp from "./components/MensajesApp";
// import MoviesApp from "./components/MoviesApp";

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
          <MensajesApp />
        </div>
      </div>
    </div>
  );
};

export default App;
