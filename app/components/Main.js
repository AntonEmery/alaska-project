var React = require('React');


var Main = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12 header">
						<a id="ycLogo" href="http://www.ycombinator.com">
							<img src="https://news.ycombinator.com/y18.gif" />
						</a>
						<h1 id="title">Hacker News</h1>
					</div>
				</div>
					{this.props.children}
				<div className="row footer">
					<div className="col-md-12">
						<p>Footer</p>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Main;