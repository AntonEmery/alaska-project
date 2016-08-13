var React = require('react');
var ReactDOM = require('react-dom');
var Posts = require('../components/Posts');
var jsonp = require('jsonp');



var PostsContainer = React.createClass({
  // getInitialState: function() {
  //   return {
  //     loading: this.props.status
  //   };
  // },
  
  render: function() {
    console.log(this.props.apiData);
    return (
      <Posts   
      data={this.props.apiData}
      //loading={this.props.status}
      />
    );
  }
});

module.exports = PostsContainer;