var React = require('react');
var ReactDOM = require('react-dom');



var IndividualPost =  React.createClass({
	render: function(){
		console.log(this.props.post);
		var testData = this.props.post.map(function(item) {
			return <div><p>{item.text}</p><p>{item.feed_type}</p></div>
		});
		return <div>{testData}</div>
	}
});

module.exports = IndividualPost

