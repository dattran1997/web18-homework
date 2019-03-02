const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./api/users/routes');
const postRouter = require('./api/post/routes');
const authRouter = require('./api/auth/routes');
const expressSession = require('express-session');

const boostrap = async function () {
    try {
        // init app
        const app = express();

        // connect to mongodb
        await mongoose.connect('mongodb://localhost:27017/teckid-hotgirl');

        //user middleware + routers
        app.use(expressSession({
            secret: 'keyboard cat',
            resave: false,
            saveUninitialized: true,
        }));
        app.use(bodyParser.urlencoded({
            extended: false
        }));
        app.use(bodyParser.json());
        app.use("/api/users", userRouter);
        app.use("/api/post", postRouter);
        app.use('/api/auth', authRouter);
        //start server
        await app.listen(process.env.PORT || 3000);
        console.log(`server listen on port ${process.env.PORT || 3000}...`)
    } catch (error) {
        console.log(error);
    }

};

boostrap();