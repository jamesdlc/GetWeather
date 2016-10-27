var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherFormMessage = require('WeatherFormMessage');

var Weather = React.createClass({
  getInitialState: function () {
    return{
      location: 'Miami',
      temp: 89
    }
  },
  handleSearch: function (location) {
    this.setState({
      location: location,
      temp: 82
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
