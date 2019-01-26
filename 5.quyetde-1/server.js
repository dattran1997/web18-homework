const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req,res) => {
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
        res.send(`
        <h1>${randomQuestion.content}</h1>
        // <a href="vote/no/${randomQuestion.id}">Sai</a>
        // <a href="vote/yes/${randomQuestion.id}">Đúng</a>
        <a href="vote/${randomQuestion.id}?voteOption="yes">Sai</a>
        <a href="vote/${randomQuestion.id}?voteOption="no">Đúng</a>
        <a href="question/${randomQuestion.id}?voteOption">Kết quả vote</a>
        <a href="question/other">Câu hỏi khác</a>
        `);
    }
});

// có 2 cách để truyền biến là dùng param và dùng query (param thì dùng trên đường dẫn và ở tại hàm route thì có dấu : và gọi bằng params 
// còn query thì chỉ cần truyền biến sau dấu ? nối nhiều biến bằng dấu & và gọi băng query )

// thêm : tên biến vào route để lấy dữ liệu tại / của route đấy
app.get("/vote/:questionID",(req,res) => {
    // req.param.quetionID dùng để lấy dữ liệu ra tại route
    console.log(req.params.questionID);
    // console.log(req.params.voteOption);
    const {questionID} = req.params;
    // const {voteOption} = req.params;
    const {voteOption} = req.query;

    let questions = [];
    try{
        questions = JSON.parse(fs.readFileSync("database.json","utf-8"));
    }catch(erorr){
        console.log('file empty');
    }
    questions.forEach((item,index) => {
        if(item.id == questionID){
            // if(voteOption == "yes"){
            //     questions[index].yes +=1;                
            // }else if(voteOption == "no"){
            //     questions[index].no +=1;
            // }

            voteOption == "yes" ? questions[index].yes +=1 : questions[index].no +=1;
        }
    });
    fs.writeFileSync("database.json",JSON.stringify(questions)); 
    res.redirect("/");
});

//không nên để 2 chức năng có chung 1 gốc route vì js đễ đọc nhầm (đầu - cuối) 
// eg: vote/question/...
app.get("/question/:choise", (req,res) => {
    console.log(req.params.choise);
    const {choise} = req.params;
    questions = []
    try{
        questions = JSON.parse(fs.readFileSync("database.json","utf-8"));
    }catch(erorr){
        console.log('file empty');
    }   
    questions.forEach((item,index) =>{
        if(choise == item.id){
            res.send(`
                <h1>${item.content}</h1>
                <p> yes: ${item.yes}</p>
                <p> no: ${item.no}</p>
            `);
        }else if(choise == "other"){
            res.redirect("/");
        }
    });

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
    // dùng body parser để bóc form
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

// khi chay cẩn thận khi 2 web chay cung 1 port
app.listen("9999",function(err){
    if(err) console.log(err)
    else console.log("server start successful !!!");
});