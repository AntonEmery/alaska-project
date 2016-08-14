var React = require('react');
var ReactDOM = require('react-dom');
var Posts = require('../components/Posts');
var jsonp = require('jsonp');



var PostsContainer = React.createClass({
  
  render: function() {
    console.log(this.props.apiData);
    return (
      <Posts data={this.props.apiData} />
    );
  }
});

module.exports = PostsContainer;