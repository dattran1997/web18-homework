const express = require("express");
const app = express();

//dùng nodemon để tự restart server


//tạo thêm folder public để chứa file css thì node js mới đọc đc
app.use(express.static(__dirname + '/public'));

//Router
app.get("/", function(reqest, response){
    console.log(reqest);
    response.send("hello world");
});

app.get("/about",function(req, res){
    // res.send("<h1> hi buddy </h1>");
    // dùng dirname để lấy đường dẫn tương đối để send file html từ 1 thư mục khác
    res.sendFile(__dirname + "/templates/nav-bar.html");
});

app.listen("9999",function(err){
    if(err) console.log(err)
    else console.log("server start successful !!!");
});