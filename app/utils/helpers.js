var React = require('react');
var axios = require('axios');

function hackerNewsApi() {
		//return axios.get('https://hacker-news.firebaseio.com/v0/');
	};

var helpers = {
	getHackerData: function() {
		return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json'); 

		}
	
}





module.exports = helpers;