var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;



var IndividualPost =  React.createClass({
  render: function(){
    var test = this.props;
    console.log(test);
    var testData = this.props.post.map(function(item, index) {
      return (
        <div> 
          <p key={index}>{item.feed_type}</p>
          <Link to={"PostDetails/" + index}>Details</Link>
        </div>

      )
    });
    return <div>{testData}</div>
  }
});

module.exports = IndividualPost;

