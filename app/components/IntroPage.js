var React = require('react');


var IntroPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  goToPosts: function() {
    var that = this;
    setTimeout(function() {
      that.context.router.push({
        pathname: '/PostsContainer'
      })
    }, 5000)
  },
  componentDidMount: function() {
    this.goToPosts();
  },
  render: function() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
      <p id="intro-text">This is why #iflyalaska</p>
      </div>
    );
  }

});

module.exports = IntroPage;