var React = require('react');
var Navigation = require('Navigation');
var Weather = require('Weather');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
