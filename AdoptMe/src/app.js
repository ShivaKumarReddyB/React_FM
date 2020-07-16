import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./searchParams";
const App = () => {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Adopt me"),
  //   React.createElement(Pet, { name: "Tom", animal: "Cat" }),
  //   React.createElement(Pet, { name: "Oggy", animal: "Cat" }),
  //   React.createElement(Pet, { name: "Boxer", animal: "Dog" })
  // );
  return (
    <div>
      <h1 id="something-important">Adopt Me</h1>
      <SearchParams />
    </div>
  );
};

// Rendring the function to the dom
render(<App />, document.getElementById("root"));
