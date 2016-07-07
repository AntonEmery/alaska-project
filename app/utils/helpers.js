var React = require('react');
var Firebase = require('firebase');
var app = new Firebase('https://hacker-news.firebaseio.com/v0/');


function hackerNewsApi() {
	app.child('topstories').on('value', function(snapshot) {
  topStoryIds = snapshot.val()
  console.log(snapshot);
})
	};

var helpers = {
	getHackerData: function() {
		hackerNewsApi();

		}
	
}





module.exports = helpers;