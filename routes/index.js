var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/articles', (req, res) => {
	fetch(`https://newsapi.org/v2/everything?q=video-games&apiKey=8417ef0137d3435da1db839eb0d10f87`)
		.then(response => response.json())
		.then(data => {

			res.json({ results: data });
		});
});

module.exports = router;
