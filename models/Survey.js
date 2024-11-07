const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      questionText: String,
      questionType: String, // text, radio, checkbox
      options: [String]
    }
  ]
});

module.exports = mongoose.model('Survey', SurveySchema);
