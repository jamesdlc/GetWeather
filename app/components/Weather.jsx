var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherFormMessage = require('WeatherFormMessage');

var Weather = React.createClass({
  handleSearch: function (location) {
    alert(location);
  },
  render: function () {
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherFormMessage/>
      </div>
    );
  }
});

module.exports = Weather;
