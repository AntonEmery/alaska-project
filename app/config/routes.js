var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Posts = require('../components/Posts');
var Comments = require('../components/Comments');

var routes = (
	<Router>
		<Route path='/' component={Main}>
			<IndexRoute component={Posts} />
			<Route path='/Comments' component={Comments} />
		</Route>
	</Router>
)

module.exports = routes;