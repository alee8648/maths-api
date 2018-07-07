const router = require('express').Router();
const _ = require('lodash');

router.get('/', (req,res) => {
	let result = Math.ceil(Math.random() * 20);
	res.send(String(result));
});

module.exports = router;