var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var PostsContainer = require('../containers/PostsContainer');
var Comments = require('../components/Comments');

var routes = (
	<Router>
		<Route path='/' component={Main}>
			<IndexRoute component={PostsContainer} />
			<Route path='/Comments' component={Comments} />
		</Route>
	</Router>
)

module.exports = routes;