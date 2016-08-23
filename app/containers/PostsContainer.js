var React = require('react');
var ReactDOM = require('react-dom');
var IndividualPost = require('../components/IndividualPost');
var jsonp = require('jsonp');



var PostsContainer = React.createClass({
  
  render: function() {
    return (
      <IndividualPost data={this.props.apiData} />
    );
  }
});

module.exports = PostsContainer;