const axios = require('axios');

const fetchPost = async id => {
	const results = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(results);
	return results;
};

module.exports = fetchPost;
