var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherFormMessage = require('WeatherFormMessage');

var Weather = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm/>
        <WeatherFormMessage/>
      </div>
    );
  }
});

module.exports = Weather;
