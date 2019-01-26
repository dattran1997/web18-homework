const mongoose = require('mongoose');


// định nghĩa schema trong mongodb giống như trong tạo collection của mongo engine
const questionSchema = new mongoose.Schema({
    content: String,
    yes: {
        type: Number,
        default: 0,
    },
    no: {
        type: Number,
        default: 0,
    },
    createdAt: Date,
});

//khởi tạo collection
const QuestionModel = mongoose.model("Question",questionSchema);

module.exports = QuestionModel;