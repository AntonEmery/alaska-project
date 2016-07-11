var React = require('react');
var ReactDOM = require('react-dom');


var Main = React.createClass({

	render: function() {
		return (
			<div className="container">
				<header>
					<a id="ycLogo" href="http://www.ycombinator.com">
						<img src="https://news.ycombinator.com/y18.gif" />
					</a>
					<h1 id="title">Hacker News</h1>
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