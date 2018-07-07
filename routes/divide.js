// External dependencies
const router = require('express').Router();
const debug = require('debug')('Maths');
const _ = require('lodash');

// Internal dependencies
const maths = require('../maths/mathsFunctions.js');

router.get('/', (req, res) => {
	let numbers = _.get(req, 'query.numbers', false);
	if ( numbers ) {
		return res.send(String(maths.divideArray(numbers)));
	}
	return res.status(400).send("At least two numbers are required for division");
});

module.exports = router;