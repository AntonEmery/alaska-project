var React = require('react');
var ReactDOM = require('react-dom');

var PostDetails = React.createClass({
  render:function(){
    console.log(this.props);
    return (
      <p>Post Details</p>
    )
  }
});

module.exports = PostDetails;