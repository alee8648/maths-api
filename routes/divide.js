const router = require('express').Router();
const debug = require('debug')('Maths');
const _ = require('lodash');

router.get('/', (req, res) => {
	let numbers = _.get(req, 'query.numbers');

	if ( numbers.constructor === Array && numbers.length > 0 ) {
		let start = numbers.shift();
		let result = numbers.reduce((total, value) => {
			return total / parseInt(value);
		}, parseInt(start));
		debug("result", result);
		return res.send(String(result));
	}
	return res.status(400).send("At least two numbers are required for division");
});

module.exports = router;