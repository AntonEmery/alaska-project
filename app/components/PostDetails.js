var React = require('react');
var ReactDOM = require('react-dom');

var PostDetails = React.createClass({

  getInitialState: function() {
    return {
      item: parseInt(this.props.params.index)
    }
  },
  render: function(){
  console.log(this.props)
    return (
      <div>
      <p>{this.props.params.index}</p>
      <p>{this.props.apiData[this.state.item].feed_type}</p>
      </div>
    )
  }
});

module.exports = PostDetails;