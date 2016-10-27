var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
  name: 'James',
  location: 'Milpitas'
}

var objTwo = {
  age: 25,
  ...objOne //object spread operator 
}

console.log(objTwo);

ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);
