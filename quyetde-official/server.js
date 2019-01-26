const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const util = require('util');
const mongoose = require('mongoose');
const QuestionModel = require('./models/question');

// sau khi chay xong thi chay ham trong no
mongoose.connect('mongodb://localhost:27017/web18', (error) => {
	if(error) {
		console.log(error);
	}else{
		console.log("connect to mongo successful");
	}
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('public'));

// routers for page
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/ask", (req, res) => {
	res.sendFile(__dirname + "/public/html/ask.html");
});

app.get("/answer/:questionId", (req, res) => {
	res.sendFile(__dirname + "/public/html/answer.html");
});

// routers for json data
app.post('/api/questions', async (req, res) => {
	try {
		const { questionContent } = req.body;

		let questions = [];

		const newQuestion = {
			content: questionContent,
			yes: 0,
			no: 0,
			createdAt: new Date(),
		}
		const result = await QuestionModel.create([newQuestion]);
		console.log(result);

		res.json({
			success: true,
		});
	} catch (error) {
		res.json({
			success: false,
			message: error.message,
		});
	}
});

app.get('/api/questions/getRandomQuestion', (req, res) => {
	try {
		let questions = [];
		try {
			await QuestionModel.find(function(err, questionList){
				if(err) return console.log(error);
				questions = questionList;
			});

			if(questions.length == 0){
				res.send("questions empty");
			}else{
				const index = Math.floor(Math().random * questions.length);
				ranQuestion = questions[index];
			}
		} catch (error) {
			console.log(error);
			res.status(500).end(error.message);
		}

		res.json(ranQuestion);
	} catch (error) {
		res.json({
			success: false,
			message: error.message,
		});
	}
});

app.get('/api/questions/getQuestionById/:questionId', (req, res) => {
	try {
		const { questionId } = req.params;

		let questions = [];
		try {
			questions = JSON.parse(fs.readFileSync("database.json"));
		} catch (error) {
			console.log(error);
			res.status(500).end(error.message);
		}

		const seletedQuestion = questions.filter((item) => item.id.toString() === questionId.toString())[0];
		if (seletedQuestion) {
			res.json(seletedQuestion);
		} else {
			res.json({
				success: false,
				message: 'Question not found'
			});
		}
	} catch (error) {
		res.json({
			success: false,
			message: error.message,
		});
	}
});


app.listen("3000", (err) => {
	if(err) console.log(err)
	else console.log("Server start success");
});