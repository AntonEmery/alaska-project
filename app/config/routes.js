var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var RouteHandler = Router.RouteHandler;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var IntroPage = require('../components/IntroPage');
var OutroPage = require('../components/OutroPage')
var PostsContainer = require('../containers/PostsContainer');
var IndividualPost = require('../components/IndividualPost.js');

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={IntroPage} />
      <Route path="PostsContainer" component={PostsContainer} />
      <Route path="OutroPage" component={OutroPage} />
		</Route>
	</Router>
)

module.exports = routes;