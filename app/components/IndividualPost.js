var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;



var IndividualPost =  React.createClass({
  render: function(){
    console.log(this.props.post);
    var testData = this.props.post.map(function(item, index) {
      	console.log(item);
      return (
        <div> 
          <p key={index}>{item.feed_type}</p>
          <Link to={"PostDetails" + item}>Details</Link>
        </div>
      )
    });
    return <div>{testData}</div>
  }
});

module.exports = IndividualPost;

