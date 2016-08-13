var React = require('react');
var ReactDOM = require('react-dom');

var PostDetails = React.createClass({
  render: function(){
  console.log(this.props);
    return (
      <div>
      <p>{this.props.params.index}</p>
      </div>
    )
  }
});

module.exports = PostDetails;