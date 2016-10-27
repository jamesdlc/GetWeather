var React = require('react');

var WeatherFormMessage = React.createClass({
  render: function () {
    var {location, temp} = this.props;
    return (
      <div>
        <p> It's {temp} degrees in {location} right now. </p>
      </div>
    );
  }
})

module.exports = WeatherFormMessage;
