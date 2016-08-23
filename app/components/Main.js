var React = require('react');
var ReactDOM = require('react-dom');
var jsonp = require('jsonp');



var Main = React.createClass({

	getInitialState: function() {
    return {
      posts: [],
      loading: true
    };
  },

	componentDidMount: function() {
    var that = this;
    jsonp('https://platform.postano.com/apiproxy/jsonp/accounts/4299/projects/82658/products/13196/posts', null, function (err, data) {
    if (err) {
      console.error(err.message);
  } else {
      var dataArray = [];
      for(i=0; i<data.length; i++) {
        dataArray.push(data[i]);
      }
      that.setState({loading: false, posts: dataArray});
    }
  })
},

  render: function() {
    return (
      <div>
        <div className="container-fluid header">
          <div className="row">
            <a href="/"><img src="img/logo.png" className="img-responsive" /></a>
          </div>
        </div>

        <div className="container card-area wrapper">
          <div className="row row-centered">
           {this.state.loading ?
           	<p id="loading">Loading...</p> :
           	React.cloneElement(this.props.children, { apiData: this.state.posts, status: this.state.loading})}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;