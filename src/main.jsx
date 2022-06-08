// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//Promesas
const promesa = () => {
  return new Promise((resolve, reject) => {
    let respuestaServer = true;
    setTimeout(() => {
      if (respuestaServer) {
        resolve("La promesa se hizo correctamente :)");
      } else {
        reject("Error en la petición");
      }
    }, 2000);
  });
};

promesa()
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => console.log(error));

//Fetch API

const getGifRandom = async () => {
  try {
    const resp = await fetch(
      "https://api.giphy.com/v1/gifs/random?api_key=yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf&tag=superman"
    );
    const { data } = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

getGifRandom().then((data) => {
  // console.log(data);
  const { url } = data.images.original;
  console.log(url);
});
