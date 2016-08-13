var React = require('react');
var ReactDOM = require('react-dom');

var PostDetails = React.createClass({
  render:function(){
    console.log(this.props);
    return (
      <p>{this.props.params.index}</p>
    )
  }
});

module.exports = PostDetails;