var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

var IndividualPost =  React.createClass({

  renderImage: function(arrayItem) {
    if (!arrayItem.images.length) {
      return (
        <p>No image</p>
      )
    } else {
        return (
          <img src={arrayItem.images[0].url} className="img-responsive" />
        )
    }
  },
  render: function(){
    var that = this;
    var testData = this.props.post.map(function(item, index) {
      console.log(item);
      return (
        <div className="col-md-4"> 
          <p key={index}>{item.feed_type}</p>
          <Link to={"PostDetails/" + index}>Details</Link>
          {that.renderImage(item)} 
        </div>

      )
    });
    return <div>{testData}</div>
  }
});

module.exports = IndividualPost;

