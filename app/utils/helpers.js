var React = require('react');
var axios = require('axios');



function getTopStories () {
	return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
}

function getIndividualStories() {
	return axios.get('https://hacker-news.firebaseio.com/v0/item/12052086.json');
}

var helpers = {
	getHackerData: function() {
		return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
			.then(function(result) {
				console.log(result.data);
				return axios.all(result.data.map(function (topStory) {
				console.log(topStory);
				// 	return axios.get('https://hacker-news.firebaseio.com/v0/item/' + topStory + '.json'))
				// });
			}));
		})
	}
};







module.exports = helpers;