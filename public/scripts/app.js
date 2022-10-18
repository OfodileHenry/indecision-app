"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndecisionApp = require("./components/IndecisionApp");

var _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);

var _validator = require("validator");

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_IndecisionApp2.default, null), document.getElementById("app"));

var template = _react2.default.createElement(
  "p",
  null,
  "This is from the react template"
);
var valid = _validator2.default.isEmail("henry_ford@gmail.com");
console.log(valid);
// ReactDOM.render(template, document.getElementById("app"));
