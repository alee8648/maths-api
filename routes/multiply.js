// External dependencies
const router = require('express').Router();
const debug = require('debug')('Maths');
const _ = require('lodash');

// Internal dependencies
const maths = require('../maths/mathsFunctions.js');

router.get('/', (req, res) => {
	let numbers = _.get(req, 'query.numbers', false);
	if (numbers) {
		return res.send(String(maths.sumOfArray(numbers)));
	}
	return res.status(400).send("Numbers are required to multiply");
});

module.exports = router;