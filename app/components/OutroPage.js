var React = require('react');


var OutroPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  goHome: function() {
    var that = this;
    setTimeout(function() {
      that.context.router.push({
        pathname: '/'
      })
    }, 5000)
  },
  componentDidMount: function() {
    this.goHome();
  },
  render: function() {
    return (
      <div>
      <p id="outro-text">Why do you fly Alaska?</p>
      </div>
    );
  }

});

module.exports = OutroPage;