var React = require('react');
var ReactDOM = require('react-dom');
var helpers = require('../utils/helpers');
var Posts = require('../components/Posts');


var PostsContainer = React.createClass({
		
	getInitialState: function() {
		return {
			loading: true,
			posts: []
		};
	},
	componentDidMount: function() {
		var that = this;
		helpers.getHackerData()
			.then(function(topStory) {
				var dataArray = []
				for(i=0; i<topStory.length; i++) {
				console.log(topStory[i].data);
				dataArray.push(topStory[i].data);
				}
				that.setState({loading: false, posts: dataArray });
			})
	},
	render: function() {
		return (
			<Posts   
			data={this.state.posts}
			stuff="Yay"
			loading={this.state.loading}
			/>
		);
	}
});

module.exports = PostsContainer;