var React = require('react');
var ReactDOM = require('react-dom');

function puke(obj) {
		return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

var IndividualPost =  React.createClass({
  render: function(){
  	console.log(this.props.post);
  	var testData = this.props.post.map(function(item) {
  		return <div>{item.text} {item.feed_type}</div>
  	});
    return <div>{testData}</div>
	}
});

module.exports = IndividualPost

