var React = require('React');


var Main = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row header">
					<div className="col-md-12">
						<p>Header</p>
					</div>
				</div>
					{this.props.children}
				<div className="row footer">
					<div className="col-md-12">
						<p>Footer</p>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Main;