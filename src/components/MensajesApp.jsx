import React, { useState } from "react";

const MensajesApp = () => {
  const [isActive, setIsActive] = useState(false);

  //   if (isActive) {
  //     console.log("Estoy activo :)");
  //   } else {
  //     console.log("Me inactivaron :(");
  //   }

  //operador ternario - condicional
  // console.log(isActive ? "Estoy activo :)" : "Me inactivaron :(");
  //   console.log(isActive && "Estoy activo en verdadero");

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h3>Mensajes App</h3>
          {isActive ? (
            <button
              className="btn btn-danger"
              onClick={() => setIsActive(false)}
            >
              Hide
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => setIsActive(true)}
            >
              Show
            </button>
          )}

          {isActive && (
            <div className="alert alert-info mt-3" role="alert">
              Bienvenidos RollingCoders!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MensajesApp;
