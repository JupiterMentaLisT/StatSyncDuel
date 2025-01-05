const express = require('express');
const router = express.Router();
const challengeController = require('../controllers/challengeController');

// Rutas para desafíos
router.post('/create', challengeController.createChallenge);
router.post('/verify', challengeController.verifyChallenge);

module.exports = router;
