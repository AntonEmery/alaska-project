var React = require('react');
var ReactDOM = require('react-dom');
var Posts = require('../components/Posts');
var jsonp = require('jsonp');



var PostsContainer = React.createClass({
		
	getInitialState: function() {
		return {
			loading: true,
			posts: []
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
			<Posts   
			data={this.state.posts}
			loading={this.state.loading}
			/>
		);
	}
});

module.exports = PostsContainer;