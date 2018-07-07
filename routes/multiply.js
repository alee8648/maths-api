const router = require('express').Router();
const debug = require('debug')('Maths');
const _ = require('lodash');

router.get('/', (req, res) => {
	let numbers = _.get(req, 'query.numbers', []);
	debug("numbers", numbers);
	if ( numbers.constructor === Array  && numbers.length > 0) {
		let response = numbers.reduce((total, value) => {
			debug("total", total, "value", value);
			return total * parseInt(value);
		}, 1);
		return res.send(String(response));
	}
	return res.status(400).send("Numbers are required to multiply");

});

module.exports = router;