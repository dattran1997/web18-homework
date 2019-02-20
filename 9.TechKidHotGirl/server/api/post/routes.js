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

postRouter.post("/", async function (req, res) {

   
    try {
        const postContent = req.body;
        const newPost = new PostModel(postContent);
        await newPost.save();
        res.status(201).json({
            id: newPost._id,
        });
    } catch (error) {
        res.status(error.status || 500).end(error.message || 'Internal server error');
    }
});
module.exports = postRouter;