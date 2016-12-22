var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
  <div>
    <h1 className="text-center page-title">About</h1>
    <p>Weather application using the Open Weather Map API built on React, by James de la Cruz.</p>
    <p><strong>Tools Used</strong></p>
    <ul>
      <li>
        <a href="http://facebook.github.io/react">React</a> - The JavaScript library I used.
      </li>
      <li>
        <a href="http://openweathermap.org">Open Weather Map</a> - I used to the Open Weather Map API to look up weather data by city name.
      </li>
      <li>
        <a href="http://foundation.zurb.com">Foundation</a> - FrontEnd framework I used to make the site look pretty.
      </li>
    </ul>
    <p><strong>More About James de la Cruz</strong></p>
    <ul>
      <li>
        <a href="http://www.github.com/jamesdlc">GitHub</a>
      </li>
      <li>
        <a href="http://www.jamesdlc.com">Portfolio</a>
      </li>
      <li>
        <a href="http://www.linkedin.com/in/jamesdelacruz">LinkedIn</a>
      </li>
    </ul>
  </div>
  )
};

module.exports = About;
