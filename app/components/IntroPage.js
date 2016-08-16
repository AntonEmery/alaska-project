var React = require('react');


var IntroPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  goToPosts: function() {
    setTimeout(function() {
      this.context.router.push({
        path: '/PostsContainer'
      })
    }, 1000)
  },
  render: function() {
    return (
      <div>
      <p>This is why #iflyalaska</p>
      <p>{this.goToPosts()}</p>
      </div>
    );
  }

});

module.exports = IntroPage;