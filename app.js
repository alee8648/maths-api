const express = require('express');
const app = express();

app.use('/multiply', require('./routes/multiply.js'));
app.use('/divide', require('./routes/divide.js'));
app.use('/d20', require('./routes/d20.js'));

app.all('/', (req, res) => {
	res.status(404).send('Page could not be found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Starting on port ${port}`);
});
