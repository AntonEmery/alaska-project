var React = require('react');

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
    if (testArray[testArray.length - 1] > (this.props.data.length -1)) {
      this.context.router.push({
        pathname: 'OutroPage'
      })
    } else {
    this.setState({arrayOfSlides: testArray});
    }
  },
  // called after initial render
  componentDidMount: function() {
    var that = this;
    setTimeout(function() {
      that.advancePost()
    }, 3000)
  },

  // //called on state change after initial render
  componentDidUpdate: function() {
    var that = this;
    setTimeout(function() {
      that.advancePost()
    }, 2000)
  },

  //check to see if user has avatar image
  doesAvatarExist: function(iconUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', iconUrl, false);
    xhr.send();

    if(xhr.status == '404') {
      return false;
    } else {
        return true;
    }
  },

  //render avatar image
  renderAvatar: function(arrayItem) {
    if (!this.doesAvatarExist(arrayItem.user.icon)) {
      return;
    } else {
        return (
          <div className="avatar">
            <img src={arrayItem.user.icon} className="img-responsive" />
          </div>
        )
    }
  },

  //render appropriate social icon
  socialIcon: function(arrayItem) {
    if(arrayItem.source_type == 'instagram') {
        return <img src="/img/logo-instagram.png" className="social-icon" />
    } else if(arrayItem.source_type == 'twitter') {
        return <span className="origin-logo"></span>
    } else {
        return <img src="/img/logo-vine.png" className="social-icon" />
    }
  },

  //render image user posted
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
    var that = this;
    var testData = this.state.arrayOfSlides.map(function(item, index) {
      return (
        <div className="col-md-3 post-card col-centered">
          {that.renderImage(that.props.data[item])}
          {that.renderAvatar(that.props.data[item])}
          <p className="full-name">{that.props.data[item].user.full_name}</p>
          <p className="user-name">{that.props.data[item].user.screen_name}</p>
          {that.socialIcon(that.props.data[item])}
          <p className="post-text" dangerouslySetInnerHTML={{__html: that.props.data[item].text}} key={index}></p>
        </div>
      )
    });
    return  <div>
          <div>{testData}</div>
          </div>
  }
});

module.exports = IndividualPost;
