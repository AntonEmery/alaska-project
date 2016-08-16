var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var RouteHandler = Router.RouteHandler;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var IntroPage = require('../components/IntroPage');
var PostsContainer = require('../containers/PostsContainer');
var Comments = require('../components/Comments');
var IndividualPost = require('../components/IndividualPost.js');
var PostDetails = require('../components/PostDetails');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={IntroPage} />
      <Route path="PostsContainer" component={PostsContainer} />
		</Route>
	</Router>
)

module.exports = routes;