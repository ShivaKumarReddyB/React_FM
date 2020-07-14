import React from "react";
import { render } from "react-dom";
import Pet  from "./Pet";
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, { name: "Tom", animal: "Cat" }),
    React.createElement(Pet, { name: "Oggy", animal: "Cat" }),
    React.createElement(Pet, { name: "Boxer", animal: "Dog" })
  );
};

// Rendring the function to the dom
render(React.createElement(App), document.getElementById("root"));
