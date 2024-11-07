const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  surveyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Survey' },
  answers: [{ questionId: String, answer: String }]
});

module.exports = mongoose.model('Response', ResponseSchema);
