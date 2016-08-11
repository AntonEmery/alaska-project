var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var PostsContainer = require('../containers/PostsContainer');
var Comments = require('../components/Comments');
var Posts = require('../components/Posts');

var routes = (
	<Router>
		<Route path='/' component={Main}>
			<IndexRoute component={PostsContainer} />
			<Route path='/Posts' component={Posts} />
		</Route>
	</Router>
)

module.exports = routes;