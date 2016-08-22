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
    }, 7000)
  },
  render: function() {
    return (
      <div>
      <p id="intro-text">This is why #iflyalaska</p>
      <p>{this.goToPosts()}</p>
      </div>
    );
  }

});

module.exports = IntroPage;