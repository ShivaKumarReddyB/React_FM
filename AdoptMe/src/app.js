import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./Details";
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
      <header>
        <Link to="/">Adopt Me</Link>
      </header>

      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

// Rendring the function to the dom
render(<App />, document.getElementById("root"));
