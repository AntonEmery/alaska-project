var React = require('react');
var ReactDOM = require('react-dom');


var Main = React.createClass({

	render: function() {
		return (
			<div className="container">
				<header>
					<p>Header here</p>
				</header>
					{this.props.children}
				<footer>
					<p>Footer</p>
				</footer>
			</div>
		);
	}
});

module.exports = Main;