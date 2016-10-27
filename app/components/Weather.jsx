var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherFormMessage = require('WeatherFormMessage');
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({
  getInitialState: function () {
    return{
      location: 'Miami',
      temp: 89
    }
  },
  handleSearch: function (location) {
    var that = this;
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
      alert(errorMessage);
    });
  },
  render: function () {
    var {location, temp} = this.state;
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherFormMessage location={location} temp={temp}/>
      </div>
    );
  }
});

module.exports = Weather;
