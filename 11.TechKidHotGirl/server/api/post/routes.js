const express = require('express');
const PostModel = require("./model")

const postRouter = express.Router();

postRouter.get("/:id", async function (req, res) {

    try {
        const id = req.params.id;
        const postContent = await PostModel.findById(id).exec();
        res.status(201).json(postContent);
    } catch (error) {
        res.status(error.status || 500).end(error.message || 'Internal server error');
    }
});

postRouter.get('/', async function(req,res){
    try{
        const after = req.query.after;
        const pageSize =Number(req.query.pageSize);

        const filter = {};
        if(after){
            filter._id = {$lt: after};
        }
        const data = await PostModel.find(filter).sort({_id: -1}).populate("author", "_id username fullname createdAt").limit(pageSize + 1).exec();
        console.log(data);

        res.status(200).json({
            data: data.length >pageSize ? data.slice(0, pageSize) : data,
            after: data.length > pageSize ? data[pageSize]._id : undefined,
        });
    }catch(error){
        res.status(error.status || 500).end(error.message || "internal sever error");
    }
});

postRouter.post("/", async function (req, res) {
   
    try {
        if(req.session.authUser){
            console.log(req.session)
            const postContent = req.body;
            const newPost = new PostModel(postContent);
            await newPost.save();
            res.status(201).json({
                id: newPost._id,
            });
        }else{
            res.status(403).json({
                success: false,
                message: "please login",
            });
        }
    } catch (error) {
        res.status(error.status || 500).end(error.message || 'Internal server error');
    }
});
module.exports = postRouter;