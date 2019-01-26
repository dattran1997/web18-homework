const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");

app.use(express.static("views"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req,res) => {
    let questions = [];
    try{
        questions = JSON.parse(fs.readFileSync("database.json","utf-8"));
    }catch(erorr){
        console.log('file empty');
    }
    // res.sendFile(__dirname +"/views/answer.html");
    if(questions.length == 0){
        res.send("question list is empty!");
    }else{
        const index = Math.floor(Math.random()*questions.length);
        const randomQuestion = questions[index];
        // <a href="vote/no/${randomQuestion.id}">Sai</a>
        // <a href="vote/yes/${randomQuestion.id}">Đúng</a>
        // <a href="vote/${randomQuestion.id}?result="yes"">Sai</a>
        // <a href="vote/${randomQuestion.id}?result="no"">Đúng</a>
        res.send(`
        <h1>${randomQuestion.content}</h1>
        <button id="yesButton">Đúng</button>
        <button id="noButton>Sai</button>
        <a href="question/?result=${randomQuestion.id}">Kết quả vote</a>
        <a href="question/?result="other"">Câu hỏi khác</a>
        `);
    }
})

// thêm : tên biến vào route để lấy dữ liệu tại / của route đấy
app.get("/vote/:questionID",(req,res) => {
    // req.param.quetionID dùng để lấy dữ liệu ra tại route
    console.log(req.params.questionID);
    const {questionID} = req.params;
    const {result} = req.query;
    let questions = [];
    try{
        questions = JSON.parse(fs.readFileSync("database.json","utf-8"));
    }catch(erorr){
        console.log('file empty');
    }
    questions.forEach((item,index) => {
        if(item.id == questionID){
            if(result == "yes"){
                questions[index].yes +=1;
            }else{
                questions[index].no +=1;
            }
        }
    });
    fs.writeFileSync("database.json",JSON.stringify(questions)); 
    res.redirect("/");
});

app.get("/question/",(req,res) => {
    // req.param.quetionID dùng để lấy dữ liệu ra tại route
    console.log(req.params.questionID);
    // const {questionID} = req.params;
    const {result} = req.query;
    let questions = [];
    try{
        questions = JSON.parse(fs.readFileSync("database.json","utf-8"));
    }catch(erorr){
        console.log('file empty');
    }
    questions.forEach((item,index) => {
        if(result == item.id){
            const yesPer = Math.round((item.yes / (item.yes + item.no))*100).toFixed(2);
            const noPer = 100 - yesPer;
            res.send(`
                <h1>${item.content}</h1>
                <p> yes: ${yesPer}</p>
                <p> no: ${noPer}</p>
            `);
        }else if (result == "other"){
            res.redirect("/");
        }
    });
    fs.writeFileSync("database.json",JSON.stringify(questions)); 
    res.redirect("/");
});

app.get("/ask", (req,res) => {
    res.sendFile(__dirname + "/views/ask.html");
});

app.post("/addquestion",(req,res) => {
    console.log("add new question");

    // req.on("data", (data) => {
    //     console.log(data + "");
    // });
    console.log(req.body);
    // const questionContent = res.body.questionContent;
    const {questionContent} = req.body; //bóc dữ liệu từ form

    // tạo mảng lưu câu hỏi mới và câu hỏi cũ
    let questions = [];
    try{
        questions = JSON.parse(fs.readFileSync("database.json","utf-8"));
    }catch(erorr){
        console.log('file empty');
    }
    console.log(questions);
    newQuestion = {
        id: questions.length,
        content: questionContent,
        yes: 0,
        no: 0
    }
    // lưu câu hỏi vào mảng
    questions.push(newQuestion);
    fs.writeFileSync("database.json",JSON.stringify(questions));    
    res.redirect("/");
});

app.get("/getTotalQuestion",(req,res) => {
    console.log("request recieved");
    let questions = [];
    try{
        questions = JSON.parse(fs.readFileSync("database.json","utf-8"));
    } catch(error){
        console.log(error);
    }
    const answer = {
        totalQuestion : questions.length
    }
    // status default = 200
    res.status(200).send(answer);
});


// khi chay cẩn thận khi 2 web chay cung 1 port
app.listen("9999",function(err){
    if(err) console.log(err)
    else console.log("server start successful !!!");
});