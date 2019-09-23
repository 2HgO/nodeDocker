// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = {
	name: 'practice',
	port: 3000,
	host: '0.0.0.0',
}

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
	res.status(200).json({
	status: 'success',
	message: 'hi gog',
	});
});

app.listen(config.port, config.host, e => {
	if (e) {
		throw new Error('Internal Server Error');
	}
	console.log(`Server started alright on port ${config.port}`);
});
