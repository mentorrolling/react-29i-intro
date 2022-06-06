import React, { useEffect } from "react";

const MessageApp = () => {
  //Ciclo de vida: Montar y desmontar componente
  useEffect(() => {
    console.log("Me monté :)");

    return () => {
      console.log("Me desmonté :(");
    };
  }, []);

  return (
    <div className="alert alert-warning mt-5" role="alert">
      Se actualizó la lista de películas
    </div>
  );
};

export default MessageApp;
