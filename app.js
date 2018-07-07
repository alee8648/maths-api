const express = require('express');
const app = express();

app.use('/multiply', require('./routes/multiply.js'));
app.use('/divide', require('./routes/divide.js'));

app.all('/', (req, res) => {
	res.status(404).send('Page could not be found');
});

app.listen('3000', () => {
	console.log('starting');
});
