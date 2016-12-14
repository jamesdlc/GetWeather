var React = require('react');

var WeatherFormMessage = ({temp, location}) => {
  return (
    <div>
      <h4 className="text-center"> It's {temp} degrees in {location} right now. </h4>
    </div>
  );
};

module.exports = WeatherFormMessage;
