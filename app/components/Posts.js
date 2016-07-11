var React = require('react');
var ReactDOM = require('react-dom');
var helpers = require('../utils/helpers');


var Posts = React.createClass({
		puke: function(obj) {
		return <pre>{JSON.stringify(obj, null, ' ')}</pre>
	},
	getInitialState: function() {
		return {
			loading: true
		};
	},
	componentDidMount: function() {
		var that = this;
		helpers.getHackerData()
			.then(function(topStory) {
				for(i=0; i<topStory.length; i++) {
				console.log(topStory[i].data);
				}
				that.setState({loading: false});
			})
	},
	render: function() {
		return (
		this.state.loading ?
			<p>Loading</p>
		: <p>Posts Loaded</p>
		);
	}
});

module.exports = Posts;