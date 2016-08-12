var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var PostsContainer = require('../containers/PostsContainer');
var Comments = require('../components/Comments');
var Posts = require('../components/Posts');
var PostDetails = require('../components/PostDetails');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={PostsContainer} />
			<Route path='PostDetails:index' component={PostDetails} />
		</Route>
	</Router>
)

module.exports = routes;