import React, { useState, useEffect } from "react";
import { movies } from "../../data/webflix";
import MessageApp from "./MessageApp";

const IntroApp = () => {
  const [pelis, setPelis] = useState([]);
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  //   console.log(pelis);

  //Ciclo de vida: Montaje
  useEffect(() => {
    //primero defino que quiero que suceda
    setPelis(movies);
    //segundo defino cuando quiero que suceda
  }, []);

  //Ciclo de vida: Actualización
  useEffect(() => {
    //primero defino que quiero que suceda
    console.log("Me actualicé :)");
  }, [pelis]);

  useEffect(() => {
    //primero defino que quiero que suceda
    console.log("Me sumé :)");
  }, [counter]);

  const agregarPeli = () => {
    const newPeli = {
      id: pelis[pelis.length - 1].id + 1,
      title: "Jurassic World: Dominion",
      year: 2022,
    };

    //spread operator
    setPelis([...pelis, newPeli]);

    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Effect Pelis</h3>
          <div>
            <button className="btn btn-outline-primary" onClick={agregarPeli}>
              Agregar Peli
            </button>
            <button
              className="btn btn-outline-secondary ms-2"
              onClick={() => setCounter(counter + 1)}
            >
              {counter}
            </button>
          </div>
          <div>{show && <MessageApp />}</div>
        </div>
      </div>
    </div>
  );
};

export default IntroApp;
