const path = require('path');
const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');

const fileDb = require('../fileDb');
const config = require('../config');

const storage = multer.diskStorage({
	destination: (req, file, cb) => cb(null, config.uploadPath),
	filename: (req, file, cb) => cb(null, nanoid() + path.extname(file.originalname))
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
	const messages = await fileDb.getItems();
	res.send(messages);
});

router.post('/', upload.single('image'), async (req, res) => {

	if (req.file) {
		req.body.image = req.file.filename;
	}
	if (!req.body.message) {
		res.status(404).send({message: 'Please enter a message!'});
	}
		await fileDb.addItem(req.body);
		res.send(req.body.id);
});

module.exports = router;