const Pet = (props) =>{
    return React.createElement("div", {},[
        React.createElement("h1",{},props.name),
        React.createElement("h2",{},props.animal)])
}
const App = () =>{
    return React.createElement(
        "div",
        {},
        React.createElement("h1",{}, "Adopt me"),
        React.createElement(Pet ,{name:"Tom", animal:"Cat"}),
        React.createElement(Pet ,{name:"Oggy", animal:"Cat"}),
        React.createElement(Pet ,{name:"Boxer", animal:"Dog"})
    );
};



// Rendring the function to the dom 
  ReactDOM.render(
      React.createElement(App),
      document.getElementById("root")

  );