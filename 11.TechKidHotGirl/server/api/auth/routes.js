const express = require('express');
const bcryptjs = require('bcryptjs');
const userModel = require('../users/model');


const authRouter = express.Router();

authRouter.post('/register',async function(req,res){
    try{
        const userInfo = req.body;

        // hash password
        const hashPassword = bcryptjs.hashSync(userInfo.password, 10);

        // save to db
        // ... dùng để giữ nguyên thông tin của các trươngf
        const newUser = new userModel({
            ...userInfo,
            password: hashPassword,
        });
        await newUser.save();
        res.status(201).json({
            id: newUser._id,
        });
    }catch(error){
        res.status(error.status || 500).end(error.message || "internal sever error");
    }
});

authRouter.post('/login', async function(req,res){
    try{
        const username = req.body.username;
        const password = req.body.password;

        const existUser = await userModel.findOne({username: username}).exec();
        if(existUser){
            // check password
            if(bcryptjs.compareSync(password, existUser.password)){
                // save user to session storage
                req.session.authUser = {
                    id: existUser._id,
                    username: existUser.username,
                    fullname: existUser.fullname,
                };
                req.session.save();
                
                res.status(200).json({
                    success: true,
                    message: "Login success",
                });
            }else{
                res.status(200).json({
                    success: false,
                    message: "Password is not correct",
                });
            }

        }else{
            res.status(404).json({
                success: false,
                message: "Username not found",
            });
        }
    }catch(error){
        res.status(error.status || 500).end(error.message || "internal sever error");
    }
});

module.exports = authRouter;