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
  advancePost: function() {
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
  componentDidMount: function() {
    console.log('component did mount');
  },
  doesIconExist: function(iconUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', iconUrl, false);
    xhr.send();

    if(xhr.status == '404') {
      return false; 
    } else {
        return true;
    }
  },
  renderIcon: function(arrayItem) {
    if (!this.doesIconExist(arrayItem.user.icon)) {
      return;
    } else {
        return (
          <img src={arrayItem.user.icon} className="img-responsive" />
        )
    }
  },
  renderImage: function(arrayItem) {
    if (!arrayItem.images.length) {
      return;
    } else {
        return (
          <img src={arrayItem.images[0].url} className="img-responsive" />
        )
    }
  },

  render: function(){
    console.log('rerendering');
    var that = this;
    console.log(this.props);
    var testData = this.state.arrayOfSlides.map(function(item, index) {
      return (
        <div className="col-md-3 post-card col-centered"> 
          {that.renderImage(that.props.data[item])} 
          <p dangerouslySetInnerHTML={{__html: that.props.data[item].text}} key={index}></p>
          {that.renderIcon(that.props.data[item])}
          <p>{that.props.data[item].user.screen_name}</p>
        </div>
      )
    });
    return  <div> 
          <div>{testData}</div>
          <p>{setTimeout(function() {that.advancePost()}, 3000)}</p>
          </div>
  }
});

module.exports = IndividualPost;

