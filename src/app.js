import React from "react";
import ReactDOM from "react-dom";

import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// const User = () => {
//   return (
//     <div>
//       <Template />
//       <h1>Page Title</h1>
//       <p>The title of the page you seek</p>
//     </div>
//   );
// };
//
// const Template = () => {
//   return (
//     <div>
//       <p>This page right here works just alright!</p>
//     </div>
//   );
// };

// import validator from "validator";
//
// const template = <p>This is from the react template</p>;
// const valid = validator.isEmail("henry_ford@gmail.com");
// console.log(valid);
// ReactDOM.render(template, document.getElementById("app"));
