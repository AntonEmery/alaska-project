var React = require('react');
var Firebase = require('firebase');
var app = new Firebase('https://hacker-news.firebaseio.com/v0/');


function hackerNewsApi() {
		//return axios.get('https://hacker-news.firebaseio.com/v0/');
	};

var helpers = {
	getHackerData: function() {
		return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json'); 
};





module.exports = helpers;