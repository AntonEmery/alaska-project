var React = require('react');
var axios = require('axios');



function getTopStories () {
	return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
}

function getIndividualStories(storyId) {
	return axios.get('https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json');
}

var helpers = {
	getHackerData: function() {
		return getTopStories()
			.then(function(result) {
				return axios.all(result.data.map(function (topStory) {
					return getIndividualStories(topStory);
				}))
			}
		)		
	}
};







module.exports = helpers;