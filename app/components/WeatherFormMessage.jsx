var React = require('react');

var WeatherFormMessage = (props) => {
  var {location, temp} = props;
  return (
    <div>
      <p> It's {temp} degrees in {location} right now. </p>
    </div>
  );
};

module.exports = WeatherFormMessage;
