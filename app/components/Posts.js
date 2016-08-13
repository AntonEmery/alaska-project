var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var IndividualPost = require('./IndividualPost.js');

function Posts(props) {
  return (
    <IndividualPost
    post={props.data}
     />
  );
}


module.exports = Posts;