var React = require('react');
var axios = require('axios');
var jsonp = require('jsonp');



 
 	function getData () {jsonp('https://platform.postano.com/apiproxy/jsonp/accounts/4299/projects/82658/products/13196/posts', null, function (err, data) {
  if (err) {
    console.error(err.message);
  } else {
   	return (data[0]);
  }
});
 };
 

function getApiData () {
	return axios.get('https://platform.postano.com/apiproxy/jsonp/accounts/4299/projects/82658/products/13196/posts');
}

function getIndividualStories(storyId) {
	return axios.get('https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json');
}

var helpers = {
	data: function() {
		return getData()
			.then(function(result) {
				console.log(result);
				return;
				return axios.all(result.data.map(function (topStory) {
					return getIndividualStories(topStory);
				}))
			}
		)		
	}
};







module.exports = helpers;