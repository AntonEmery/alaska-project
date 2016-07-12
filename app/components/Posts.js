var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');


function puke(obj) {
		return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function Posts(props) {
		console.log(props);
		return (
		props.loading ?
			<p>Loading</p> :
			<p>Data Loaded</p> 
		);
	}

module.exports = Posts;