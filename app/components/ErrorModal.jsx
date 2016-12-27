var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');


var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    var {title, message} = this.props;
    var errModalMarkup = (
      <div id="err-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Try Again
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(errModalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    var errModal = new Foundation.Reveal($('#err-modal'));
    errModal.open();
  },
  render: function () {
    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
