var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
  <div>
    <h1 className="text-center">About</h1>
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
    <Link to='www.github.com/jamesdlc'>GitHub</Link> <br />
    <Link to='www.jamesdlc.com'>Portfolio</Link> <br />
    <Link to='www.linkedin.com/jamesdelacruz'>LinkedIn</Link> <br />
  </div>
  )
};

module.exports = About;
