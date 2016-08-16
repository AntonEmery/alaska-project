var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

var IndividualPost =  React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      arrayOfSlides: [0, 1, 2]
    }
  },
  advanceArray: function() {
    var testArray = this.state.arrayOfSlides.slice()
    var newItem = testArray[testArray.length-1];
    testArray.push(newItem + 1);
    testArray.shift();
    console.log(testArray);
    if (testArray[testArray.length - 1] > (this.props.data.length -1)) {
      this.context.router.push({
        pathname: '/'
      })
    } else {
    this.setState({arrayOfSlides: testArray});
    }
  },
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
    console.log(this.props);
    var testData = this.state.arrayOfSlides.map(function(item, index) {
      return (
        <div className="col-md-4"> 
          <p key={index}>{that.props.data[item].feed_type}</p>
          {that.renderImage(that.props.data[item])} 
        </div>
      )
    });
    return  <div> 
          <div>{testData}</div>
          <button onClick={this.advanceArray}>Advance Array</button>
          </div>
  }
});

module.exports = IndividualPost;

