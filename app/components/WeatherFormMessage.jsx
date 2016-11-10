var React = require('react');

var WeatherFormMessage = ({temp, location}) => {
  return (
    <div>
      <p> It's {temp} degrees in {location} right now. </p>
    </div>
  );
};

module.exports = WeatherFormMessage;
