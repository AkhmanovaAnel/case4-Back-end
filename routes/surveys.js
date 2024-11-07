const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const Survey = require('../models/Survey');

router.post('/create', auth, async (req, res) => {
  const { title, questions } = req.body;
  try {
    const survey = new Survey({ title, questions });
    await survey.save();
    res.json(survey);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

router.get('/', async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.json(surveys);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
